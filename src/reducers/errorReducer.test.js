import { errorReducer } from './errorReducer';

describe('errorReducer', () => {

  it('should return the default state', () => {
    let expected = null;
    let result = errorReducer(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the specified error message', () => {
    let expected = 'Please login to save an album.';
    let result = errorReducer(null, {type: 'INVALID_USER'});
    expect(result).toEqual(expected)
  });
})