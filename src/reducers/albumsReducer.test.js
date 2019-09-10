import { albumsReducer } from './albumsReducer';

describe('albumsReducer', () => {

  it('should return the default state', () => {
    let expected = [];
    let result = albumsReducer(undefined, {});
    expect(result).toEqual(expected)
  });

  it('should return the action\'s albums', () => {
    let mockAction = {
      type: 'ADD_ALBUMS',
      albums: [
        { id: 1, title: 'Greatest Hits' },
        { id: 2, title: 'Best of' }
      ]
    };
    let expected = [
      { id: 1, title: 'Greatest Hits' },
      { id: 2, title: 'Best of' }
    ]

    let result = albumsReducer([], mockAction);
    expect(result).toEqual(expected)
  });
})