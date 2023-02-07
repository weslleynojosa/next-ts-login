import { createSlice } from "@reduxjs/toolkit"


export interface IAuth {
    isLoggedIn: boolean
}

const initialState: IAuth = { isLoggedIn: false }

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state) {
            state.isLoggedIn = true
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice;