import { store } from "../store"
import { AppActionType } from "../interfaces/app.store"

import { itemService } from "@/services/item.service"
import { AppError } from "@/models/app.model"


export async function loadItems() {
	setIsLoading(true)
	try {
		const items = await itemService.getItems()
		store.dispatch({ type: AppActionType.SET_ITEMS, items })
	} catch (err) {
		console.log('[itemActions -> loadItems()] : Had issues loading items', err)
		store.dispatch({ type: AppActionType.SET_ERRORS, errors: [err as AppError] })
		throw err
	} finally {
		setIsLoading(false)
	}
}

export function setIsLoading(isLoading: boolean) {
	store.dispatch({ type: AppActionType.SET_IS_LOADING, isLoading })
}

export function setError(error: AppError) {
	const errors = store.getState().appModule.errors || []
	store.dispatch({ type: AppActionType.SET_ERRORS, errors: [...errors, error] })
}