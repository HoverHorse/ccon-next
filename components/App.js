import React from 'react';
import BackgroundVideo from '../public/video/BackgroundVideo';
import cconTriangle from '../public/assets/cconTriangle.png';
import SoloButton from './SoloButton';
import SmallButton from './SmallButton';
import CorpButton from './CorpButton';
import Contact from './Contact';
import ChevronRight from './ChevronRight';
import ChevronLeft from './ChevronLeft';
import CloseButton from './CloseButton';
import SoloContent from './SoloContent';
import SmallContent from './SmallContent';
import CorpContent from './CorpContent';
import ContactContent from './ContactContent';
import Revolution from './Revolution';
import WordLoop from './TextLoop';
import {useSpring, animated} from 'react-spring';



class App extends React.Component {
  constructor(props) {
    super(props);

    // State management and bindings
    this.state = {
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 3,
      viewContact: false,
      viewRevolution: false,
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
      renderButtons: true,
    };

    this.seeSolo = this.seeSolo.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.seeSmall = this.seeSmall.bind(this);
    this.seeCorp = this.seeCorp.bind(this);
    this.pageRight = this.pageRight.bind(this);
    this.pageLeft = this.pageLeft.bind(this);
    this.seeContact = this.seeContact.bind(this);
    this.seeRevolution = this.seeRevolution.bind(this);
    this.changeSolo = this.changeSolo.bind(this);
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
    });
  }

  timerCloseContent() {
    this.setState({
      buttonFade: "fadeIn",
      contentFade: "fadeOut",
    })
    setTimeout(this.closeAll, 1000);
  }

  seeSolo() {
    this.setState({
      viewSolo: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn"
    });
  }

  changeSolo() {
    this.setState({
      viewSolo: true,
    });
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn"
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn"
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn"
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
      buttonFade: "fadeOut",
      contentFade: "fadeIn"
    });
  }

  pageRight() {
    if (this.state.contentPage <= 2) {
    this.setState({
      contentPage: this.state.contentPage + 1
    })} else if (this.state.contentPage = 3) {
      this.setState({
        contentPage: 1
      })
    }
  }

  pageLeft() {
    if (this.state.contentPage >= 2) {
    this.setState({
      contentPage: this.state.contentPage - 1
    })} else if (this.state.contentPage = 1) {
    this.setState({
        contentPage: 3
      })
    }
  }

  render() {

    return (
      <div className="App">

        <BackgroundVideo type='video/mp4' autoplay />


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
            <a id="rightArrow" onClick={this.pageRight} style={{cursor:'pointer'}}>
              <ChevronRight />
            </a>

            <a id="leftArrow" onClick={this.pageLeft} style={{cursor:'pointer'}}>
              <ChevronLeft />
            </a>

            <a onClick={this.timerCloseContent} style={{cursor:'pointer'}}>
              <CloseButton />
            </a>

            <SoloContent show={this.state.viewSolo} pageNum={this.state.contentPage} id="soloContent" />
            <SmallContent show={this.state.viewSmall} pageNum={this.state.contentPage} id="smallContent" />
            <CorpContent show={this.state.viewCorp} pageNum={this.state.contentPage} id="corpContent" />
            <ContactContent show={this.state.viewContact} id="contactContent" />
            <Revolution show={this.state.viewRevolution} id="revContent" />
         </div>

          <style jsx>{`

          @keyframes slideIn {
            from { transform: translate(-1000px, 0); }
            to   { transform: translate(0, 0); }
          }

          @keyframes slideOut {
            from { transform: translate(0, 0); }
            to   { transform: translate(1000px, 0); }
          }

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

          #rightArrow {
            height: 50px;
            width: 80vw;
            position: absolute;
            left: 10%;
            margin-top: 175px;
            top: 37%;
            min-width: 450px;
          }

          @media (max-width: 904px) {
            #rightArrow {
              top: 37%;
            }
          }

          @media (max-width: 720px) {
            #rightArrow {
              top: 33%;
            }
          }

          #leftArrow {
            height: 50px;
            width: 80vw;
            position: absolute;
            left: 10%;
            margin-top: 175px;
            top: 37%;
            min-width: 450px;
          }

          @media (max-width: 904px) {
            #leftArrow {
              top: 37%;
            }
          }

          @media (max-width: 720px) {
            #leftArrow {
              top: 33%;
            }
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
