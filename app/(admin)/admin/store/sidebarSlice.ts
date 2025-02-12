import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SidebarState {
  // sections: Record<string, boolean>
  products: boolean
  category: boolean
  training: boolean
  order: boolean
  training_program: boolean
  enrollment: boolean
  testimonial: boolean
  quotation: boolean
  services: boolean
}

const initialState: SidebarState = {
  products: false,
  category: false,
  training: false,
  order: false,
  training_program: false,
  enrollment: false,
  testimonial: false,
  quotation: false,
  services: false,
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
        state.enrollment = false
        state.testimonial = false
        state.quotation = false
        state.services = false
      }
    },
    toggleCategory: (state) => {
      state.category = !state.category
      if (state.category) {
        state.products = false
        state.training = false
        state.order = false
        state.training_program = false
        state.enrollment = false
        state.testimonial = false
        state.quotation = false
        state.services = false
      }
    },
    toggleTraining: (state) => {
      state.training = !state.training
      if (state.training) {
        state.category = false
        state.products = false
        state.order = false
        state.training_program = false
        state.enrollment = false
        state.testimonial = false
        state.quotation = false
        state.services = false
      }
    },
    toggleOrder: (state) => {
      state.order = !state.order
      if (state.order) {
        state.category = false
        state.products = false
        state.training = false
        state.training_program = false
        state.enrollment = false
        state.testimonial = false
        state.quotation = false
        state.services = false
      }
    },
    toggleTrainingProgram: (state) => {
      state.training_program = !state.training_program
      if (state.training_program) {
        state.category = false
        state.products = false
        state.training = false
        state.order = false
        state.enrollment = false
        state.testimonial = false
        state.quotation = false
        state.services = false
      }
    },
    toggleEnrollment: (state) => {
      state.enrollment = !state.enrollment
      if (state.enrollment) {
        state.category = false
        state.products = false
        state.training = false
        state.order = false
        state.training_program = false
        state.testimonial = false
        state.quotation = false
        state.services = false
      }
    },
    toggleTestimonial: (state) => {
      state.testimonial = !state.testimonial
      if (state.testimonial) {
        state.category = false
        state.products = false
        state.training = false
        state.order = false
        state.training_program = false
        state.enrollment = false
        state.quotation = false
        state.services = false
      }
    },
    toggleQuotation: (state) => {
      state.quotation = !state.quotation
      if (state.quotation) {
        state.category = false
        state.products = false
        state.training = false
        state.order = false
        state.training_program = false
        state.enrollment = false
        state.testimonial = false
        state.services = false
      }
    },
    toggleServices: (state) => {
      state.services = !state.services
      if (state.services) {
        state.category = false
        state.products = false
        state.training = false
        state.order = false
        state.training_program = false
        state.enrollment = false
        state.testimonial = false
        state.quotation = false
      }
    },
  },
})

export const {
  toggleProducts,
  toggleCategory,
  toggleTraining,
  toggleOrder,
  toggleTrainingProgram,
  toggleEnrollment,
  toggleTestimonial,
  toggleQuotation,
  toggleServices
} = sidebarSlice.actions
export default sidebarSlice.reducer
