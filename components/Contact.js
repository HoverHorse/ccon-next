import React from 'react';

class Contact extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
          return (
              <div className="contactButton">
                  <ul>
                    <li>1-604-859-2855</li>
                    <li>REVOLUTION@CCON.CA</li>
                    <li id="address">107-2707 PROGRESSIVE WAY<br />
                        ABBOTSFORD, BC V2T 0A7</li>
                  </ul>
                  <style jsx>
                      {`
                     
                      .contactButton {
                        font-family: Syncopate;
                        font-size: 1em;
                        width: 320px;
                        height: 12%;
                        position: absolute;
                        z-Index: -1;
                        pointer-events: none;
                      }

                      ul {
                        list-style: none;
                        padding: 0;
                        text-align: right;
                      }

                      @media (max-width: 720px) {

                        .contactButton {
                          width: 320px;
                          position: absolute;
                        }

                        #address {
                          opacity: 1;
                          
                        }

                      }

                      @media (max-width: 596px) {

                        .contactButton {
                          width: 100%;
                          
                        }

                        ul {
                          text-align: center;
                        }

                        #address {
                          opacity: 0;
                        }

                      }
                      
                      `}
                  </style>
              </div>
          )
      }
}

export default Contact;