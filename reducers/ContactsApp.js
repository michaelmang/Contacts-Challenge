/*
Reducer handling a state for React application

- Redux state is used to manage status of API request
  and favorites
*/

//define the initial state
const initialState = {
  status: "",
  contacts: [],
  favorites: [],
  notFavorites: [],
  error: ""
}

//define a reducer with an intitalized state and logic to handle action
function ContactsApp(state = initialState, action) {
  switch(action.type) {
    case 'FETCH_REQUEST':
      const requested = Object.assign({}, state, {
        status: action.status
      });
      return requested
    case 'FETCH_SUCCESS':
      const successful = Object.assign({}, state, {
        status: action.status,
        contacts: action.contacts,
        favorites: action.favorites,
        notFavorites: action.notFavorites
      });
      return successful
    case 'FETCH_FAILURE':
      const failed = Object.assign({}, state, {
        status: action.status,
        error: action.error
      });
      return failed
    case 'REMOVE_FAVORITE':
      const newFavorites = state.favorites.filter(
        function(favorite) {
          return favorite !== action.contact;
        }
      );
      const removed = Object.assign({}, state, {
        favorites: newFavorites
      });
      return removed
    case 'ADD_FAVORITE':
      let added = Object.assign({}, state);
      added.favorites.push(action.contact)
      return added
    case 'ADD_NOT_FAVORITE':
      let addedNotFavorites = Object.assign({}, state);
      addedNotFavorites.notFavorites.push(action.contact)
      return addedNotFavorites
    case 'REMOVE_NOT_FAVORITE':

      const newNotFavorites = state.notFavorites.filter(
        function(notFavorite) {
          return notFavorite !== action.contact;
        }
      );
      const removedNotFavorites = Object.assign({}, state, {
        notFavorites: newNotFavorites
      });
      return removedNotFavorites
    default:
      return state
  }
}

export default ContactsApp
