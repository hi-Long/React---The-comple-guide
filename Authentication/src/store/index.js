import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialAuthState = {
    email: '',
    password: '',
    idToken: '',
    refreshToken: '',
    expiresIn: '',
    error: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setIdToken: (state, action) => {
            state.token = action.payload
        },
        setRefreshToken: (state, action) => {
            state.refreshToken = action.payload
        },
        setExpiresIn: (state, action) => {
            state.expiresIn = action.payload
        },
        setError: (state, action) => {
            state.error = action.payload
        }
    }
})

const store = configureStore({
    reducer: authSlice.reducer
})

export const authActions = authSlice.actions
export default store