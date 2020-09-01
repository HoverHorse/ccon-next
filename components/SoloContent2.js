import React from 'react';

class SoloContent2 extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      className1: "flipCard",
      className2: "flipCard",
      className3: "flipCard",
      fadeOneA: "unFade",
      fadeOneB: "fade",
      fadeTwoA: "unFade",
      fadeTwoB: "fade",
      fadeThreeA: "unFade",
      fadeThreeB: "fade",
    }

    this.flip1 = this.flip1.bind(this);
    this.unflip1 = this.unflip1.bind(this);
    this.flip2 = this.flip2.bind(this);
    this.unflip2 = this.unflip2.bind(this);
    this.flip3 = this.flip3.bind(this);
    this.unflip3 = this.unflip3.bind(this);
}

flip1() {
  this.setState({ className1 : "flipCard is-flipped", fadeOneA : "fade", fadeOneB : "unFade" })
}

unflip1() {
  this.setState({ className1 : "flipCard", fadeOneA : "unFade", fadeOneB : "fade" })
}

flip2() {
  this.setState({ className2 : "flipCard is-flipped", fadeTwoA : "fade", fadeTwoB : "unFade" })
}

unflip2() {
  this.setState({ className2 : "flipCard", fadeTwoA : "unFade", fadeTwoB : "fade" })
}

flip3() {
  this.setState({ className3 : "flipCard is-flipped", fadeThreeA : "fade", fadeThreeB : "unFade" })
}

unflip3() {
  this.setState({ className3 : "flipCard", fadeThreeA : "unFade", fadeThreeB : "fade" })
}


