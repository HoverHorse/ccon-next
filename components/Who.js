import React from 'react';

class Who extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            imgURL: './assets/who-we-are.jpg'
        }

        };

        render() {
            return (
                <div id="whoContainer">
                    <div id="imgContainer" style={{textAlign: "center"}}>
                    <img id="whoImg" src={this.state.imgURL} style={{}}></img>
                    <div id="whoContent">
                        <strong><u id="whoTitle">Who we are:</u></strong><br />
                        Since 2005 Ccon Metals has served the precious metal recycling industry with our fully equipped processing facility in Abbotsford B.C.
                    </div>
                    </div>

                    


                    <style jsx>
                        {`

                        #whoContainer {
                            height: 100%;
                            width: 200px;
                            margin: auto;
                        }
                        

                        #whoImg {
                            height: 200px;
                            width: 200px;
                            background-color: black;
                            
                            border-radius: 50%;
                            border: 2px black solid;
                            box-sizing: border-box;
                            
                        }

                        #whoContent {
                            color: white;
                            margin-top: 0px;
                            transform: translate(0, 0px);
                            font-size: calc(12px + 0.3vw);
                            
                        }

                        #whoTitle {
                            text-shadow: 1px 1px 1px black;
                        }

                        @media (max-width: 720px) {

                            #imgContainer {
                                height: 100%;
                                width: 100%;
                                overflow: hidden;
                                border-radius: 0%;
                                border: 2px black solid;
                                box-sizing: border-box;
                            }

                            #whoContainer {
                                height: 100%;
                                width: 100%;
                                margin: auto;
                                overflow: hidden;
                            }
    
                            #whoImg {
                                height: 100vh;
                                width: 100%;
                                max-width: 720px;
                                max-height: 400px;
                                background-color: black;
                                margin: auto;
                                border-radius: 0%;
                                border: 2px black solid;
                                box-sizing: border-box;
                                
                                top: 50%;
                                left: 50%;
                                transform: translate(0%, -30%);
                                
                            }
    
                            #whoContent {
                                
                                transform: translate(0, -405px);
                                width: 90%;
                                margin: auto;
                                color: black;
                                font-size: 18px;
                                text-shadow: 2px 2px 1px white;
                            }

                            #whoTitle {
                                text-shadow: 2px 2px 1px white;
                            }

                        }
                        
                        `}
                    </style>
                </div>
            )
        }
    }

export default Who;