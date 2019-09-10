import React from 'react';
import { shallow } from 'enzyme';
import CardContainer, { mapStateToProps } from './CardContainer';
//import { createStore } from 'redux';


describe('CardContainer', () => {
  let wrapper;

  const mockEvent = {};

  beforeEach(() => {
    wrapper = shallow (
      <CardContainer
      albums={[]}
      user={'Inigo Montoya'}
      favorites = {[]}
      error = ''
      displayType = 'albums' 
      />)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });
});

describe('mapStateToProps', () => {
  it('should return an object with the contents of the store', () => {
    const mockStore = {
      albums: [],
      user: {  id: 175648, name: 'Inigo Montoya', email: 'dreadpirateroberts@gmail.com' },
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
      albums: [],
      user: {  id: 175648, name: 'Inigo Montoya', email: 'dreadpirateroberts@gmail.com' },
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

    const testProps = mapStateToProps(mockStore);

    expect(testProps).toEqual(expected)
  });
});