'use strict';

import React from 'react';

require('styles//SendMessage.css');

class SendMessageComponent extends React.Component {
  handleNewMessage(){
    alert('handle new message');
  }

  render() {
    return (
      <form className="sendmessage-component well">
        <label>New Message:</label>
        <textarea rows="6" className="form-control"></textarea>

        <br/>
        <div className="text-right">
        <div onClick={this.handleNewMessage} className="btn btn-success btn-lg">Send</div>
        </div>
        <br/>

      </form>
    );
  }
}

SendMessageComponent.displayName = 'SendMessageComponent';

// Uncomment properties you need
// SendMessageComponent.propTypes = {};
// SendMessageComponent.defaultProps = {};

export default SendMessageComponent;
