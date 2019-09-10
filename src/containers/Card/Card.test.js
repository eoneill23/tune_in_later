import React from 'react';
import { shallow } from 'enzyme';
import { Card, mapStateToProps, mapDispatchToProps } from './Card';
import { deleteFavorite, postFavorite } from '../../util/apiCalls';

describe('Card', () => {
  let albumWrapper, favoriteWrapper, newFavoriteWrapper, mockUser, mockAddFavorite, mockInvalidUser, mockFavorites, mockRemoveFavoriteFromStore;

  beforeEach(() => {
    mockUser = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    }
    mockAddFavorite = jest.fn();
    mockInvalidUser = jest.fn();
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
      user: mockUser,
      routeType: 'favorites'
      }
    ]
    mockRemoveFavoriteFromStore = jest.fn();
    albumWrapper = shallow(
    <Card 
      album_id={626204707}
      key={626204707}
      artist_name={'Beyoncé'}
      album_name={'4 (Expanded Edition)'}
      price={11.99}
      artwork_url={'https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/17/84/3a/17843a6d-1f2b-7e1e-a39f-3ff865110993/source/100x100bb.jpg'}
      release_date={'2013-12-13T08:00:00Z'}
      content_advisory_rating={'Explicit'}
      primary_genre_name={'Pop'}
      user={mockUser}
      addFavorite={mockAddFavorite}
      invalidUser={mockInvalidUser}
      favorites={mockFavorites}
      removeFavoriteFromStore={mockRemoveFavoriteFromStore}
      routeType={'albums'}
    />)
    favoriteWrapper = shallow(
    <Card
      album_id={626204707}
      key={626204707}
      artist_name={'Beyoncé'}
      album_name={'4 (Expanded Edition)'}
      price={11.99}
      artwork_url={'https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/17/84/3a/17843a6d-1f2b-7e1e-a39f-3ff865110993/source/100x100bb.jpg'}
      release_date={'2013-12-13T08:00:00Z'}
      content_advisory_rating={'Explicit'}
      primary_genre_name={'Pop'}
      user={mockUser}
      addFavorite={mockAddFavorite}
      invalidUser={mockInvalidUser}
      favorites={mockFavorites}
      removeFavoriteFromStore={mockRemoveFavoriteFromStore}
      routeType={'favorites'}
    />)
    newFavoriteWrapper = shallow(
    <Card
      album_id={626204708}
      key={626204707}
      artist_name={'Beyoncé'}
      album_name={'4 (Expanded Edition)'}
      price={11.99}
      artwork_url={'https://is2-ssl.mzstatic.com/image/thumb/Music6/v4/17/84/3a/17843a6d-1f2b-7e1e-a39f-3ff865110993/source/100x100bb.jpg'}
      release_date={'2013-12-13T08:00:00Z'}
      content_advisory_rating={'Explicit'}
      primary_genre_name={'Pop'}
      user={mockUser}
      addFavorite={mockAddFavorite}
      invalidUser={mockInvalidUser}
      favorites={mockFavorites}
      removeFavoriteFromStore={mockRemoveFavoriteFromStore}
      routeType={'favorites'}
    />)
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(albumWrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(favoriteWrapper).toMatchSnapshot();
  });

  it('should match the snapshot with all data passed in correctly', () => {
    expect(newFavoriteWrapper).toMatchSnapshot();
  });

  it('should call deleteFavorite when isFavorite is true', () => {

    favoriteWrapper.toggleFavorite = jest.fn()
    favoriteWrapper.toggleFavorite();

    expect(deleteFavorite).toHaveBeenCalled();
  });

  it('should call postFavorite when isFavorite is false', () => {
    newFavoriteWrapper.toggleFavorite = jest.fn()
    newFavoriteWrapper.toggleFavorite();

    expect(postFavorite).toHaveBeenCalled();
  });

  it('should call isUserLoggedIn on a button click', () => {
    
    albumWrapper.isUserLoggedIn = jest.fn();
    let mockEvent = {preventDefault: jest.fn()}

    albumWrapper.find('button').at(0).simulate('click', mockEvent);

    expect(albumWrapper.isUserLoggedIn).toHaveBeenCalledWith(mockEvent);
  });

  it('should call isUserLoggedIn on a button click', () => {

    albumWrapper.isUserLoggedIn = jest.fn();
    let mockEvent = { preventDefault: jest.fn() }

    albumWrapper.find('button').at(1).simulate('click', mockEvent);

    expect(albumWrapper.isUserLoggedIn).toHaveBeenCalledWith(mockEvent);
  });
});

describe('mapStateToProps', () => {
  it('should return an object with the favorites array', () => {

    const mockState = {
      albums: [],
      user: {id: 1, name: 'Alan', email: 'alan@turing.io'},
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

    const expected = {
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

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
});

describe('mapDispatchToProps', () => {
  
})