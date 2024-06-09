import { ItemAction, ItemActionType, ItemState } from "../interfaces/item.store"

const initialState: ItemState = {
	items: null,
	activeItem: null,
	isLoading: false,
	errors: undefined
}

export function itemReducer(state = initialState, cmd = {} as ItemAction) {
	switch (cmd.type) {
		case ItemActionType.SET_ITEMS:
			return {
				...state,
				items: cmd.items
			}

		case ItemActionType.SET_ACTIVE_ITEM:
			return {
				...state,
				items: cmd.activeItem
			}
			
		case ItemActionType.SET_ERRORS:
			return {
				...state,
				errors: cmd.errors
			}

		case ItemActionType.SET_IS_LOADING:
			return {
				...state,
				isLoading: cmd.isLoading
			}

		default:
			return state
	}
}