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
      contentPage: 1,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      arrowFade: "fadeOut",
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
    });
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeIn",
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn",
      arrowFade: "fadeOut",
    });
  }
  

  render() {

    return (
      <div className="App">

        <BackgroundVideo type='video/mp4' autoplay mute />


        <div className="Signature">
        <img id="logo" src={cconTriangle} />
            <h1 className="sigText">
                METALS
            </h1>
        </div>
 
        <div id='bannerDiv'>
          <h2 id="banner">
            <a id="revLink" onClick={this.seeRevolution} style={{cursor:'pointer'}}><WordLoop id="text-loop" /></a>
          </h2>
        </div>


         <div id="buttonContainer" className={this.state.buttonFade}>
          
            <a onClick={this.seeSolo}  id="soloButton" style={{cursor:'pointer'}}>
              <SoloButton />
            </a>

            <a onClick={this.seeSmall}  id="smallButton" style={{cursor:'pointer'}}>
              <SmallButton />
            </a>

            <a onClick={this.seeCorp}  id="corpButton" style={{cursor:'pointer'}}>
              <CorpButton />
            </a>

              <div id="footerContainer">

                <a onClick={this.seeContact} id="contactButton" style={{cursor:'pointer'}} id="footerLink">
                  <Contact />
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

          .fadeIn {
            opacity: 1;
            transition: opacity 0.5s linear;
            z-Index: 5;
          }

          .fadeOut {
            opacity: 0;
            transition: opacity 0.5s linear;
            pointer-events: none;
          }


          .App {
            text-align: center;
            height: 100%;
            width: 100%;
          }
          
          .Signature {
            font-family: Syncopate;
            color: rgb(192, 192, 192);
            position: fixed;
            left: -30px;
            top: -30px;
            z-index: 5;
            opacity: 1;
            pointer-events: none;
          }
          
          #logo {
            width: 250px;
            max-width: 250px;
            z-index: -1;
            pointer-events: none;
          }
          
          .sigText {
            font-family: Syncopate;
            font-size: 2em;
            margin-top: -58%;
            margin-left: 61%;
            border-top: 1px solid red;
            border-bottom: 1px solid red;
            width: 7.5em;
            height: 0.95em;
          }

          #revTag {
            color: red;
            z-index: 2;
            height: 100%;
          }
          
          #revLink {
            font-size: 1.7em;
            height: 100%;
            text-shadow: 3px 3px black;
            
          }

          #banner {
            min-width: 800px;
            width: 80vw;
            margin: auto;
            color: white;
            z-index: 1;
            opacity: 0.8;
          }
          
          #bannerDiv {
            transform: translate(0%, 120px)
          }

          @media (max-width: 720px){

            div #bannerDiv{
              display: none;
            }
          }

          #buttonContainer {
              position: absolute;
              width: 80%;
              left: 50%;
              margin-top: 150px;
              transform: translate(-50%, -0%);
              display: flex;
              height: 15vw;
              justify-content: space-evenly;
          }

          @media (max-width: 720px) {
            div #buttonContainer{
              display: inline-flexbox;
              justify-content: space-evenly;
              width: 150px;
              height: 60%;
              top: 60%;
              transform: translate(-120%, -65%);
              margin-top: 0;
            }
          }
          
          #corpButton{
            width: 15vw;
            min-width: 150px;
            min-height: 150px;
            margin-left: 4vw;
          }

          #smallButton{
            width: 15vw;
            min-width: 150px;
            min-height: 150px;
            margin-left: 4vw;
            margin-right: 4vw;
          }
   
          #soloButton{
            width: 15vw;
            min-width: 150px;
            min-height: 150px;
            margin-right: 4vw;
          }
          
          #footerContainer {
              width: 33%;
              position: fixed;
              transform: translate(0%, 600%);
              margin-top: 11vw;
          }

          @media (max-width: 720px) {
            #footerContainer {
              width: 100%;
              position: fixed;
              transform: translate(70%, 50%);
              margin-top: 0%;
          }
          }
          
          #soloButton{
            z-index: 20;
          }
     
          `}</style>
      </div>
    );
  }
}

export default App;
