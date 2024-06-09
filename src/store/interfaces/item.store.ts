import { AppError } from "@/models/error.model";
import { Item } from "@/models/item.model";


export interface ItemState {
	items: Item[] | null
	activeItem: Item | null
	isLoading: boolean
	errors: AppError[] | undefined
}

export enum ItemActionType {
	SET_ITEMS = 'SET_ITEMS',
	SET_ACTIVE_ITEM = 'SET_ACTIVE_ITEM',
	SET_ERRORS = 'SET_ERRORS',
	SET_IS_LOADING = 'SET_IS_LOADING',
}


export type ItemAction =
	| SetItemsAction
	| SetActiveItemAction
	| SetErrorsAction
	| SetIsLoadingAction


interface SetItemsAction {
	type: ItemActionType.SET_ITEMS
	items: Item[]
}

interface SetActiveItemAction {
	type: ItemActionType.SET_ACTIVE_ITEM
	activeItem: Item
}

interface SetErrorsAction {
	type: ItemActionType.SET_ERRORS
	errors: AppError[]
}

interface SetIsLoadingAction {
	type: ItemActionType.SET_IS_LOADING
	isLoading: boolean
}

