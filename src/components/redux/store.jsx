import {configureStore} from '@reduxjs/toolkit';
import CrudSlice from './CrudSlice';

const store = configureStore({
    reducer:{CRUD:CrudSlice},
})
export default store;