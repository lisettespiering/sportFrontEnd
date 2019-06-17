import { AccountService } from './accountService';
import { Account } from '../domain/account';

describe('Account', () => {
  it('should create an instance', () => {
    expect(new Account()).toBeTruthy();
  });
});
