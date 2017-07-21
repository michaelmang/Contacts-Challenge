//define action within an action creator
function RemoveFavorite(contact) {
  const REMOVE_FAVORITE = 'REMOVE_FAVORITE'
  return {
    type: REMOVE_FAVORITE,
    contact
  }
}

export default RemoveFavorite
