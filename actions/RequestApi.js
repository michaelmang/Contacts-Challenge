import axios from 'axios';
import FetchRequest from './FetchRequest';
import FetchSuccess from './FetchSuccess';
import FetchFailure from './FetchFailure';

function RequestApi() {
  //sort contacts by name
  function predicateBy(prop) {
    return function(a,b){
      if( a[prop] > b[prop]){
          return 1;
      } else if( a[prop] < b[prop] ){
          return -1;
      }
      return 0;
    }
  }
  return (dispatch) => {
    //API request
    axios.get('https://s3.amazonaws.com/technical-challenge/v3/contacts.json')
      .then(response => {
        const contacts = response.data.sort( predicateBy("name") );
        let favorites = [];
        let notFavorites = [];
        contacts.map((contact) => {
          if(contact.isFavorite) {
            favorites.push(contact.id);
          } else {
            notFavorites.push(contact.id);
          }
        });
        dispatch(FetchSuccess(contacts, favorites, notFavorites))
      })
      .catch(e => {
        //dispatch FetchFailure, order 3
        dispatch(FetchFailure(e))
      });

    //dispatch FetchRequest, order 1
    dispatch(FetchRequest())
  }
}

export default RequestApi
