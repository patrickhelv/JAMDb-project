import { Test, TestingModule } from '@nestjs/testing'
import { MovieResolver } from './movie.resolver'
import { MovieService } from './movie.service';

const mockMovieService = {
    create: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
    searchPage: jest.fn(),
  };  


describe('MovieResolver', () => {
    let resolver: MovieResolver
    let movieService: MovieService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MovieResolver,
            {
                provide: MovieService,
                useValue: mockMovieService
            },
        ],
        }).compile()

        resolver = module.get<MovieResolver>(MovieResolver);
        movieService = module.get<MovieService>(MovieService);

    })

    it('should be defined', () => {
        expect(resolver).toBeDefined()
    })

    it('should call MovieService.createMovie', async () => {
        const movieInput = { title: 'Test Movie', description: 'Test Description' , published: 1998};
        const mockMovie = { ...movieInput, _id: '1' };
    
        mockMovieService.create.mockResolvedValue(mockMovie); // Mock resolved value of create
    
        const result = await resolver.createMovie(movieInput);
    
        expect(result).toEqual(mockMovie);
        expect(mockMovieService.create).toHaveBeenCalledWith(movieInput);
    });
    
});
