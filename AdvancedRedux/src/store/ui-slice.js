import { createSlice } from "@reduxjs/toolkit"

const initialUIState = {
    cartIsVisible: false,
    notification: false
}

const uiSlice = createSlice({
    name: 'ui',
    initialState: initialUIState,
    reducers: {
        toggleCart: state => {
            state.cartIsVisible = !state.cartIsVisible
        },
        setNotification: (state, action) => {
            state.notification = { ...action.payload }
        }
    }
})

export const uiActions = uiSlice.actions
export default uiSlice.reducer
