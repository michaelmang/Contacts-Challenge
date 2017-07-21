//define action within an action creator
function FetchSuccess(contacts, favorites, notFavorites) {
  const FETCH_SUCCESS = 'FETCH_SUCCESS'
  return {
    type: FETCH_SUCCESS,
    status: "success",
    contacts,
    favorites,
    notFavorites
  }
}

export default FetchSuccess
