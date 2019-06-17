import { SportService } from './sportService';
import { Sport } from '../domain/sport';

describe('Sport', () => {
  it('should create an instance', () => {
    expect(new Sport()).toBeTruthy();
  });
});
