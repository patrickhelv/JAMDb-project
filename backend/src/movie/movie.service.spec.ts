import { Test, TestingModule } from '@nestjs/testing'
import { MovieService } from './movie.service'
import { Movie } from './movie.schema';
import { getModelToken } from '@nestjs/mongoose'
import { Types } from 'mongoose';
  

describe('MovieService', () => {
    let service: MovieService
    let mockMovieModel;

    beforeEach(async () => {
        
        mockMovieModel = {
            // Mock methods of the model, like 'find' or 'findById'
            findById: jest.fn(),
            save: jest.fn(),
          };

        const module: TestingModule = await Test.createTestingModule({
            providers: [
                MovieService,
                {
                  provide: getModelToken(Movie.name),  // Inject the mocked model
                  useValue: mockMovieModel,  // Use the mock model
                },
            ],
        }).compile()

        service = module.get<MovieService>(MovieService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
    
    it('should find a movie', async () => {
        let movie_id = "1";
        const mockMovie = { _id: movie_id, title: 'Test Movie' };
    
        mockMovieModel.findById.mockResolvedValue(mockMovie);  // Mock findById to return the movie
    
        const result = await service.findOne({ _id:  movie_id});
    
        expect(result).toEqual(mockMovie);
        expect(mockMovieModel.findById).toHaveBeenCalledWith(movie_id);
      });


})
