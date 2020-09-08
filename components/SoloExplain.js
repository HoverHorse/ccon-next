import React from 'react';

class SoloExplain extends React.Component {
    constructor (props) {
        super(props);

        };

        render() {
            return (
                <div id="explainContainer">
                    <div className="allText">
                        <p id="soloButtonTag">Single-User</p>
                        <p id="soloExplain">One buyer access to the Revolution app.</p>
                    </div>

                    <style jsx>
                        {`

                        #explainContainer {
                            transform: translate(0%, -68px)
                        }

                        .allText {
                            
                        }
                                                
                        #soloExplain {
                            color: white;
                            pointer-events: none;
                            font-size: calc(14px + 0.4vw);
                        }

                        #soloButtonTag {
                            font-weight: 600;
                            font-size: 1.5em;
                            color: black;
                            text-decoration: underline;

                          }
                        

                        @media (max-width: 720px) {

                            #explainContainer{
                                transform: translate(0%, -85%);
                                
                            }

                            .allText {
                                
                            }

                            #soloButtonTag {
                                
                            }

                            #soloExplain {
                                font-size: calc(14px + 1vw);
                                transform: translate(0%, -40%);
                            }

                            
                        }

                        @media (max-width: 550px) {

                            #explainContainer{
                                transform: translate(0%, -85%);
                                
                            }

                            .allText {
                                
                            }

                            #soloButtonTag {
                                
                            }

                            #soloExplain {
                                font-size: calc(14px + 1vw);
                                transform: translate(0%, -40%);
                            }

                            
                        }

                        @media (max-width: 343px) {

                            #explainContainer{
                                transform: translate(0%, -65%);
                                
                            }

                            .allText {
                                
                            }

                            #soloButtonTag {
                                
                            }

                            #soloExplain {
                                font-size: calc(14px + 1vw);
                                transform: translate(0%, -20%);
                            }

                            
                        }

                            
                        
                        `}
                    </style>
                </div>
            )
        }
    }

export default SoloExplain;


// #explainContainer{
//     position: absolute;
//     width: 100%;
//     height: 50px;
    
// }

// .allText {
//     position: absolute;
//     width: 100%;
//     height: 50px;
//     margin: auto;
// }

// #soloButtonTag {
//     position: absolute;
//     height: 50px;
//     width: 200px;
//     transform: translate(0px, 0px);
// }

// #soloExplain {
//     position: absolute;
//     color: white;
//     pointer-events: none;
//     width: 45vw;
//     height: 50px;
//     margin-left: 200px;
//     transform: translate(0px, 0px);
//     font-size: 1.1em;
// }