//define action within an action creator
function AddFavorite(contact) {
  const ADD_FAVORITE = 'ADD_FAVORITE'
  return {
    type: ADD_FAVORITE,
    contact
  }
}

export default AddFavorite
