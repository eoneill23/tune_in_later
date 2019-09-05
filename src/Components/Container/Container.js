import React from 'react'
import Card from '../Card/Card'
import './Container.css'
import { connect } from 'react-redux'

const Container = ({albums}) => {
    let cards
    if(albums !== undefined) {
      cards = albums.map(album => {
        return <Card
          id={album.collectionId}
          key={album.collectionId}
          title={album.collectionName}
          price={album.collectionPrice}
          img={album.artworkUrl100}
        />
    })
    } else {
      const response = "ENTER AN ARTIST"
      return response
    } 
    return (
      <section className='Container'>
      {cards}
      </section>
    )
  }
  
  const mapStateToProps = (store) => ({
    albums: store.albums
  })

export default connect(mapStateToProps)(Container)
