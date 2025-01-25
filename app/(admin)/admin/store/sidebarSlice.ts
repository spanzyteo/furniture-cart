import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  sections: Record<string, boolean>
  products: boolean
}

const initialState: SidebarState = {
  sections: {
    dashboard: false,
    widgets: false,
  },
  products: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSection: (state, action: PayloadAction<string>) => {
      state.sections[action.payload] = !state.sections[action.payload]
    },
    toggleProducts: (state) => {
      state.products = !state.products
    },
    resetSections: (state) => {
      state.sections = {
        dashboard: false,
        widgets: false,
      }
      state.products = false
    },
  },
})

export const { toggleSection, toggleProducts, resetSections} = sidebarSlice.actions
export default sidebarSlice.reducer
