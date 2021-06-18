import { createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
    isAuthed: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        login: (state) => {
            state.isAuthed = true
        },
        logout: (state) => {
            state.isAuthed = false
        }
    }
})

export const authActions = authSlice.actions
export default authSlice.reducer