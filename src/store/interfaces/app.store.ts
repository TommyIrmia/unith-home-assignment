import { AppError } from "@/models/app.model"
import { Item } from "@/models/item.model"


export interface AppState {
	items: Item[] | null
	activeItemId: string | null
	isLoading: boolean
	errors: AppError[] | undefined
}

export enum AppActionType {
	SET_ITEMS = 'SET_ITEMS',
	SET_ACTIVE_ITEM_ID = 'SET_ACTIVE_ITEM_ID',
	SET_ERROR = 'SET_ERROR',
	SET_IS_LOADING = 'SET_IS_LOADING',
}


export type AppAction =
	| SetItemsAction
	| SetActiveItemIdAction
	| SetErrorAction
	| SetIsLoadingAction


interface SetItemsAction {
	type: AppActionType.SET_ITEMS
	items: Item[]
}

interface SetActiveItemIdAction {
	type: AppActionType.SET_ACTIVE_ITEM_ID
	itemId: string | null
}

interface SetErrorAction {
	type: AppActionType.SET_ERROR
	error: AppError
}

interface SetIsLoadingAction {
	type: AppActionType.SET_IS_LOADING
	isLoading: boolean
}

