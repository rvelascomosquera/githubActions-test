import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('Pruebas <CounterApp />', () => {
  
  const initialValue = 10

  test('Debe hacer match con el snapshot', () => { 
    
    const { container } = render( <CounterApp /> )
    expect(container).toMatchSnapshot();
  })

  test('Debe mostrar el valor inicial de 10', () => { 
  
    const { container } = render( <CounterApp  value = {initialValue}/> )
    expect(screen.getByText(10)).toBeTruthy();
  })

  test('Debe incrementar al presionar el boton + ', () => { 

    render( <CounterApp value={initialValue} /> )
    fireEvent.click (screen.getByText('+'))
    expect (screen.getByText('11')).toBeTruthy();
  })

  test('Debe decrementar -1 el valor inicial al presionar el boton - ', () => { 

    render( <CounterApp value={initialValue} /> )
    fireEvent.click (screen.getByText('-'))
    expect (screen.getByText('9')).toBeTruthy();
  })

  test('Devolver el valor inicial del contador al presionar el boton reset  ', () => { 
    
    render( <CounterApp value={initialValue} /> )
    fireEvent.click (screen.getByRole('button', {name: 'reset'})) // Busca elemento con el nombre de reset
    expect (screen.getByText('10')).toBeTruthy();
  })
});