import { AppAction, AppActionType, AppState } from "@/store/interfaces/app.store"

const initialState: AppState = {
	items: null,
	activeItemId: null,
	isLoading: true,
	errors: undefined
}

export function appReducer(state = initialState, cmd = {} as AppAction) {
	switch (cmd.type) {
		case AppActionType.SET_ITEMS:
			return {
				...state,
				items: cmd.items,
			}

		case AppActionType.SET_ACTIVE_ITEM_ID:
			return {
				...state,
				activeItemId: cmd.itemId
			}

		case AppActionType.SET_ERROR:
			return {
				...state,
				errors: state.errors?.length ? [...state.errors, cmd.error] : [cmd.error]
			}

		case AppActionType.SET_IS_LOADING:
			return {
				...state,
				isLoading: cmd.isLoading
			}

		default:
			return state
	}
}