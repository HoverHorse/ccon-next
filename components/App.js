import React from 'react';
import BackgroundVideo from '../public/video/BackgroundVideo';
import cconTriangle from '../public/assets/cconTriangle.png';
import SoloButton from './SoloButton';
import SmallButton from './SmallButton';
import CorpButton from './CorpButton';
import Contact from './Contact';
import SliderSolo from './SliderSolo';
import SliderSmall from './SliderSmall';
import SliderCorp from './SliderCorp';
import ContactContent from './ContactContent';
import Revolution from './Revolution';
import WordLoop from './TextLoop';
import Who from './Who';
import What from './What';
import Why from './Why';
import ClickMe from './ClickMe';


class App extends React.Component {
  constructor(props) {
    super(props);

    // State management and bindings
    this.state = {
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 1,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
      renderButtons: true,
      bannerState: "",
    };

    this.seeSolo = this.seeSolo.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.seeSmall = this.seeSmall.bind(this);
    this.seeCorp = this.seeCorp.bind(this);
    this.seeContact = this.seeContact.bind(this);
    this.seeRevolution = this.seeRevolution.bind(this);
    this.timerCloseContent = this.timerCloseContent.bind(this);
  }

  // Function objects

  closeAll() {
    this.setState({
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 2,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
      bannerState: "",
    });
  }

  timerCloseContent() {
    this.setState({
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
    })
    setTimeout(this.closeAll, 500);
  }

