import { DeletedUsersPipe } from './deleted-users.pipe';

describe('DeletedUsersPipe', () => {
  it('create an instance', () => {
    const pipe = new DeletedUsersPipe();
    expect(pipe).toBeTruthy();
  });
});
