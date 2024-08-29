import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  sections: Record<string, boolean>
}

const initialState: SidebarState = {
  sections: {
    dashboard: false,
    products: false,
    widgets: false,
  },
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSection: (state, action: PayloadAction<string>) => {
      state.sections[action.payload] = !state.sections[action.payload]
    },
  },
})

export const { toggleSection } = sidebarSlice.actions
export default sidebarSlice.reducer
