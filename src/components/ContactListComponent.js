'use strict';

import React from 'react';
import ContactComponent from './ContactComponent.js';

require('../styles/ContactList.css');

class ContactListComponent extends React.Component {
  render() {

    return (
      <div className="contactlist-component">
        <h1>Contacts</h1>
        <ul className="list-group">
        {this.props.contacts.sort(function(a,b){
          if(a.lastMessage == '') a.lastMessage = 0;
          if(b.lastMessage == '') b.lastMessage = 0;
          return new Date(a.lastMessage) - new Date(b.lastMessage);
        }).map((c, i) => {
          return <li key={'contact-'+i} style={{'animationDelay':  i * 100 + 'ms'}} className={"list-group-item animated fadeInLeft clickable " + (this.props.selectedUser == c._id ? 'active': '') }>
          <a href={'#' + c._id }>
          <ContactComponent contact={c} />
          </a>
          </li>
        })}
        </ul>
      </div>
    );
  }
}

ContactListComponent.displayName = 'ContactListComponent';

// Uncomment properties you need
// ContactListComponent.propTypes = {};
// ContactListComponent.defaultProps = {};

export default ContactListComponent;
