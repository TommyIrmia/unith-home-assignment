import { store } from "../store"
import { AppActionType } from "../interfaces/app.store"

import { itemService } from "@/services/item.service"
import { errorService } from "@/services/error.service"

import { AppError } from "@/models/app.model"


export function setIsLoading(isLoading: boolean) {
	store.dispatch({ type: AppActionType.SET_IS_LOADING, isLoading })
}

export async function loadItems() {
	setIsLoading(true)
	try {
		const items = await itemService.getItems()
		store.dispatch({ type: AppActionType.SET_ITEMS, items })
	} catch (err: any) {
		console.log('[itemActions -> loadItems()] : Had issues loading items', err)
		setError({ code: err.code, message: "Failed loading items" })
		throw err
	} finally {
		setIsLoading(false)
	}
}

export function setActiveItemId(itemId: string | null = null) {
	store.dispatch({ type: AppActionType.SET_ACTIVE_ITEM_ID, itemId })
}

export function setError(error: Partial<AppError>): AppError {
	const errors = store.getState().appModule.errors || []
	console.log('errors', errors)


	const errorToAdd = errorService.createError(error)
	console.log('errorToAdd', errorToAdd)

	store.dispatch({ type: AppActionType.SET_ERRORS, errors: [...errors, errorToAdd] })
	return errorToAdd
}