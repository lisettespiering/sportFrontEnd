import { LocatieService } from './locatieService';
import { Locatie } from '../domain/locatie';

describe('Locatie', () => {
  it('should create an instance', () => {
    expect(new Locatie()).toBeTruthy();
  });
});
