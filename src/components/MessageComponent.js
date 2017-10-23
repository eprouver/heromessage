'use strict';

import React from 'react';
import Moment from 'react-moment';

require('styles//Message.css');

class MessageComponent extends React.Component {
  render() {
    return (
      <div className="message-component well">
        <h4>Text
          <Moment className="pull-right text-muted" format="D/M/YY h:mm A">{this.props.message.date}</Moment>
        </h4>
        {this.props.message.text}
      </div>
    );
  }
}

MessageComponent.displayName = 'MessageComponent';

// Uncomment properties you need
// MessageComponent.propTypes = {};
// MessageComponent.defaultProps = {};

export default MessageComponent;
