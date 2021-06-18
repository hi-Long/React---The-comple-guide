import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { uiActions } from "./ui-slice";

const cartInitialState = {
    items: [],
    cartShowing: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: cartInitialState,
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        updateItem: (state, action) => {
            const { id, value } = { ...action.payload }
            const getUpdatedItemIndex = state.items.findIndex(item => item.id === id)
            state.items[getUpdatedItemIndex].quantity += value
            state.items[getUpdatedItemIndex].total = state.items[getUpdatedItemIndex].quantity * state.items[getUpdatedItemIndex].price
        },
        toggleCart: state => {
            state.cartShowing = !state.cartShowing
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer