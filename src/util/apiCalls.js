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