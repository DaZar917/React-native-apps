import {combineReducers} from 'redux'
import LibrariesReducer from './libraries'
import ShopsReducer from './shops'
import popularReducer from './popular'
import fictionsReducer from './fiction'
import magazinesReducer from './magazines'
import newsReducer from './news'
import scintificsReducer from './scientific'
const allReducers = combineReducers ({
    libraries: LibrariesReducer,
    shops: ShopsReducer,
    populars: popularReducer,
    fictions: fictionsReducer,
    magazines: magazinesReducer,
    news: newsReducer,
    scintifics: scintificsReducer
})

export default allReducers;