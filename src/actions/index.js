export const addAlbums = (albums) => ({
	type: 'ADD_ALBUMS',
	albums
});

export const validUser = (user) => ({
	type: 'VALID_USER',
	user
});

export const addFavorite = (newFavorite) => ({
	type: 'ADD_FAVORITE',
	newFavorite
});

export const invalidUser = () => ({
	type: 'INVALID_USER'
});

export const getUserFavorites = (userFavorites) => ({
	type: 'GET_USER_FAVORITES',
	userFavorites
});

export const removeFavoriteFromStore = (albumId) => ({
	type: 'REMOVE_FAVORITE_FROM_STORE',
	albumId
})