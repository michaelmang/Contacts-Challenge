import React from 'react';

//Presentational React Component
class Contact extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isFavorite = this.props.isFavorite;
    return (
      <div>
      {isFavorite ? (
          <div onClick = { () => this.props.handleClick(this.props.id) } className = "contact">
            <img
              className = "contact-avatar"
              src = { this.props.avatar }
            />
            <div className = "contact-row">
              <h3 className = "contact-name">
              ⭐ {this.props.name}
              </h3>
              <h4 className = "contact-company">
              {this.props.companyName}
              </h4>
            </div>
            <hr/>
          </div>
        ) : (
          <div onClick = { () => this.props.handleClick(this.props.id) } className = "contact">
            <img
              className = "contact-avatar"
              src = { this.props.avatar }
            />
            <div className = "contact-row">
              <h3 className = "contact-name">
              {this.props.name}
              </h3>
              <h4 className = "contact-company">
              {this.props.companyName}
              </h4>
            </div>
          </div>
        )
      }
      </div>
    )
  }
}

export default Contact
