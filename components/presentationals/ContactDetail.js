/*
Displays details for contact.

Everything except the star is based on data from the API response
since it never changes. The star is based on data in the Redux store
as it depends if the contact is a favorite which can be changed from
original API response.
*/

import React from 'react';
import Moment from 'Moment';

//Presentational React Component
class ContactDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const selectedContact = this.props.selectedContact;
    const stateProps = this.props.stateProps;
    let contactObj;
    stateProps.contacts.map((contact) => {
      if(contact.id === selectedContact) {
        contactObj = contact;
      }
    });
    const company = contactObj.companyName;
    const phones = Object.getOwnPropertyNames(contactObj.phone);
    let home = false;
    let mobile = false;
    let work = false;
    phones.map((phoneType) => {
      if(phoneType === "home") {
        home = true;
      } else if(phoneType === "mobile") {
        mobile = true;
      } else if(phoneType === "work") {
        work = true;
      }
    });
    let birthdate = new Moment(contactObj.birthdate);
    birthdate = birthdate.format('LL');
    let isFavorite;
    if(stateProps.favorites.includes(selectedContact)) {
      isFavorite = true;
    } else {
      isFavorite = false;
    }
    return (
      <div className = "contact-detail">
        <div className = "detail-bar">
          <div className = "back-to-contact-list">
            <span
              onClick = { this.props.clearContactDetail }
              className = "click"
            >
            <i className="icon fa fa-chevron-left" aria-hidden="true"></i>
            Contacts
            </span>
          </div>
          {isFavorite ? (
            <img
              onClick = { this.props.toggleFavorite }
              className = "star"
              src = "../../assets/Favorite Star (True)/Favorite — True.png"
            />
          ) : (
            <img
              onClick = { this.props.toggleFavorite }
              className = "star"
              src = "../../assets/Favorite Star (False)/Favorite — False.png"
            />
          )}
        </div>
        <div className = "main-contact-details">
          <img className = "detail-avatar" src = { contactObj.largeImageURL } />
          <h1 className = "detail-name">{ contactObj.name }</h1>
          {company !== null ? (
            <h2 className = "detail-company-name">
            { contactObj.companyName }
            </h2>
          ) : (
            <div></div>
          )}
        </div>
        {home ? (
          <div className = "phone-outer-row">
            <div className = "row-description">
            Phone:
            </div>
            <div className = "phone-inner-row">
              <h4 className="row-value">{ contactObj.phone.home }</h4>
              <h6 className="phone-value">Home</h6>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {mobile ? (
          <div className = "phone-outer-row">
            <div className = "row-description">
            Phone:
            </div>
            <div className = "phone-inner-row">
              <h4 className="row-value">{ contactObj.phone.mobile }</h4>
              <h6 className="phone-value">Mobile</h6>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {work ? (
          <div className = "phone-outer-row">
            <div className = "row-description">
            Phone:
            </div>
            <div className = "phone-inner-row">
              <h4 className="row-value">{ contactObj.phone.work }</h4>
              <h6 className="phone-value">Work</h6>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {contactObj.address !== null ? (
          <div className = "outer-row">
            <div className = "row-description">
            Address:
            </div>
            <div className = "inner-row">
              <h4 className="row-value">{ contactObj.address.street } <br/>
              { contactObj.address.city }, { contactObj.address.state } { contactObj.address.zip },
              { contactObj.address.country }
              </h4>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {contactObj.birthdate !== null ? (
          <div className = "outer-row">
            <div className = "row-description">
            Birthdate:
            </div>
            <div className = "inner-row">
              <h4 className="row-value">
              { birthdate }
              </h4>
            </div>
          </div>
        ) : (
          <div></div>
        )}
        {contactObj.emailAddress !== null ? (
          <div className = "outer-row">
            <div className = "row-description">
            Email:
            </div>
            <div className = "inner-row">
              <h4 className="row-value">
              { contactObj.emailAddress }
              </h4>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    )
  }
}

export default ContactDetail
