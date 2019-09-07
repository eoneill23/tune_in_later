export const addAlbums = (albums) => ({
	type: 'ADD_ALBUMS',
	albums
});

export const validUser = (user) => ({
	type: 'VALID_USER',
	user
});

export const addFavorite = (id) => ({
	type: 'ADD_FAVORITE',
	id
});

export const invalidUser = () => ({
	type: 'INVALID_USER'
});

export const getUserFavorites = (userFavorites) => ({
	type: 'GET_USER_FAVORITES',
	userFavorites
});