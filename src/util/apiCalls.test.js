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

describe('fetchUser', () => {
  let mockResponse, mockUser, mockOptions;

  beforeEach(() => {
    mockUser = {email: 'alan@turing.io', password: 'password'}
    mockResponse = {id: 1, name: 'Alan', email: 'alan@turing.io'}
    mockOptions = {
      method: "POST",
      body: JSON.stringify(mockUser),
      headers: {
        "Content-Type": "application/json"
      }
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct Url', () => {
    fetchUser(mockUser);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/login', mockOptions)
  });

  it('should return the correct user object (HAPPY) :)', () => {

    fetchUser(mockUser)
    .then(results => expect(results).toEqual(mockResponse));
  });

  it('should return an error (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(fetchUser(mockUser)).rejects.toEqual(Error('There was an issue retrieving your account information. Please try again.'))
  });

  it('should return an error if the promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue retrieving your artist\'s albums.Please try again.'
      });
    });

    expect(fetchUser(mockUser)).rejects.toEqual({ message: 'There was an issue retrieving your account information. Please try again.' });
  });
});

describe('addUser', () => {
  let mockResponse, mockUser, mockOptions;

  beforeEach(() => {
    mockUser = {name: 'Alan', email: 'alan@turing.io', password: 'password' }
    mockResponse = { id: 1, name: 'Alan', email: 'alan@turing.io' }
    mockOptions = {
      method: "POST",
      body: JSON.stringify(mockUser),
      headers: {
        "Content-Type": "application/json"
      }
    }
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });
});