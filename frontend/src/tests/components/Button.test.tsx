import { render, screen, fireEvent } from '@testing-library/react'
import Button from '../../app/components/Button'
import { BrowserRouter as Router } from 'react-router-dom';

describe('Test button', () => {

  it('Test rendering', () => {
    render(<Router>
      <Button text='Test button render' />
    </Router>)

    const button = screen.getByText("Test button render")
    expect(button).toBeInTheDocument();

  })

  it('Test Onclick callback', () => {
    const callBack = jest.fn(() => {
      return "Has been called!"
    })

    const { getByText } = render(<Router><Button text="Test button onclick" onClick={callBack} /></Router>)

    fireEvent.click(getByText('Test button onclick'));
    expect(callBack.mock.calls.length).toBe(1)


  })

})