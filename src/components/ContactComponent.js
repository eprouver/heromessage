'use strict';

import React from 'react';
import Moment from 'react-moment';

require('styles//Contact.css');

class ContactComponent extends React.Component {
  render() {

    return (
      <div className="contact-component row">
      <div className="col-xs-2">
        <img src={this.props.contact.picture} className="img img-circle img-responsive avatar"/>
      </div>
      <div className="col-xs-10">
        <h4>
          {this.props.contact.name}
          <div className={"pull-right label " + (()=> {
            switch (true){
              case this.props.contact.total > 20:
              return 'label-danger';
              case this.props.contact.total > 10:
              return 'label-warning';
              case this.props.contact.total > 0:
              return 'label-info';
              default:
              return 'hide';
            }

          })()}>{this.props.contact.total}</div>

        </h4>
        {(()=> {
          if(this.props.contact.total > 0){
            return  <div>
                      <label>Last Message:</label> <Moment fromNow>{new Date(this.props.contact.lastMessage)}</Moment>
                      <span className="pull-right"> <Moment format="D/M/YY h:mm A">{new Date(this.props.contact.lastMessage)}</Moment> </span>
                    </div>

          }else{
            return <p>New Contact</p>
          }
        })()}
        </div>
      </div>
    );
  }
}

ContactComponent.displayName = 'ContactComponent';

// Uncomment properties you need
// ContactComponent.propTypes = {};
// ContactComponent.defaultProps = {};

export default ContactComponent;
