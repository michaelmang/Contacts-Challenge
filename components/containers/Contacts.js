/*
This container component is responsible for retrieving data,
conditional rendering to determine if contact list of contact detail displays,
and dispatching actions when favorites toggled.

Passes ("provides") data down to Contact List and Contact Detail
*/

import React from 'react';
import { getState } from 'redux';
import Loader from '../presentationals/Loader';
import Alert from  '../presentationals/Alert';
import RequestApi from '../../actions/RequestApi';
import ContactList from '../presentationals/ContactList';
import ContactDetail from '../presentationals/ContactDetail';
import AddFavorite from '../../actions/AddFavorite';
import RemoveFavorite from '../../actions/RemoveFavorite';
import AddNotFavorite from '../../actions/AddNotFavorite';
import RemoveNotFavorite from '../../actions/RemoveNotFavorite';

//Provider/Container React Component
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isContactDetail: false,
      selectedContact: ''
    }
  }

  componentWillMount () {
    this.props.store.subscribe(this.forceUpdate.bind(this));
    this.props.store.dispatch(RequestApi());
  }

  viewContactDetail(contact) {
    //pass in contact for passing down props to Detail View
    this.setState({
      isContactDetail: true,
      selectedContact: contact
    });
  }

  clearContactDetail() {
    this.setState({
      isContactDetail: false,
      selectedContact: ""
    });
  }

  toggleFavorite() {
    const stateProps = this.props.store.getState();
    if(stateProps.favorites.includes(this.state.selectedContact)) {
      this.props.store.dispatch(RemoveFavorite(this.state.selectedContact));
      this.props.store.dispatch(AddNotFavorite(this.state.selectedContact));
    } else {
      this.props.store.dispatch(RemoveNotFavorite(this.state.selectedContact));
      this.props.store.dispatch(AddFavorite(this.state.selectedContact));
    }
  }

  render() {
    const stateProps = this.props.store.getState();
    const status = stateProps.status;
    const error = stateProps.error;
    const isContactDetail = this.state.isContactDetail;
    return (
      <div>
      {status === "loading" ? (
         <Loader />
       ) : (
          status === "success" ? (
            <div>
              {isContactDetail ? (
                <div>
                  <ContactDetail
                    stateProps = { stateProps }
                    selectedContact = { this.state.selectedContact }
                    clearContactDetail  = { this.clearContactDetail.bind(this) }
                    toggleFavorite = { this.toggleFavorite.bind(this) }
                  />
                </div>
              ) : (
                <ContactList
                  viewContactDetail = { this.viewContactDetail.bind(this) }
                  stateProps = { stateProps }
                />
              )}
            </div>
          ) : (
            status === "error" ? (
              <div>
                <Alert error = { error } />
              </div>
            ) : (
              <div></div>
            )
          )
        )
      }
      </div>
    )
  }
}

export default Contacts