  seeSolo() {
    this.setState({
      viewSolo: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Single-User",
    });
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Multi-User",
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
      bannerState: "Multi-Location",
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      viewRevolution: false,
      bannerState: "Contact Us",
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      viewContact: false,
      bannerState: "Join the Ccon Revolution!",
    });
  }

  handleBannerChange() {

  }
  

  render() {
    return (
      <div className="App">

        <head>
          <title>Ccon Metals Inc. - The best catalytic converter scrap price</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" desc="Sell catalytic converters with transparency, security, and integrity."/>
        </head>
        

        
        <BackgroundVideo />
        <a onClick={this.closeAll}><div id="clickAway" >

        </div></a>


        <div className="Signature">
          <img id="logo" src={cconTriangle} alt="catalytic converter scrap price" />
            <h1 className="sigText">
                METALS
            </h1>

            <a id="footerLink">
              <div id="footerContainer">
                <Contact />
            </div>
            </a>
        </div>

        <div id='bannerDiv' >
          <h2 id="banner" className={this.state.buttonFade} >
            <a id="revLink" onClick={this.seeRevolution} style={{cursor:'pointer'}}><WordLoop id="text-loop" /></a>
          </h2>
          <h2 id="banner2" className={this.state.contentFade}>
            <span id="spanLink">{this.state.bannerState}</span>
          </h2>
        </div>

        <div id="showcase">
        <div id="bioContainer" className={this.state.buttonFade}>
            <div id="who" className={this.state.buttonFade}><Who /></div>
            <div id="what" className={this.state.buttonFade}><What /></div>
            <div id="why" className={this.state.buttonFade}><Why /></div>
        </div>


        <div id="clickMe" className={this.state.buttonFade}>
          <ClickMe />
        </div>

        

         <div id="buttonContainer" className={this.state.buttonFade}>
            <a onClick={this.seeSolo}  id="soloButton" 
            style={{cursor:'pointer'}}>
              <SoloButton />
            </a>

            <a onClick={this.seeSmall}  id="smallButton" style={{cursor:'pointer'}}>
              <SmallButton />
            </a>

            <a onClick={this.seeCorp}  id="corpButton" style={{cursor:'pointer'}}>
              <CorpButton />
            </a>
          </div>
          </div>
          

         <div id="contentContainer" className={this.state.contentFade}>
            <SliderSolo show={this.state.viewSolo} onClose={this.timerCloseContent} id="soloContent" />
            <SliderSmall show={this.state.viewSmall} onClose={this.timerCloseContent} id="smallContent" />
            <SliderCorp show={this.state.viewCorp} onClose={this.timerCloseContent} id="corpContent" />
            <ContactContent show={this.state.viewContact} onClose={this.timerCloseContent} id="contactContent" />
            <Revolution show={this.state.viewRevolution} onClose={this.timerCloseContent} id="revContent" />
         </div>

        

          <style jsx>{`

          #showcase {
            height: 100vh;
            width: 100vw;
          }

          #contentContainer {
            position: absolute;
            height: 65vh;
            width: 90vw;
            top: 25vh;
            margin-left: 5vw;
            overflow-y: auto;
            overflow-x: hidden;
          }

          .fadeIn {
            opacity: 1;
            transition: opacity 0.5s linear;
          }

          .fadeOut {
            opacity: 0;
            transition: opacity 0.5s linear;
            pointer-events: none;
          }


          .App {
            text-align: center;
            height: 100vh;
            width: 100vw;
            box-sizing: border-box;
          }
          
          .Signature {
            font-family: Syncopate;
            color: rgb(192, 192, 192);
            position: fixed;
            z-Index: 5;
            opacity: 1;
            width: 100vw;
            height: 12vh;
            margin-top: 0vh;
          }
          
          #logo {
            min-width: 110px;
            width: 17vw;
            max-width: 141px;
            margin-top: 0vh;
            margin-left: 0vw;
            float: left;
            pointer-events: none;
          }
          
          .sigText {
            font-family: Syncopate;
            font-size: 1.8em;
            margin-top: 52px;
            margin-left: 94px;
            min-width: 180px;
            width: 25vw;
            max-width: 250px;
            min-height: 25px;
            height: 3vh;
            max-height: 30px;
            position: fixed;
            z-Index: -1;
            pointer-events: none;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
          }

          #revTag {
            color: red;
            height: 100vh;
          }
          
          #revLink {
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
          }

          #spanLink {
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
          }

          #banner {
            width: 80%;
            height: 100%;
            margin: auto;
            color: white;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
          }

          #banner2 {
            width: 80%;
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
            margin: auto;
            color: white;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
            transform: translateY(-100%);
          }
          
          #bannerDiv {
            position: absolute;
            min-height: 66px;
            height: 7.5%;
            max-height: 75px;
            width: 100%;
            top: 115px;
            margin: auto;
            z-Index: 4;
          }

          #buttonContainer {
              width: 80%;
              margin: auto;
              transform: translate(0%, 0);
              display: flex;
              height: 60px;
              justify-content: space-evenly;
          }

          #corpButton {
            min-width: 180px;
            width: 15vw;
            max-width: 220px;
            height: 60px;
            margin-left: 4vw;
          }

          #smallButton {
            min-width: 180px;
            width: 15vw;
            max-width: 220px;
            height: 60px;
            margin-left: 4vw;
            margin-right: 4vw;
          }
   
          #soloButton {
            margin-right: 4vw;
            min-width: 180px;
            width: 15vw;
            max-width: 220px;
            height: 60px;
          }

          #clickMe {
            height: 50px;
            width: 100%;
            font-size: 1.5em;
            position: relative;
            margin-top: 70px;
          }

          #clickAway {
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: transparent;
            top: 0;
            z-Index; 10;
            opacity: 0.99
          }

          #bioContainer {
            width: 80%;
            margin: auto;
            opacity: 0.99;
            display: inline-flex;
            margin-top: 225px;
            min-height: 255px;
            height: 35vh;
            max-height: 300px;
            justify-content: space-evenly;
            }
          
          #who {
            width: 33vw;
            height: 60px;
            margin-right: 4vw;
          }

          #what {
            width: 33vw;
            height: 60px;
            margin-left: 4vw;
            margin-right: 4vw;
          }
   
          #why {
            margin-left: 4vw;
            width: 33vw;
            height: 60px;
            
          }


          
          #footerContainer {
              width: 310px;
              height: 100%;
              text-align: center;
              display: inline-block;
              float: right;
              margin-right: 2vw;
          }

          a #footerLink {
            height: 100%;
            width: 33vw;
            
          }

          @media (max-width: 720px) {

            .Signature {
              width: 100vw;
              height: 100px;
              min-width: 360px;
            }

            #bannerDiv {
              width: 100vw;
              min-width: 360px;
            }

            .App {
              text-align: center;
              height: 100vh;
              width: 100vw;
            }

            #footerContainer {

            }

            #bannerDiv{
              display: none;
              
            }

            #contentContainer {
              height: 100vh;
              transform: translate(0, -90px);
              min-height: 600px;
            }

            #bioContainer {
              width: 100vw;
              height: 50vh;
              margin: auto;
              display: inline-block;
              margin-top: 110px;
              position: relative;
              min-width: 500px;
              }

            #who {
                width: 100%;
                height: 33%;
                margin-right: 0vw;
                margin-top: 0px;
                
              }
    
            #what {
                width: 100%;
                height: 33%;
                margin-right: 0vw;
                margin-left: 0vw;
                margin-top: 0px;
                
              }
       
            #why {
                width: 100%;
                height: 33%;
                margin-left: 0vw;
                margin-top: 0px;
                
              }

            #buttonContainer{
              position: absolute;
              display: inline-flexbox;
              width: 100vw;
              height: 25vh;
              margin: auto;
              left: 0;
              min-width: 500px;
              margin-top: 25px;
            }

            #corpButton {
              position: absolute;
              width: 90%;
              height: 50px;
              left: 0%;
              margin-top: 180px;
              margin-left: 5vw;
            }
  
            #smallButton {
              position: absolute;
              width: 90%;
              height: 50px;
              left: 0%;
              margin-top: 90px;
              margin-left: 5vw;
              margin-right: 0;
            }
     
            #soloButton {
              position: absolute;
              width: 90%;
              height: 50px;
              left: 0%;
              margin-right: 0;
              margin-left: 5vw;
            }

            #clickMe {
              transform: translate(0px, 0px);
              width: 100vw;
              margin-top: 0;
              min-width: 500px;
            }

            #showcase {
              height: 100vh;
              width: 100vw;
            }
        
          }
          `}</style>
      </div>
    );
  }
}

export default App;
