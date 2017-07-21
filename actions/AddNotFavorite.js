//define action within an action creator
function AddNotFavorite(contact) {
  const ADD_NOT_FAVORITE = 'ADD_NOT_FAVORITE'
  return {
    type: ADD_NOT_FAVORITE,
    contact
  }
}

export default AddNotFavorite
