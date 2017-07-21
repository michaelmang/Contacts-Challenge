/*
Displays contacts in two different groups based on favorites and
not favorites in Redux store
*/

import React from 'react';
import Contact from './Contact';

//Presentational React Component
class ContactList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const stateProps = this.props.stateProps;
    const favorites = stateProps.favorites;
    const notFavorites = stateProps.notFavorites;
    const favContacts = stateProps.contacts.map((contact) => {
      let flag = false;
      let index;
      favorites.map((favorite) => {
        if(contact.id === favorite) {
          flag = true;
          index = favorites.indexOf(favorite);
        }
      });

      if(flag) {
        return (
          <Contact
            key = { contact.id }
            avatar = { contact.smallImageURL }
            name = { contact.name }
            companyName = { contact.companyName }
            isFavorite = { favorites[index] }
            id = { contact.id }
            handleClick  = { this.props.viewContactDetail }
          />
        )
      }
    });
    const otherContacts = stateProps.contacts.map((contact) => {
      let flag = false;
      let index;
      notFavorites.map((notFavorite) => {
        if(contact.id === notFavorite) {
          flag = true;
          index = notFavorites.indexOf(notFavorite);
        }
      });

      if(flag) {
        return (
          <Contact
            key = { contact.id }
            avatar = { contact.smallImageURL }
            name = { contact.name }
            companyName = { contact.companyName }
            isFavorite = { notFavorites[index] }
            id = { contact.id }
            handleClick  = { this.props.viewContactDetail }
          />
        )
      }
    });
    return (
      <div className = "contact-list">
        <div className = "top-bar">
          <h1 className = "heading">Contacts</h1>
        </div>
        <div className = "subheading-bar">
          <h2 className = "subheading">Favorite Contacts</h2>
        </div>
        <div className = "favorite-contacts">
        {favContacts}
        </div>
        <div className = "subheading-bar">
          <h2 className = "subheading">Other Contacts</h2>
        </div>
        <div className = "other-contacts">
        {otherContacts}
        </div>
      </div>
    )
  }
}

export default ContactList
