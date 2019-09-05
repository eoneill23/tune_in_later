import React from 'react'
import Card from '../Card/Card'
import './Container.css'
import { connect } from 'react-redux'

const Container = ({albums}) => {
    let cards
    if(albums !== undefined) {
      cards = albums.map(album => {
      return <Card 
        {...album}
      />
    })
    } else {
      const response = "ENTER AN ARTIST"
      return response
    } 
    return (
      <>
      {cards}
      </>
    )
  }
  
  const mapStateToProps = (store) => ({
    albums: store.albums
  })

export default connect(mapStateToProps)(Container)
