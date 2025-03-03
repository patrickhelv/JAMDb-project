import { render } from '@testing-library/react'
import Dashboard from '../../app/components/Dashboard'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from '../../app/store'

describe('Test dashboard', () => {
    it('Test rendering', () => {
        const { baseElement } = render(
            <Provider store={store}>
                <Router>
                    <Dashboard />
                </Router>
            </Provider>,
        )

        expect(baseElement).toBeInTheDocument()
    })
})
