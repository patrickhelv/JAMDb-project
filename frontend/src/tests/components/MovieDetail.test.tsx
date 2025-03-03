import { render } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'
import MovieDetail from '../../app/components/MovieDetail'

describe('Test movie detail', () => {
    it('Test rendering', () => {
        const { baseElement } = render(
            <Router>
                <MovieDetail />
            </Router>,
        )

        expect(baseElement).toBeInTheDocument()
    })
})
