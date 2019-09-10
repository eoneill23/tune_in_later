import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from './CardContainer';

describe('CardContainer', () => {
  let wrapper;

  const mockSelectUser = jest.fn();
  const mockRemoveCoWorker = jest.fn();
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
  })
})