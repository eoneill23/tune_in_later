import React from 'react';
import { shallow } from 'enzyme';
import { App, mapStateToProps } from './App';

describe('App', () => {
  let wrapper, mockUser, mockAlbums, mockFavorites;

  beforeEach(() => {
    mockUser = null;
    mockAlbums = [{ album_name: "Homecoming", artist_name: 'Beyonce', album_id: 12345 }]
    mockFavorites = [
      {
        album_id: 626204707,
        artist_name: 'Beyoncé',
        album_name: '4 (Expanded Edition)',
        price: 11.99,
        artwork_url: 'https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/17/84/3a/17843a6d-1f2b-7e1e-a39f-3ff865110993/source/100x100bb.jpg',
        release_date: '2013-12-13T08:00:00Z',
        content_advisory_rating: 'Explicit',
        primary_genre_name: 'Pop',
      }
    ]

    wrapper = shallow(<App
      user={mockUser}
      albums={mockAlbums}
      favorites={mockFavorites}
    />);

  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {

    it('should return an object with the current user', () => {
      const mockState = {
        albums: [{ album_name: "Homecoming", artist_name: 'Beyonce', album_id: 12345 }],
        user: { id: 1, name: 'Alan', email: 'alan@turing.io' },
        error: '',
        favorites: [
          {
            album_id: 626204707,
            artist_name: 'Beyoncé',
            album_name: '4 (Expanded Edition)',
            price: 11.99,
            artwork_url: 'https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/17/84/3a/17843a6d-1f2b-7e1e-a39f-3ff865110993/source/100x100bb.jpg',
            release_date: '2013-12-13T08:00:00Z',
            content_advisory_rating: 'Explicit',
            primary_genre_name: 'Pop',
          }
        ]
      }
  
      const expectedUser = { id: 1, name: 'Alan', email: 'alan@turing.io' }
  
      expect(mapStateToProps(mockState).user).toEqual(expectedUser)
      expect(mapStateToProps(mockState).albums).toEqual(mockAlbums)
      expect(mapStateToProps(mockState).favorites).toEqual(mockFavorites)
    });

  });
})