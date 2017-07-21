//define action within an action creator
function RemoveNotFavorite(contact) {
  const REMOVE_NOT_FAVORITE = 'REMOVE_NOT_FAVORITE'
  return {
    type: REMOVE_NOT_FAVORITE,
    contact
  }
}

export default RemoveNotFavorite
