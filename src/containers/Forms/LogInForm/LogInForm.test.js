import React from 'react';
import { shallow } from 'enzyme';
import { LogInForm, mapStateToProps, mapDispatchToProps } from './LogInForm';
import { validUser, getUserFavorites } from '../../../actions/index'

describe('LogInForm', () => {
  let wrapper, mockUser, mockValidUser, mockGetUserFavorites;

  beforeEach(() => {
    mockUser = null;
    mockValidUser = jest.fn();
    mockGetUserFavorites = jest.fn();
    wrapper = shallow(<LogInForm 
    user={mockUser}
    validUser={mockValidUser}
    getUserFavorites={mockGetUserFavorites}
    />);
  });

  it('should match the snapshot with all data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on a change in an input', () => {

    const mockEvent = {target: {name: 'email', value: 'alan@turing.io'}}

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(wrapper.state('email')).toEqual('alan@turing.io')
  });

  it('should update state on a change in an input', () => {

    const mockEvent = { target: { name: 'password', value: 'password' } }
   
    wrapper.find('input').at(1).simulate('change', mockEvent);

    expect(wrapper.state('password')).toEqual('password');
  });

  it('should call handleSubmit on a button click', () => {

    const mockEvent = {preventDefault: jest.fn()}

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should call user log in on a button click', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().userLogin = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().userLogin).toHaveBeenCalled();
  });

  it('should update the state when clearInputs is called', () => {

    const expected = '';

    wrapper.setState({
      email: 'alan@turing.io',
      password: 'password',
      error: 'Wrong'
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state('email')).toEqual(expected);
    expect(wrapper.state('password')).toEqual(expected);
    expect(wrapper.state('error')).toEqual(expected);
  });

});

describe('mapStateToProps', () => {

  it('should return an object with the current user', () => {
    const mockState = {
      albums: [],
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

  it('should dispatch with a validUser with validUser is called', () => {
    const mockUser = { id: 1, name: 'Alan', email: 'alan@turing.io' }
    const mockDispatch = jest.fn();
    const actionToDispatch = validUser(mockUser);
  
    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.validUser({ id: 1, name: 'Alan', email: 'alan@turing.io' });
  
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });

  it('should dispatch with a validUser with validUser is called', () => {
    const mockFavorites = [
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
  });
});