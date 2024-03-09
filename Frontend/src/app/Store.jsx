import { configureStore } from '@reduxjs/toolkit';
import addtocartSlice from '../components/addtocartSlice';

export const Store = configureStore({
        reducer: addtocartSlice
})