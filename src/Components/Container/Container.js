import React from 'react'
import Card from '../Card/Card'
import './Container.css'
import { connect } from 'react-redux'

const Container = ({albums}) => {
    {!albums ? <p>Nope</p> : displayAlbums}
    const displayAlbums = albums.map(album => {
        return (
            <Card
            id={album.collectionId}
            key={album.collectionId}
            title={album.collectionName}
            price={album.collectionPrice}
            img={album.artworkUrl100}
            />
            )
    })
       
    return (
        <section className="Container">
            {displayAlbums}
        </section>
    )
}

const mapStateToProps = ({albums}) => ({
    albums
})

export default connect(mapStateToProps)(Container)
