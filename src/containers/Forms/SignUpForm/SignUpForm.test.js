import  SignUpForm from './SignUpForm';
import { shallow } from 'enzyme';

describe ('SignUpForm', () => {
  let wrapper;

  const mockUser = {
    name: 'Inigo Montoya',
    email: 'dreadpirateroberts@gmail.com',
    password: 'princess'
  }
  
  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  });

  it('should ')
})