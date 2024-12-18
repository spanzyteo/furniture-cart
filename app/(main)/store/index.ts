import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from './menubarSlice'

export const store = configureStore({
    reducer: {
        menubar: menuBarReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch