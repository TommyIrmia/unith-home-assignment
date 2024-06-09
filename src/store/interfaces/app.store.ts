import { AppError } from "@/models/app.model";
import { Item } from "@/models/item.model";


export interface AppState {
	items: Item[] | null
	activeItem: Item | null
	isLoading: boolean
	errors: AppError[] | undefined
}

export enum AppActionType {
	SET_ITEMS = 'SET_ITEMS',
	SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM',
	SET_ERRORS = 'SET_ERRORS',
	SET_IS_LOADING = 'SET_IS_LOADING',
}


export type AppAction =
	| SetItemsAction
	| SetActiveItemAction
	| SetErrorsAction
	| SetIsLoadingAction


interface SetItemsAction {
	type: AppActionType.SET_ITEMS
	items: Item[]
}

interface SetActiveItemAction {
	type: AppActionType.SET_ACTIVE_ITEM
	activeItem: Item
}

interface SetErrorsAction {
	type: AppActionType.SET_ERRORS
	errors: AppError[]
}

interface SetIsLoadingAction {
	type: AppActionType.SET_IS_LOADING
	isLoading: boolean
}

