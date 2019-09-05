import React from 'react'
import Card from '../Card/Card'
import './Container.css'

const Container = ({albums}) => {
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
    }
    )
    return (
        <section className="Container">
            {displayAlbums}
        </section>
    )
}

export default Container
