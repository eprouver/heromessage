'use strict';

import React from 'react';
import MessagesSource from '../sources/MessagesSource.js';
import MessageComponent from './MessageComponent.js';
import SendMessageComponent from './SendMessageComponent.js';
import _ from 'lodash';

require('styles//MessageList.css');

class MessageListComponent extends React.Component {
  constructor(){
    super();

    this.state = {
      messages: [],
      selectedUser: '',
      selectedName: ''
    }
  }

  updateMessages(){


    MessagesSource.remoteAction.local(this.props.selectedUser).then((res) => {
      var selected = _(this.props.contacts).find({_id: parseInt(this.props.selectedUser)});

        this.setState({
          messages: res,
          selectedUser: this.props.selectedUser,
          selectedName: (selected ? selected.name : '')
        })


    })
  }

  handleMessageChange(){
    this.updateMessages.call(this);
  }

  componentDidMount(){
    this.updateMessages.call(this);
  }

  componentWillReceiveProps(){
    setTimeout(() => {
      this.updateMessages.call(this);

    }, 100);

  }

  removeHash(){
    window.history.replaceState({}, document.title, ".");
    this.setState({
      messages: [],
      selectedUser: '',
      selectedName: ''
    })
  }

  render() {
    return (
      <div className={"messagelist-component row " + (this.state.selectedUser == '' ? '' : 'active')}>

      <div className="col-xs-1 hidden-lg hidden-md hidden-sm">
        <h1 className="glyphicon glyphicon-chevron-left" onClick={this.removeHash.bind(this)}></h1>
      </div>

        <div className="col-xs-11 col-sm-12">


        <h1>{this.state.selectedName}</h1>
        <SendMessageComponent/>

        <h1>Previous Messages</h1>

        {(()=>{
          if(this.state.messages.length == 0){
            return <div className="text-muted">This is a New Contact.<br/>  No messages yet.</div>
          }
        })()}
        <div>
          {this.state.messages.sort(function(a,b){
            return new Date(b.date) - new Date(a.date);
          }).map((msg, i) => {
            return <MessageComponent message={msg} key={i} style={{'animationDelay':  i * 100 + 'ms'}} classList="animated fadeInRight"/>
          })}
        </div>
        </div>

      </div>
    );
  }
}

MessageListComponent.displayName = 'MessageListComponent';

// Uncomment properties you need
// MessageListComponent.propTypes = {};
// MessageListComponent.defaultProps = {};

export default MessageListComponent;
