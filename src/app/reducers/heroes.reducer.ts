import { storageHeroes } from '../interfaces'
import { combineReducers, createStore, Reducer } from 'redux'

export const  vibilityFilter=(state='SHOW_ALL', action)=>{
    switch (action["type"]) {
        case 'SET_VISIBILITY_FILTER':
                return action.filter;
        default:
                return state;
    }

}

export const allHeroes = (state=[],action)=>{
    switch (action.type) {
        case 'ADD_ITEM':
            return state=[...state,action.Hero]
        default:
            return state
    }
}

export const reducerHeroes: Reducer<storageHeroes> = combineReducers({vibilityFilter, allHeroes})