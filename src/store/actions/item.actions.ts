import { itemService } from "@/services/item.service"
import { ItemActionType } from "../interfaces/item.store"
import { store } from "../store"
import { AppError } from './../../models/error.model';


export async function loadItems() {
	setIsLoading(true)
	try {
		const items = await itemService.getItems()
		store.dispatch({ type: ItemActionType.SET_ITEMS, items })
	} catch (err) {
		console.log('[itemActions -> loadItems()] : Had issues loading items', err)
		store.dispatch({ type: ItemActionType.SET_ERRORS, errors: [err as AppError] })
		throw err
	} finally {
		setIsLoading(false)
	}
}

export function setIsLoading(isLoading: boolean) {
	store.dispatch({ type: ItemActionType.SET_IS_LOADING, isLoading })
}