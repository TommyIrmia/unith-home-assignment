import { httpService } from "@/services/http.service"
import { storageService } from "@/services/storage.service"

import { API_IMAGES_URL, CACHE_VALID_TIME, ITEM_CACHE_KEY, MAX_FETCH_RETRIES } from "@/services/const.service"

import { Item, ItemCacheData, ItemMapResponse, ItemResponse } from "@/models/item.model"
import { devLog } from "./dev-log.service"


export const itemService = {
	getItems,
}

async function getItems(retryCount = 0): Promise<Item[]> {
	try {
		const data = await httpService.get<ItemMapResponse>(API_IMAGES_URL)
		devLog('**Got data from API**');

		const items: Item[] = formatItems(data)
		_cacheData(items)
		return items
	} catch (err) {
		const cachedItems = _loadCachedData()

		if (cachedItems) {
			devLog('**Got data from Cache**');
			return cachedItems
		}

		if (retryCount < MAX_FETCH_RETRIES) {
			return getItems(retryCount + 1)
		}

		throw err
	}
}

function formatItems(itemMap: ItemMapResponse): Item[] {
	return Object.entries(itemMap)
		.map(([itemId, item]) => createItem(itemId, item))
		.sort((i1, i2) => i1.idx - i2.idx)
}

function createItem(itemId: string, item: ItemResponse): Item {
	return {
		id: itemId,
		desc: item.description,
		imgUrl: item.image === 'empty' ? '' : item.image,
		title: item.title,
		idx: item.index,
	}
}

function _loadCachedData(): Item[] | null {
	const cachedData: ItemCacheData = storageService.load(ITEM_CACHE_KEY, [])
	if (cachedData?.expirationTime < Date.now()) return null
	return cachedData.data
}

function _cacheData(data: Item[]) {
	storageService.save(ITEM_CACHE_KEY, {
		data,
		expirationTime: Date.now() + CACHE_VALID_TIME
	})
}




