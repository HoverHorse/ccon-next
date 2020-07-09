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
                    opacity: 0.7;
                    position: absolute;
                    z-index: 40;
                    right: 11%;
                    transform: translate(0%, 180px);
                  }
                  
                  .mdiv {
                    height: 25px;
                    width: 4px;
                    margin-left: 12px;
                    background-color: black;
                    transform: rotate(45deg);
                    Z-index: 1;
                  }
                  
                  .md {
                    height: 25px;
                    width: 4px;
                    background-color: black;
                    transform: rotate(90deg);
                    Z-index: 2;
                  }
                  
                  `}
              </style>
        </div>
        )
    }
}

export default CloseButton;