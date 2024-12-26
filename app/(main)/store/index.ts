import { configureStore } from "@reduxjs/toolkit";
import menuBarReducer from './menubarSlice'
import pageDropdownReducer from './pageDropdownSlice'

export const store = configureStore({
    reducer: {
        menubar: menuBarReducer,
        pageDropdown: pageDropdownReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch