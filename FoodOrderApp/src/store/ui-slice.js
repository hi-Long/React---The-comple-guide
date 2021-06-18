import { createSlice } from "@reduxjs/toolkit"

const uiInitialState = {
    cartIsShown: false,
    isLoading: true,
    error: null,
    onCheckout: false,
    onOrdering: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: uiInitialState,
    reducers: {
        toggleCart: (state, action) => {
            state.cartIsShown = action.payload
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        },
        setOnCheckout: (state, action) => {
            state.onCheckout = action.payload
        },
        setOnOrdering: (state, action) => {
            state.onOrdering = action.payload
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer