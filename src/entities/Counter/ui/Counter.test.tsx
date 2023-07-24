import { componentRender } from "shared/lib/tests/componenRender"
import { screen } from "@testing-library/react"
import { userEvent } from '@storybook/testing-library';
import { Counter } from "./Counter"

describe('Counter', ()=>{
    test('test counter', () =>{
      componentRender(<Counter/>, {
        initialState: {counter: {value: 10}} 
      })
      expect(screen.getByTestId('value-title')).toHaveTextContent('10')    
    })


    test('increment', () =>{
      componentRender(<Counter/>, {
        initialState: {counter: {value: 9}} 
      })
      userEvent.click(screen.getByTestId('increment'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('10')    
    })

    
    test('decrement', () =>{
      componentRender(<Counter/>, {
        initialState: {counter: {value: 10}} 
      })
      userEvent.click(screen.getByTestId('decrement'))
      expect(screen.getByTestId('value-title')).toHaveTextContent('9')    
    })

})


