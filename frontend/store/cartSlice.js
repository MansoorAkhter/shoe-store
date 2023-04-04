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
                // if product is already exist in cart then increase quantity
                item.quantity++;
                item.attributes.price = item.oneQuantityPrice * item.quantity;
            } else {
                // if product is not exist in cart then add to cart
                state.cartItems.push({ ...action.payload, quantity: 1 })
            }
        },
        updateCart: (state, action) => {
            state.cartItems = state.cartItems.map((p) => {
                if (p.id === action.payload.id) {
                    // update price
                    if (action.payload.key === "quantity") {
                        p.attributes.price = p.oneQuantityPrice * action.payload.val
                    }
                    // update quantity
                    return { ...p, [action.payload.key]: action.payload.val }
                }
                return p;
            })
        }

        // deleteToCart: () => {

        // }
    },
})

// Action creators are generated for each case reducer function
export const { addToCart, updateCart } = cartSlice.actions

export default cartSlice.reducer