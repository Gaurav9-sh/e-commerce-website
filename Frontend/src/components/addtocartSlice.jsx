import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems: []
}

export const addtocartSlice = createSlice({
    name: 'cartitem',
    initialState,
    reducers: {
        addToCart: (state, action) =>{
            const {id, title,price,image,userId} = action.payload;
            const cartitem = {
                id,
                title,
                price,
                image,
                userId
            }
            state.cartitems.push(cartitem)
        },

        removeToCart: (state, action) =>{
            state.cartitems = state.cartitems.filter((cartitem) => cartitem.id !== action.payload)
        },

        updateCartItems: (state,action) => {
            state.cartitems = action.payload
        }
    }
})

export const {addToCart, removeToCart, updateCartItems} = addtocartSlice.actions
export default addtocartSlice.reducer