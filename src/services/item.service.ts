import { httpService } from "./http.service"
import { API_IMAGES_URL, CACHE_VALID_TIME, ITEM_CACHE_KEY } from "./const.service"

import { Item, ItemMapResponse, ItemResponse } from "@/models/item.model"
import { storageService } from "./storage.service"


export const itemService = {
	getItems,
}

async function getItems() {
	try {
		const data = await httpService.get<{}, ItemMapResponse>(API_IMAGES_URL)
		const items: Item[] = formatItems(data)

		_cacheData(items)
		return items
	} catch (err) {
		const cachedData: Item[] = _loadCachedData()
		return cachedData
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
		imgUrl: item.image,
		title: item.title,
		idx: item.index,
	}
}

function _loadCachedData() {
	console.log('**Got data from Cache**');
	const cachedData = storageService.load(ITEM_CACHE_KEY, [])
	if (cachedData?.expirationTime < Date.now()) return null
	return cachedData.data
}

function _cacheData(data: Item[]) {
	storageService.save(ITEM_CACHE_KEY, {
		data,
		expirationTime: Date.now() + CACHE_VALID_TIME
	})
}




