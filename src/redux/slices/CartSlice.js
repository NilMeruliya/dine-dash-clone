import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, action) => {
            const doesItemExist = state.cart.find(item => item.id === action.payload.id);
            console.log("isExist");
            console.log(doesItemExist);
            if( doesItemExist) {
                state.cart = state.cart.map(
                    item => item.id === action.payload.id ? 
                     {...item, qty: item.qty + 1} : item
                 ) }  else {
                state.cart.push(action.payload)
            }
           
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id)
        },
        incrementQty: (state, action) => {
            state.cart = state.cart.map(item => item.id === action.payload.id ?  {...item, qty: item.qty + 1} : item)
        },
        decrementQty: (state, action) => {
            state.cart = state.cart.map(item => item.id === action.payload.id ?  {...item, qty: item.qty - 1} : item)
        },

    } 
})

export const { addToCart, removeFromCart, incrementQty, decrementQty} = CartSlice.actions

export default CartSlice.reducer