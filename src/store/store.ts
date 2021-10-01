
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import rootreducer from "./reducers/rootreducer";
const rootReducer = combineReducers(rootreducer)
export const store = createStore(rootReducer,applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