render() {

  return (
        <div id="contentContainer">
              <div className="contentCanvas contentCanvas--card">
                  <div className="flipCardContainer" id="flipContainer1" onMouseEnter={this.flip1} onMouseLeave={this.unflip1}>
                    <div className={this.state.className1}  id="card1">
                        <div className="card__face card__face--front" id={this.state.fadeOneA} 
                        style={{
                          backgroundImage: "url(" + `${require("../public/assets/APP-1-graph.jpg")}` + ")",
                          width: "100%",
                          height:"100%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        >
                        </div>
                        <div className="card__face card__face--back" id={this.state.fadeOneB}>
                          <div style={{
                            backgroundImage: "url(" + `${require("../public/assets/APP-1-graph.jpg")}` + ")",
                            width: "100%",
                            height:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            filter: "blur(20px)",
                            }}>
                          </div>
                          <p className="cardText" id="cardText1">Ccon Metals catalytic converter scrap price always represents current precious metals markets. The Ccon Revolution App automatically updates as market pricing changes.</p>
                        </div>
                      </div>
                    </div>
                  <div className="flipCardContainer" id="flipContainer2" onMouseEnter={this.flip2} onMouseLeave={this.unflip2}>
                  <div className={this.state.className2}  id="card2">
                        <div className="card__face card__face--front" id={this.state.fadeTwoA} 
                        style={{
                          backgroundImage: "url(" + `${require("../public/assets/APP-2-browse.jpg")}` + ")",
                          width: "100%",
                          height:"100%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        >
                        </div>
                        <div className="card__face card__face--back" id={this.state.fadeTwoB}>
                          <div style={{
                            backgroundImage: "url(" + `${require("../public/assets/APP-2-browse.jpg")}` + ")",
                            width: "100%",
                            height:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            filter: "blur(20px)",
                            }}>
                          </div>
                          <p className="cardText" id="cardText2">Our catalytic converter database is at your fingertips: enabling quick and easy unit value assessment. The Ccon Revolution App features thousands of catalytic converter numbers and prices.</p>
                        </div>
                      </div>
                    </div>
                  <div className="flipCardContainer" id="flipContainer3" onMouseEnter={this.flip3} onMouseLeave={this.unflip3}>
                  <div className={this.state.className3}  id="card3">
                        <div className="card__face card__face--front" id={this.state.fadeThreeA} 
                        style={{
                          backgroundImage: "url(" + `${require("../public/assets/APP-3-assist.jpg")}` + ")",
                          width: "100%",
                          height:"100%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        >
                        </div>
                        <div className="card__face card__face--back" id={this.state.fadeThreeB}>
                          <div style={{
                            backgroundImage: "url(" + `${require("../public/assets/APP-3-assist.jpg")}` + ")",
                            width: "100%",
                            height:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            filter: "blur(20px)",
                            }}>
                          </div>
                          <p className="cardText" id="cardText3">With the Ccon Revolution App, you have access to our “Live Assist” feature. Allowing real time aid from our catalytic converter experts. Simply submit a picture for a near instant assessment.</p>
                        </div>
                      </div>
                    </div>
              </div>
              <style jsx>
                {`

                  @keyframes fadeIn {
                    0% {
                      opacity: 0;
                    }

                    

                    100% {
                      opacity: 1;
                    }
                  }

                  @keyframes fadeOut {
                    0% {
                      opacity: 1;
                    }

                    50% {
                      opacity: 0;
                    }

                    100% {
                      opacity: 0;
                    }
                  }

                  #fade {
                    animation: fadeOut ease 0.5s;
                  }

                  #unFade {
                    animation: fadeIn ease 0.5s;
                  }

                  .cardText {
                    position: absolute;
                    height: 100%;
                    width: 80%;
                    transform: translateY(-105%);
                  }

                  #cardText1 {
                    text-align: right;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 75%;
                    color: white;
                    font-size: calc(12px + 1.3vw);
                    text-shadow: 2px 2px 2px black;
                  }

                  #cardText2 {
                    text-align: center;
                    width: 90%;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    color: white;
                    font-size: calc(12px + 1.3vw);
                    text-shadow: 2px 2px 2px black;
                  }

                  #cardText3 {
                    text-align: left;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 75%;
                    color: white;
                    font-size: calc(12px + 1.2vw);
                    text-shadow: 2px 2px 2px black;
                  }
                
                  #contentContainer {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    background-image: url('image');
                    background-color: rgb(192,192,192);
                    border-radius: 8px;
                    transform: translateX(-100%);
                    right: 15%;
                    overflow: hidden;
                    border: 5px solid silver;
                    box-sizing: border-box;

                  }
                
                  .contentCanvas {
                    z-index: 1;
                    height: 100%;
                    width: 100%;
                    margin: auto;
                    margin-top: 0%;
                    
                  }
                
                  .flipCard {
                    margin: auto;
                    list-style: none;
                    font-size: 1.6em;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    display: inline-block;
                    transition: transform 0.5s;
                    transform-style: preserve-3d;
                    position: relative;
                    cursor: pointer;
                    
                  }
                
                  .card__face {
                    position: absolute;
                    height: 100%;
                    width: 100%;
                    
                    text-align: center;
                  }

                  .card__face--front {
                    background: white;
                    overflow: hidden;
                  }

                  .card__face--back {
                    background: black;
                    transform: rotateY( 180deg );
                    overflow: hidden;
                  }

                  .flipCard.is-flipped {
                    transform: rotateY( 180deg );
                  }

                  #card1 {
                    
                  }

                  .flipCardContainer {
                    perspective: 40rem;
                    z-index: 1;
                    height: 100%;
                    width: 33.333333333333333333333333%;
                    margin: auto;
                    display: inline-block;
                   
                  }

                  @media (max-width: 720px) {
                    .flipCardContainer {
                      width: 100%;
                      height: 33%;
                      margin-top: 0%;
                    }

                    #card3 {
                      margin-top: 0%
                    }

                    .card__face--back {
                      background: black;
                      transform: rotateX( 180deg );
                    }

                    .flipCard.is-flipped {
                      transform: rotateX( 180deg );
                    }

                    #card2 {
                      margin-top: 0%
                      
                    }

                    .flipCard {
                      width: 100%;
                      height: 100%;
                    }

                    .contentCanvas {
                      transform: translate(0, 0%);
                      min-height: 525px;
                      height: 102%;
                      width: 100%;
                      margin-top: 0%;
                    }

                    #contentContainer {
                      height: 100%;
                      min-height: 575px;
                      overflow: hidden;
                    }

                    #cardText1 {
                      text-align: center;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      width: 75%;
                      font-size: calc(12px + 1.3vw);
                      color: black;
                      text-shadow: 2px 2px 2px white;
                    }
  
                    #cardText2 {
                      text-align: center;
                      width: 75%;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      color: white;
                      font-size: calc(12px + 1.3vw);
                    }
  
                    #cardText3 {
                      text-align: center;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      width: 75%;
                      color: white;
                      font-size: calc(12px + 1.2vw);
                    }
                  }


              `}
              </style>
        </div>
);
}
}
export default SoloContent2;