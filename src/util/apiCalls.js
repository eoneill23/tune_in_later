export const fetchAlbums = (queryArtist) => {
  return fetch(`https://itunes.apple.com/search?term=${queryArtist.name}&entity=album`)
  .then(response => {
    if(!response.ok) {
      throw Error ('There was an issue retrieving your artist\'s albums. Please try again.')
    }
    return response.json()
  })
  .catch(error => {
    throw Error ('There was an issue retrieving your artist\'s albums. Please try again.')})
}

export const fetchUser = (user) => {
  console.log(user)
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/login', options)
    .then(response => {
      if(!response.ok) {
        throw Error ('There was an issue retrieving your account information. Please try again.')
      }
      return response.json()
    })
    .catch(error => {
      throw Error ('There was an issue retrieving your account information. Please try again.')})
}

export const addUser = (user) => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  return fetch('http://localhost:3001/api/v1/users', options)
    .then(response => {
      if (!response.ok) {
        throw Error('There was an issue creating your account.')
      }
      return response.json()
    })
    .catch(error => {
      throw Error('There was an issue creating your account.')
    })
}

export const fetchUserFavorites = (id) => {
  console.log(id)
  return fetch(`http://localhost:3001/api/v1/users/${id}/albumfavorites`)
    .then(response => {
      if (!response.ok) {
        throw Error('There was an issue getting your favorites.')
      }
      console.log('THIS IS THE RESPONSE', response)
      return response.json()
    })
    .catch(error => {
      throw Error('There was an issue getting your favorites.')
    })
}

export const postFavorite = (card, id) => {
  console.log(card)
  const options = {
    method: 'POST',
    body: JSON.stringify(card),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`http://localhost:3001/api/v1/users/${id}/albumfavorites`, options)
  .then(response => {
    if (!response.ok) {
      throw Error('There was an issue adding your favorite.')
    }
    return response.json()
  })
  .catch(error => {
    console.log(error)
    // throw Error('There was an issue adding your favorite.')
  })
}

export const deleteFavorite = (albumId, userId) => {
  console.log('AHHHHH', userId, albumId)
  const options = {
    method: "DELETE"
  };

  return fetch(`http://localhost:3001/api/v1/users/${userId}/albumfavorites/${albumId}`, options)
  .then(response => {
    console.log(response)
    if (!response.ok) {
      throw Error('There was an issue removing your favorite.')
    }
    // console.log('THIS IS THE RESPONSE', response)
    // return response.json()
  })
  .catch(error => {
    console.log(error)
    // throw Error('There was an issue adding your favorite.')
  })
}