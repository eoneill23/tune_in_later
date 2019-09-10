import { userReducer } from './userReducer';

describe('userReducer', () => {
  it('should return initial state', () => {
    const mockAction = 'VALID_USER';
    const expected = null;
    const result = userReducer(undefined, mockAction);

    expect(result).toEqual(expected);
  });

  it('should return updated state', () => {
    const mockAction = 'VALID_USER';
    const mockState = {
      id: 1,
      name: 'Inigo Montoya',
      email: 'dreadpirateroberts@gmail.com'
    }
    const result = userReducer(mockState, mockAction);

    expect(result).toEqual(mockState);
  });

  it('should return default state', () => {
    const mockAction = '';
    const mockState = {
      id: 1,
      name: 'Inigo Montoya',
      email: 'dreadpirateroberts@gmail.com'
    }
    const result = userReducer(mockState, mockAction);

    expect(result).toEqual(mockState);
  });
})