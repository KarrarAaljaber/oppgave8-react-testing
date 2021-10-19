import { render } from "@testing-library/react"
import Multiply from "./Multiply"
import { fireEvent, screen } from '@testing-library/dom'


it('should check that value starts with 1', ()  =>{

    render(<Multiply />)

    const val = document.querySelector('p')
    expect(val).toHaveTextContent("1")
})

it('should multiply 5 by 1 when the 5*1 button is pressed', () => {
    render(<Multiply />)
  
  
    fireEvent.click(screen.getByText('5 * 1'))
  
    expect(document.querySelector('p')).toHaveTextContent('5')
  })

it('should multiply 5 by 2 when the 5*2 button is pressed', () => {
    render(<Multiply />)
  
  
    fireEvent.click(screen.getByText('5 * 2'))
  
    expect(document.querySelector('p')).toHaveTextContent('10')
  })
  
it('should multiply 5 by 3 when the 5*3 button is pressed', () => {
    render(<Multiply />)
  
  
    fireEvent.click(screen.getByText('5 * 3'))
  
    expect(document.querySelector('p')).toHaveTextContent('15')
  })
  
  it('should multiply 5 by 4 when the 5*4 button is pressed', () => {
    render(<Multiply />)
  
  
    fireEvent.click(screen.getByText('5 * 4'))
  
    expect(document.querySelector('p')).toHaveTextContent('20')
  })
  
    
  it('should multiply 5 by 5 when the 5*5 button is pressed', () => {
    render(<Multiply />)
  
  
    fireEvent.click(screen.getByText('5 * 5'))
  
    expect(document.querySelector('p')).toHaveTextContent('25')
  })