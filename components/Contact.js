import React from 'react';

class Contact extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
          return (
              <div className="contactButton">
                  CONTACT
                  <style jsx>
                      {`
                     
                      .contactButton {
                        font-family: Syncopate;
                        font-size: 1.8em;
                        margin-top: 0px;
                        margin-left: 0px;
                        border-top: 1px solid red;
                        border-bottom: 1px solid red;
                        width: 7.5em;
                        height: 0.95em;
                        position: fixed;
                        z-Index: -1;
                      }
                      
                      `}
                  </style>
              </div>
          )
      }
}

export default Contact;