import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  sections: Record<string, boolean>
  mobileSidebar: boolean
}

const initialState: SidebarState = {
  sections: {
    dashboard: false,
    products: false,
    widgets: false,
  },
  mobileSidebar: false
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSection: (state, action: PayloadAction<string>) => {
      state.sections[action.payload] = !state.sections[action.payload]
    },
    openSidebar: (state) => {
      state.mobileSidebar = true
    },
    closeSidebar: (state) => {
      state.mobileSidebar = false
    }
  },
})

export const { toggleSection, openSidebar, closeSidebar } = sidebarSlice.actions
export default sidebarSlice.reducer
