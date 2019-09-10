import React from 'react';
import { shallow } from 'enzyme';
import { SearchForm, mapStateToProps, mapDispatchToProps } from './SearchForm';
import { addAlbums } from '../../../actions/index'

describe('SearchForm', () => {
  let wrapper, mockUser, mockAddAlbums;

  beforeEach(() => {
    mockUser = null;
    mockAddAlbums = jest.fn();
    wrapper = shallow(<SearchForm 
    user={mockUser}
    addAlbums={mockAddAlbums}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });



  it('should update state on a change in an input', () => {

    const mockEvent = { target: { name: 'artist', value: 'Beyonce' } }

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(wrapper.state('artist')).toEqual('Beyonce')
  });

  it('should call handleChange on a keydown event', () => {

    const mockEvent = () => {}

    wrapper.instance().handleChange = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('input').simulate('change', mockEvent);

  expect(wrapper.instance().handleChange).toHaveBeenCalled();
  });

  it('should call handleSubmit on a button click', () => {

    const mockEvent = {target: {name: 'artist', value: 'Beyonce'}}

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });


  it('should update the state when clearInputs is called', () => {

    const expected = '';

    wrapper.setState({
      artist: 'Beyonce',
      error: 'There was an error.'
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state('artist')).toEqual(expected);
    expect(wrapper.state('error')).toEqual(expected);
  });

  it('should run searchArtist on a button click', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().searchArtist = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().searchArtist).toHaveBeenCalled();
  });

  describe('mapStateToProps', () => {

    it('should return an object with the current user', () => {
      const mockState = {
        albums:[],
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
  
      const expected = {
        user: { id: 1, name: 'Alan', email: 'alan@turing.io' }
      }
  
      const mappedProps = mapStateToProps(mockState);
  
      expect(mappedProps).toEqual(expected)
    });

  });

  describe('mapDispatchToProps', () => {

    it('should dispatch addAlbums when called', () => {
      const mockAlbums = { album_name: "Homecoming", artist_name: 'Beyonce', album_id: 12345 }
      const mockDispatch = jest.fn();
      const actionToDispatch = addAlbums(mockAlbums);
    
      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.addAlbums({ album_name: "Homecoming", artist_name: 'Beyonce', album_id: 12345 });
    
      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
    });

  });

});