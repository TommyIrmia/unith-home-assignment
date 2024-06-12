import { store } from "@/store/store"
import { AppActionType } from "@/store/interfaces/app.store"

import { itemService } from "@/services/item.service"
import { errorService } from "@/services/error.service"
import { devLog } from "@/services/dev-log.service"

import { AppError } from "@/models/app.model"


export function setIsLoading(isLoading: boolean) {
	store.dispatch({ type: AppActionType.SET_IS_LOADING, isLoading })
}

export async function loadItems() {
	setIsLoading(true)
	try {
		const items = await itemService.getItems()
		store.dispatch({ type: AppActionType.SET_ITEMS, items })
	} catch (err) {
		const appError = err as AppError;
		setError({ code: appError.code, message: "Failed loading items" })
		throw appError
	} finally {
		setIsLoading(false)
	}
}

export function setActiveItemId(itemId: string | null = null) {
	store.dispatch({ type: AppActionType.SET_ACTIVE_ITEM_ID, itemId })
}

export function setError(error: Partial<AppError>): AppError {
	const errorToAdd = errorService.createError(error)
	devLog('Error added to store : ', errorToAdd)
	store.dispatch({ type: AppActionType.SET_ERROR, error: errorToAdd })
	return errorToAdd
}