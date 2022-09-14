import MovieService from '../../app/services/movieService'

describe('Movie services', () => {
    const movieService = new MovieService()
    const movieDetail = {
        _id: '1',
        title: 'Test movie',
        description: 'Test description',
        published: 2000,
    }
    const { _id, title, description, published } = movieDetail

    it('Get movies', () => {
        expect(movieService.getMovies()).toMatchSnapshot()
    })

    it('Find movie', () => {
        expect(movieService.findMovie(movieDetail._id)).toMatchSnapshot()
    })

    it('Create movie and update movie', async () => {
        // TODO
        // const response = await movieService.createMovie(title, description, published)
        // expect(response).toMatchSnapshot()
        // const movieResult = await movieService.searchMovie(response.title)
        // const movie = movieResult[0]
        // expect(response).toBeInstanceOf(movie)
        // expect(movieService.updateMovie(movie._id, title, description, published)).toMatchSnapshot()
    })
})
