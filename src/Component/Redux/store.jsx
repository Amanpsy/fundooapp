import { red } from '@mui/material/colors';
import {createStore ,applyMiddleware, combineReducers} from 'redux';
import { DrawerReducer } from './drawerReducer';

const reducer = combineReducers({
    drawerReducer: DrawerReducer
})


const store = createStore(reducer)

export default store