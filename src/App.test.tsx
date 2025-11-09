import { render, screen } from '@testing-library/react'
import App from './App'
import '@testing-library/jest-dom'

test('renderiza o texto principal da home', () => {
  render(<App />)

  const mainText = screen.getByText(
    /Viva experiências gastronômicas no conforto da sua casa/i
  )
  expect(mainText).toBeInTheDocument()
})
