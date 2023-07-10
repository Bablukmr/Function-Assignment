import {configureStore} from '@reduxjs/toolkit';
import CrudSlice from './CrudSlice';

const store = configureStore({
    reducer:{CRUD:CrudSlice},
})
// console.log(store)
export default store;