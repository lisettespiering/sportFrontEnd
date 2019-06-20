import { ReviewService } from './reviewService';
import { Review } from '../domain/review';


describe('Review', () => {
  it('should create an instance', () => {
    expect(new Review()).toBeTruthy();
  });
});
