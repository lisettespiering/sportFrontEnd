import { RatingService } from './ratingService';
import { Rating } from '../domain/rating';

describe('Rating', () => {
  it('should create an instance', () => {
    expect(new Rating()).toBeTruthy();
  });
});
