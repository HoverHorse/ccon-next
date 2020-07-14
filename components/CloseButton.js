import React from 'react';

class CloseButton extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
        <div id="mdiv">
              <div className="mdiv">
                <div className="md"></div>
              </div>

              <style jsx>
                  {`
                  
                  #mdiv {
                    width: 25px;
                    height: 25px;
                    opacity: 0.8;
                    position: absolute;
                    z-index: 40;
                  }
                  
                  .mdiv {
                    height: 25px;
                    width: 4px;
                    margin-left: 12px;
                    background-color: black;
                    transform: rotate(45deg);
                    Z-index: 11;
                  }
                  
                  .md {
                    height: 25px;
                    width: 4px;
                    background-color: black;
                    transform: rotate(90deg);
                    Z-index: 22;
                  }
                  
                  `}
              </style>
        </div>
        )
    }
}

export default CloseButton;