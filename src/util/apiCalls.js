export const fetchAlbums = () => {
  return fetch(`https://itunes.apple.com/search?term=R.E.M.&entity=album`)
  .then(response => {
    if(!response.ok) {
      throw Error ('There was an issue retrieving your artist\'s albums. Please try again.')
    }
    return response.json()
  })
  .catch(error => {
    throw Error ('There was an issue retrieving your artist\'s albums. Please try again.')})
}