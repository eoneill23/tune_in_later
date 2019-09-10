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

    expect(fetchUser(mockUser)).rejects.toEqual(Error('There was an issue retrieving your account information. Please try again.'));
  });

  it('should return an error if the promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue retrieving your account information. Please try again.'
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

  it('should call fetch with the correct Url', () => {
    addUser(mockUser);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users', mockOptions);
  });

  it('should return the correct user object (HAPPY) :)', () => {
    addUser(mockUser)
    .then(results => expect(results).toEqual(mockResponse))
  });

  it('should return an error (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });

    expect(addUser(mockUser)).rejects.toEqual(Error('There was an issue creating your account.'));
  });

  it('should return an error if the promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue creating your account.'
      });
    });

    expect(addUser(mockUser)).rejects.toEqual({ message: 'There was an issue creating your account.' });
  });
});

describe('postFavorite', () => {
  let mockResponse, mockCard, mockOptions;

  beforeEach(() => {
    mockCard = { 
      album_id: 558262493, 
      artist_name: 'alt-J', 
      album_name: 'An Awesome Wave', 
      artwork_url: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/3b/43/9e/3b439e7f-9989-1dc1-9ffb-8d876ddb0da1/source/100x100bb.jpg', 
      release_date: '2012-09-18T07:00:00Z',
      content_advisory_rating: 'notExplicit',
      primary_genre_name: 'Alternative' 
    }
    mockResponse = { 
      id: 2, 
      user_id: 1, 
      album_id: 558262493, 
      artist_name: 'alt-J', 
      album_name: 'An Awesome Wave', 
      artwork_url: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/3b/43/9e/3b439e7f-9989-1dc1-9ffb-8d876ddb0da1/source/100x100bb.jpg', release_date: '2012-09-18T07:00:00Z', 
      content_advisory_rating: 'notExplicit', 
      primary_genre_name: 'Alternative'
    }
    mockOptions = {
      method: "POST",
      body: JSON.stringify(mockCard),
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

    it('should call fetch with the correct URL', () => {
      postFavorite(mockCard, 1);

      expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/albumfavorites', mockOptions);
    });

    it('should return the correct card (HAPPY) :)', () => {
      postFavorite(mockCard, 1)
      .then(results => expect(results).toEqual(mockResponse))
    });

    it('should throw and error (SAD) :(', () => {
      expect(postFavorite(mockCard, 1)).rejects.toEqual(Error('There was an issue adding your favorite.'));
      message: 'There was an issue adding your favorite.'
    });
  }); 
});

describe('deleteFavorite', () => {
  let mockOptions, mockUserId, mockAlbumId;

  beforeEach(() => {
    mockUserId = 1;
    mockAlbumId = 2;
    mockOptions = { method: "DELETE" };
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      });
    });
  });

  it('should call fetch with the correct Url (HAPPY) :)', () => {
    deleteFavorite(mockAlbumId, mockUserId);

    expect(window.fetch).toHaveBeenCalledWith(`http://localhost:3001/api/v1/users/${mockUserId}/albumfavorites/${mockAlbumId}`, mockOptions)
  });

  it('should return an error (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(deleteFavorite(mockUserId, mockAlbumId)).rejects.toEqual({ message: 'There was an issue deleting your favorite. You\'re stuck with it.' });
  });

  it('should return an error if the promise rejects (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue deleting your favorite. You\'re stuck with it.'
      });
    });

    expect(deleteFavorite(mockUserId, mockAlbumId)).rejects.toEqual(Error( 'There was an issue deleting your favorite. You\'re stuck with it.' ));
  });
});

describe('fetchUserFavorites', () => {
  let mockResponse;

  beforeEach(() => {
    mockResponse = [{
      id: 2,
      user_id: 1,
      album_id: 558262493,
      artist_name: 'alt-J',
      album_name: 'An Awesome Wave',
      artwork_url: 'https://is5-ssl.mzstatic.com/image/thumb/Music/v4/3b/43/9e/3b439e7f-9989-1dc1-9ffb-8d876ddb0da1/source/100x100bb.jpg', release_date: '2012-09-18T07:00:00Z',
      content_advisory_rating: 'notExplicit',
      primary_genre_name: 'Alternative'
    }];

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      });
    });
  });

  it('should call fetch with the correct Url', () => {
    fetchUserFavorites(1);

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/users/1/albumfavorites');
  });

  it('should return the array of favorites (HAPPY) :)', () => {
    fetchUserFavorites(1)
    .then(results => expect(results).toEqual(mockResponse))
  });

  it('should throw an error (SAD) :(', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(fetchUserFavorites(1)).rejects.toEqual(Error('There was an issue getting your favorites.'));
  });

  it('should throw an error if the promise rejects (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject({
        message: 'There was an issue getting your favorites.'
      });
    });

    expect(fetchUserFavorites(1)).rejects.toEqual(Error({
      message: 'There was an issue getting your favorites.'
    }));
  });
});