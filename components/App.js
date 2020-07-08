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
      soloTransition: "",
      smallTransition: "",
      corpTransition: "",
    };

    this.seeSolo = this.seeSolo.bind(this);
    this.closeAll = this.closeAll.bind(this);
    this.seeSmall = this.seeSmall.bind(this);
    this.seeCorp = this.seeCorp.bind(this);
    this.pageRight = this.pageRight.bind(this);
    this.pageLeft = this.pageLeft.bind(this);
    this.seeContact = this.seeContact.bind(this);
    this.seeRevolution = this.seeRevolution.bind(this);
  }

  // Function objects
  
  closeAll() {
    this.setState({
      viewSolo: false,
      viewSmall: false,
      viewCorp: false,
      contentPage: 3,
      viewContact: false,
      viewRevolution: false,
    });
  }

  seeSolo() {
    this.setState(state => ({
      viewSolo: true,
    }));
  }

  seeSmall() {
    this.setState({
      viewSmall: true,
    });
  }

  seeCorp() {
    this.setState({
      viewCorp: true,
    });
  }

  seeContact() {
    this.setState({
      viewContact: true,
    });
  }

  seeRevolution() {
    this.setState({
      viewRevolution: true,
    });
  }

  setSoloSlideIn() {
    this.setState({
      soloTransition: "slideIn"
    })
  }

  setSoloSlideOut() {
    this.setState({
      soloTransition: "slideOut"
    })
  }

  setSmallSlideIn() {
    this.setState({
      smallTransition: "slideIn"
    })
  }

  setSmallSlideOut() {
    this.setState({
      smallTransition: "slideOut"
    })
  }

  setCorpSlideIn() {
    this.setState({
      corpTransition: "slideIn"
    })
  }

  setCorpSlideOut() {
    this.setState({
      corpTransition: "slideOut"
    })
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


  // Rendered objects
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
            <a id="revLink" onClick={this.seeRevolution} style={{cursor:'pointer'}}>Your _______ <i id="revTag">REVOLUTION</i> in the catalytic converter market</a>
          </h2>
        </div>


         <div id="buttonContainer" >
            <a onClick={this.seeSolo}  id="soloButton" style={{cursor:'pointer'}}><SoloButton showComponent={this.seeSolo} visible={this.state.viewSolo} buttonHide={this.state.viewSmall || this.state.viewCorp || this.state.viewRevolution || this.state.viewContact} /></a>
            <a onClick={this.seeSmall}  id="smallButton" style={{cursor:'pointer'}}><SmallButton visible={this.state.viewSmall} buttonHide={this.state.viewSolo || this.state.viewCorp || this.state.viewRevolution || this.state.viewContact} /></a>
            <a onClick={this.seeCorp}  id="corpButton" style={{cursor:'pointer'}}><CorpButton visible={this.state.viewCorp} buttonHide={this.state.viewSmall || this.state.viewSolo || this.state.viewRevolution || this.state.viewContact} /></a>
              <div id="footerContainer">
                <a onClick={this.seeContact} id="contactButton" style={{cursor:'pointer'}} id="footerLink"><Contact buttonHide={this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution}></Contact></a>
              </div>
         </div>

         <div>
            <a id="rightArrow" onClick={this.pageRight} style={{cursor:'pointer'}}><ChevronRight buttonHide={this.state.viewSolo || this.state.viewSmall || this.state.viewCorp}/></a>
            <a id="leftArrow" onClick={this.pageLeft} style={{cursor:'pointer'}}><ChevronLeft buttonHide={this.state.viewSolo || this.state.viewSmall || this.state.viewCorp}/></a>
            <a onClick={this.closeAll} style={{cursor:'pointer'}}><CloseButton buttonHide={this.state.viewSolo || this.state.viewSmall || this.state.viewCorp || this.state.viewContact || this.state.viewRevolution}/></a>
            <SoloContent visible={this.state.viewSolo} pageNum={this.state.contentPage} id="soloContent" />
            <SmallContent visible={this.state.viewSmall} pageNum={this.state.contentPage} id="smallContent" />
            <CorpContent visible={this.state.viewCorp} pageNum={this.state.contentPage} id="corpContent" />
            <ContactContent visible={this.state.viewContact} id="contactContent" />
            <Revolution visible={this.state.viewRevolution} id="revContent" />
         </div>

          <style jsx>{`

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
            top: 34%;
            min-width: 450px;
          }

          @media (max-width: 1401px) {
            #rightArrow {
              top: 40%;
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
            top: 34%;
            min-width: 450px;
          }

          @media (max-width: 1401px) {
            #leftArrow {
              top: 40%;
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
            border-top: 1px solid red;
            border-bottom: 1px solid red;
            width: 80vw;
            margin: auto;
            color: white;
            z-index: 1;
            opacity: 0.8;
          }
          
          #bannerDiv {
            transform: translate(0%, 150px)
          }

          @media (max-width: 720px){

            div #bannerDiv{
              display: none;
            }
          }

          div #buttonContainer {
              position: absolute;
              width: 80%;
              left: 50%;
              top: 50%;
              transform: translate(-50%, -85%);
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
            }
          }
          
          #corpButton{
            width: 15vw;
            min-width: 150px;
            min-height: 150px;
            margin: 4vw;
          }

          #smallButton{
            width: 15vw;
            min-width: 150px;
            min-height: 150px;
            margin: 4vw;
          }
   
          #soloButton{
            width: 15vw;
            min-width: 150px;
            min-height: 150px;
            margin: 4vw;
          }
          
          div #contentContainer {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 60vh;
            width: 80vw;
            background-color: white;
            border-radius: 8px;
            
          }
          
          #footerContainer {
              width: 33%;
              position: fixed;
              transform: translate(0%, 500%);
              margin-top: 20%;
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
