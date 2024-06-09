import { Reducer, combineReducers, compose, legacy_createStore as createStore } from 'redux'
import { ItemAction, ItemState } from './interfaces/item.store'
import { itemReducer } from './reducers/item.reducer'

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface RootState {
	itemModule: ItemState
}

type AppAction = ItemAction
type RootReducer = Reducer<RootState, AppAction>

const rootReducer = combineReducers({
	itemModule: itemReducer,
}) as RootReducer

export const store = createStore(rootReducer, composeEnhancers())

// window.gStore = store