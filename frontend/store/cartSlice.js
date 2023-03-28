import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart: (state, action) => {
            const item = state.cartItems.find((p) => p.id === action.payload.id);
            if (item) {
                item.quantity++;
            } else {
                // if product is not exist in cart 
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },

        // deleteToCart: () => {

        // }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart } = cartSlice.actions

export default cartSlice.reducer