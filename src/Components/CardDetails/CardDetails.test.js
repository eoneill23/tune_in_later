import React from 'react'
import { shallow } from 'enzyme'
import CardDetails from './CardDetails'

describe('CardDetails', () => {
  it('should match the snapshot with all data passed in correctly', () => {
    let wrapper = shallow(<CardDetails 
      artist_name= "Beyonce"
      album_name="HOMECOMING"
      artwork_url="https://is2-ssl.mzstatic.com/image/thumb/Music/"
      release_date="2008-10-13T07:00:00Z"  
      primary_genre_name="Pop" 
      returnRoute="/"
    />)
    expect(wrapper).toMatchSnapshot()
  })
})