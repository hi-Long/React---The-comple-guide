import { createSlice } from "@reduxjs/toolkit"

const initialCartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        setCart: (state, action) => {
            if (action.payload != null) {
                state.cart = action.payload
            }
        },
        addToCart: (state, action) => {
            const newMeal = action.payload
            const existMealIndex = state.cart.findIndex(m => m.name === newMeal.name)
            if (existMealIndex !== -1) {
                state.cart[existMealIndex].amount += newMeal.amount
            } else {
                state.cart.push(newMeal)
            }
        },
        changeMealAmount: (state, action) => {
            const { name, type } = { ...action.payload }
            const existMealIndex = state.cart.findIndex(m => m.name === name)
            const existMealAmount = state.cart[existMealIndex].amount
            if (type === 'remove') {
                if (existMealAmount === 1) {
                    state.cart.splice(existMealIndex, 1)
                } else {
                    state.cart[existMealIndex].amount -= 1
                }
            } else {
                state.cart[existMealIndex].amount += 1
            }
        }
    }
})

export const cartActions = cartSlice.actions
export default cartSlice.reducer