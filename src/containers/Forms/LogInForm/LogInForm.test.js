import React from 'react';
import { shallow } from 'enzyme';
import { LogInForm } from './LogInForm';

describe('LogInForm', () => {
  let wrapper, mockUser, mockValidUser, mockGetUserFavorites;

  beforeEach(() => {
    mockUser = {id: 1, name: 'Alan', email: 'alan@turing.io'}
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

    expect(wrapper.state('email')).toEqual('password');
  });

  it('should call handleSubmit on a button click', () => {

    const mockEvent = {preventDefault: jest.fn()}

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });

  it('should call user log in on a button click', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
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