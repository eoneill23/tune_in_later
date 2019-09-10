import { fetchAlbums, fetchUser, addUser, fetchUserFavorites, postFavorite, deleteFavorite } from './apiCalls';

describe('fetchAlbums', () => {
  let mockResponse, mockQuery;

  beforeEach(() => {
    mockQuery = { name: 'Beyonce' }
    mockResponse = [
      {
        id: 1,
        title: 'I am: Sasha Fierce',
        primaryGenre: 'Pop'
      },
      {
        id: 2,
        title: '4 (Extended Edition)',
        primaryGenre: 'Pop'
      }
    ]
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct Url', () => {
    fetchAlbums(mockQuery);

    expect(window.fetch).toHaveBeenCalledWith('https://itunes.apple.com/search?term=Beyonce&entity=album')
  });

  it('should return an array of albums (HAPPY) :)', () => {

    fetchAlbums(mockQuery)
    .then(results => expect(results).toEqual(mockResponse));
  });

  it('should return an error (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(fetchAlbums(mockQuery)).rejects.toEqual(Error('There was an issue retrieving your artist\'s albums. Please try again.'));
  });

  it('should return an error if the promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue retrieving your artist\'s albums.Please try again.'
      });
    });

    expect(fetchAlbums(mockQuery)).rejects.toEqual({ message: 'There was an issue retrieving your artist\'s albums.Please try again.' })
  });
});