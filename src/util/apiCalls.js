export const fetchAlbums = queryArtist => {
  return fetch(
    `https://itunes.apple.com/search?term=${queryArtist.name}&entity=album`
  ).then(response => {
    if (!response.ok) {
      throw Error(
        "There was an issue retrieving your artist's albums. Please try again."
      );
    }
    return response.json();
  });
  // .catch(error => {
  //   throw Error ('There was an issue retrieving your artist\'s albums. Please try again.')
  // })
};

export const fetchUser = user => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch("http://localhost:3001/api/v1/login", options).then(response => {
    if (!response.ok) {
      throw Error(
        "There was an issue retrieving your account information. Please try again."
      );
    }
    return response.json();
  });
};

export const addUser = user => {
  const options = {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json"
    }
  };
  return fetch("http://localhost:3001/api/v1/users", options).then(response => {
    if (!response.ok) {
      throw Error("There was an issue creating your account.");
    }
    return response.json();
  });
};

export const fetchUserFavorites = id => {
  return fetch(`http://localhost:3001/api/v1/users/${id}/albumfavorites`).then(
    response => {
      if (!response.ok) {
        throw Error("There was an issue getting your favorites.");
      }
      return response.json();
    }
  );
};

export const postFavorite = (card, id) => {
  const options = {
    method: "POST",
    body: JSON.stringify(card),
    headers: {
      "Content-Type": "application/json"
    }
  };

  return fetch(
    `http://localhost:3001/api/v1/users/${id}/albumfavorites`,
    options
  ).then(response => {
    if (!response.ok) {
      throw Error("There was an issue adding your favorite.");
    }
    return response.json();
  });
};

export const deleteFavorite = (albumId, userId) => {
  const options = {
    method: "DELETE"
  };
  return fetch(
    `http://localhost:3001/api/v1/users/${userId}/albumfavorites/${albumId}`,
    options
  ).then(response => {
    if (!response.ok) {
      throw Error(
        "There was an issue deleting your favorite. You're stuck with it."
      );
    }
  });
};
