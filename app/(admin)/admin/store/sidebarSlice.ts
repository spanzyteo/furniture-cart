import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  // sections: Record<string, boolean>
  products: boolean
  category: boolean
}

const initialState: SidebarState = {
  products: false,
  category: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleProducts: (state) => {
      state.products = !state.products
      if (state.products) {
        state.category = false 
      }
    },
    toggleCategory: (state) => {
      state.category = !state.category
      if (state.category) {
        state.products = false
      }
    },
  },
})

export const { toggleProducts, toggleCategory } = sidebarSlice.actions
export default sidebarSlice.reducer
