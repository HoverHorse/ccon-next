import React from 'react';
import MapImage from '../public/assets/map-image.png';

class ContactContent extends React.Component {
    constructor(props) {
      super(props);

    }

    render() {
        if (this.props.visible === true) {
            return (
            <div id="contentContainer">
              <p id="contactText">Contact info goes here</p>
              <div className="contentCanvas">
                <img id="mapImg"  src={MapImage} />
              </div>

              <style jsx>
                {`
                
                #mapImg {
                  width: 100%;
                  height: 100%;
                  border-radius: 12px;
              }
              
              .contentCanvas {
                  width: 45%;
                  height: 80%;
                  transform: translate(0%, 0%);
              }
              
              #contactText {
                  margin: auto;
                  width: 40%;
              }
                
                `}
              </style>
            </div>)
            } else {
                return (null)
            };
    }
}

export default ContactContent;