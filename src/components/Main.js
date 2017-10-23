require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
import ContactListComponent from './ContactListComponent';
import MessageListComponent from './MessageListComponent';
import ContactsSource from '../sources/contactsSource.js';
import _ from 'lodash';

let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      contacts: [],
      selectedUser: ''
    }

    window.onhashchange = this.handleHashChange.bind(this);

  }

  handleHashChange() {

    this.setState({
      selectedUser: window.location.hash.substr(1)
    })

  }

  componentDidMount() {
    var self = this;
    ContactsSource.remoteAction.local().then(function(res) {

      self.setState({
        contacts: res.users,
        selectedUser: window.location.hash.substr(1)
      })

    })
  }


  render() {
    return ( <div className = "index container-fluid" >
      <div className = "row" >
        <div className = "col-sm-6" >
        <ContactListComponent contacts = {
          this.state.contacts
        }
        selectedUser = {
          this.state.selectedUser
        }></ContactListComponent>
        </div>
        <div className = "col-sm-6" >

        <MessageListComponent selectedUser = {
          this.state.selectedUser
        }
        contacts = {
          this.state.contacts
        }/>
        </div>
      </div>
      </div>
    );
  }
}

AppComponent.defaultProps = {};

export default AppComponent;
