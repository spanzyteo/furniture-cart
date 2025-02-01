import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Training from './page'

describe('Training', () => {
  it('renders a heading', () => {
    render(<Training />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})
