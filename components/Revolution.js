import React from 'react';

class Revolution extends React.Component {
    constructor (props) {
        super(props);
        
        };

        render() {
            if (this.props.visible === true) {
                return (
                <div id="contentContainer">
                    <div className="contentCanvas">
                    REVOLUTION PLUGS GO HERE
                    </div>

                    <style jsx>
                        {`
                        
                        div #contentContainer {
                            position: absolute;
                            left: 50%;
                            top: 62%;
                            transform: translate(-50%, -50%);
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            height: 60vh;
                            width: 80vw;
                            background-color: white;
                            border-radius: 8px;
                            
                          }
                        
                          .contentCanvas {
                            margin: auto;
                            z-index: 15;
                          }

                        `}
                    </style>
                </div>)
                } else {
                    return (null)
                };
        }
    }

export default Revolution;