import React from 'react';
import { SignUpForm, mapStateToProps, mapDispatchToProps } from './SignUpForm';
import { shallow } from 'enzyme';
import  { addUser, validUser } from '../../../actions/index';

describe ('SignUpForm', () => {
  let wrapper, mockUser, mockAddUser, mockValidUser;

  beforeEach(() => {
    mockUser=null;
    mockValidUser=jest.fn();
    mockAddUser=jest.fn();
    wrapper = shallow (
    <SignUpForm 
    addUser={mockAddUser}
    user={mockUser}
    validUser={mockValidUser}
    />)
  })
  // const mockUser = {
  //   name: 'Inigo Montoya',
  //   email: 'dreadpirateroberts@gmail.com',
  //   password: 'princess'
  // }
  


  it('should update the state when clearInputs is called', () => {

    const expected = '';

    wrapper.setState({
      name: 'Inigo Montoya',
      email: 'dreadpirateroberts@gmail.com',
      password: 'princess',
      error: 'Something went POOF!?'
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state('name')).toEqual(expected);
    expect(wrapper.state('email')).toEqual(expected);
    expect(wrapper.state('password')).toEqual(expected);
  });

  it('should call user log in on a button click', () => {
    const mockEvent = { preventDefault: jest.fn() }

    wrapper.instance().userLogin = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().userLogin).toHaveBeenCalled();
  });

  it('should call handleSubmit on a button click', () => {
    const mockEvent = {preventDefault: jest.fn()}

    wrapper.instance().handleSubmit = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click', mockEvent);

    expect(wrapper.instance().handleSubmit).toHaveBeenCalled();
  });


  it('should update state on input change', () => {
    const mockEvent = {target: {name: 'name', value: 'Inigo Montoya'}}

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(wrapper.state('name')).toEqual('Inigo Montoya')
  });

  it('should update state on email input change', () => {
    const mockEvent = {target: {name: 'email', value: 'dreadpirateroberts@gmail.com'}}

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(wrapper.state('email')).toEqual('dreadpirateroberts@gmail.com')
  });

  it('should update state on password input change', () => {
    const mockEvent = {target: {name: 'password', value: 'princess'}}

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(wrapper.state('password')).toEqual('princess')
  });
});

describe('mapStateToProps', () => {
  it('should do something', () => {
    const mockState = {
      name: 'Inigo Montoya',
      email: 'dreadpirateroberts@gmail.com',
      password: 'princess',
    }
    
    const expected = {
      user: { id: 1, name: 'Alan', email: 'alan@turing.io' }
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
});
  // it('should call addUser on a button click', () => {
  //   const mockEvent = { preventDefault: jest.fn() }

  //   wrapper.instance().addUser = jest.fn();
  //   wrapper.instance().forceUpdate();
  //   wrapper.find('button').simulate('click', mockEvent);

  //   expect(wrapper.instance().addUser).toHaveBeenCalled();
  // });

  // it('should match snapshot', () => {
  //   expect(wrapper).toMatchSnapshot()
  // });
