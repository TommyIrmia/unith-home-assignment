import { Reducer, combineReducers, compose, legacy_createStore as createStore } from 'redux'

import { AppAction, AppState } from '@/store/interfaces/app.store'
import { appReducer } from '@/store/reducers/app.reducer'

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export interface RootState {
	appModule: AppState
}

type StoreAction = AppAction // | OtherAction
type RootReducer = Reducer<RootState, StoreAction>

const rootReducer = combineReducers({
	appModule: appReducer,
}) as RootReducer

export const store = createStore(rootReducer, composeEnhancers())

// window.gStore = store