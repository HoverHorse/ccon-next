import React from 'react';

class SmallContent2 extends React.Component {
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
                          backgroundImage: "url(" + `${require("../public/assets/APP-4-scroll.jpg")}` + ")",
                          width: "100%",
                          height:"100%",
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                        >
                        </div>
                        <div className="card__face card__face--back" id={this.state.fadeOneB}>
                          <div id="background" style={{
                            backgroundImage: "url(" + `${require("../public/assets/APP-4-scroll.jpg")}` + ")",
                            width: "100%",
                            height:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            filter: "blur(20px)",
                            }}>
                          </div>
                          <p className="cardText" id="cardText1">The Ccon Revolution App gives you the ability to accurately look up and track your current purchases via the order number system. Contact us to get started!</p>
                        </div>
                      </div>
                    </div>
                  <div className="flipCardContainer" id="flipContainer2" onMouseEnter={this.flip2} onMouseLeave={this.unflip2}>
                  <div className={this.state.className2}  id="card2">
                        <div className="card__face card__face--front" id={this.state.fadeTwoA} 
                        style={{
                          backgroundImage: "url(" + `${require("../public/assets/APP-5-invoice.jpg")}` + ")",
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
                            backgroundImage: "url(" + `${require("../public/assets/APP-5-invoice.jpg")}` + ")",
                            width: "100%",
                            height:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            filter: "blur(20px)",
                            }}>
                          </div>
                          <p className="cardText" id="cardText2">The Revolution App offers a unique, dual function, invoicing option. Providing you and/or your clients with an itemized invoice with references to serial number, manufacturer, size, and body style; just like the invoices you would receive on each and every transaction made when you sell catalytic converters to Ccon.</p>
                        </div>
                      </div>
                    </div>
                  <div className="flipCardContainer" id="flipContainer3" onMouseEnter={this.flip3} onMouseLeave={this.unflip3}>
                  <div className={this.state.className3}  id="card3">
                        <div className="card__face card__face--front" id={this.state.fadeThreeA} 
                        style={{
                          backgroundImage: "url(" + `${require("../public/assets/APP-6-shipping.jpg")}` + ")",
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
                            backgroundImage: "url(" + `${require("../public/assets/APP-6-shipping.jpg")}` + ")",
                            width: "100%",
                            height:"100%",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundSize: "cover",
                            filter: "blur(20px)",
                            }}>
                          </div>
                          <p className="cardText" id="cardText3">The Revolution App features our price lock guarantee. Once the client taps the “ship” button, this locks in the catalytic converter scrap price of that shipment until it arrives at our dock. This protects our clients from market volatility and price swings.</p>
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
                    font-size: calc(12px + 1.1vw);
                    text-shadow: 2px 2px 2px black;
                  }

                  #cardText3 {
                    text-align: left;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    width: 75%;
                    color: white;
                    font-size: calc(12px + 1.12vw);
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
                      height: 100%;
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
                      color: white;
                      font-size: calc(12px + 1.3vw);
                    }
  
                    #cardText2 {
                      text-align: center;
                      width: 75%;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      color: white;
                      font-size: calc(12px + 1.1vw);
                    }
  
                    #cardText3 {
                      text-align: center;
                      left: 50%;
                      top: 50%;
                      transform: translate(-50%, -50%);
                      width: 75%;
                      color: white;
                      font-size: calc(12px + 1.3vw);
                    }
                  }


              `}
              </style>
        </div>
);
}
}
export default SmallContent2;