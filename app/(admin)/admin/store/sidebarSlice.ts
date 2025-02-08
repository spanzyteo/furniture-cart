import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  // sections: Record<string, boolean>
  products: boolean
  category: boolean
  training: boolean
  order: boolean
  training_program: boolean
}

const initialState: SidebarState = {
  products: false,
  category: false,
  training: false,
  order: false,
  training_program: false,
}

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleProducts: (state) => {
      state.products = !state.products
      if (state.products) {
        state.category = false
        state.training = false 
        state.order = false
        state.training_program = false
      }
    },
    toggleCategory: (state) => {
      state.category = !state.category
      if (state.category) {
        state.products = false
        state.training = false
        state.order = false
        state.training_program = false
      }
    },
    toggleTraining: (state) => {
      state.training = !state.training
      if (state.training) {
        state.category = false
        state.products = false
        state.order = false
        state.training_program = false
      }
    },
    toggleOrder: (state) => {
      state.order = !state.order
      if (state.order) {
        state.category = false
        state.products = false
        state.training = false
        state.training_program = false
      }
    },
    toggleTrainingProgram: (state) => {
      state.training_program = !state.training_program
      if (state.training_program) {
        state.category = false
        state.products = false
        state.training = false
        state.order = false
      }
    }
  },
})

export const { toggleProducts, toggleCategory, toggleTraining, toggleOrder, toggleTrainingProgram } = sidebarSlice.actions
export default sidebarSlice.reducer
