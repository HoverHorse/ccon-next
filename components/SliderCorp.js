import React from 'react';
import CorpContent1 from './CorpContent1';
import CorpContent2 from './CorpContent2';
import CorpContent3 from './CorpContent3';
import CloseButton from './CloseButton';

export default class Slider extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            slide1: "slide1",
            slide2: "slide2",
            slide3: "slide3",
            slideClass: "slide3",
            seeArrowRight: "visible",
            seeArrowLeft: "hidden",
        }

        this.slideLeft = this.slideLeft.bind(this);
        this.slideRight = this.slideRight.bind(this);

    };

    slideRight() {
        if (this.state.slideClass === this.state.slide1)
        {
            this.setState({ slideClass : this.state.slide2, seeArrowRight : "visible" })
        } 
        else if (this.state.slideClass === this.state.slide2)
        {
            this.setState({ slideClass : this.state.slide3, seeArrowLeft : "hidden" })
        } 
    }

    slideLeft() {
        if (this.state.slideClass === this.state.slide3)
        {
            this.setState({ slideClass : this.state.slide2, seeArrowLeft : "visible" })
        } 
        else if (this.state.slideClass === this.state.slide2)
        {
            this.setState({ slideClass : this.state.slide1, seeArrowRight : "hidden" })
        }
    }


    render() {
        if (this.props.show === true) {
        return (
            <div className="slider">
                        <div className={this.state.slideClass} >
                           <CorpContent1 />
                           <CorpContent2 />
                           <CorpContent3 />
                        </div>
                <button className={this.state.seeArrowLeft} id="goLeft" onClick={this.slideRight}><i className="ChevronLeft" id="left"></i></button>
                <button className={this.state.seeArrowRight} id="goRight" onClick={this.slideLeft}><i className="ChevronRight" id="right"></i></button>
                <a onClick={this.props.onClose} id="closeLink"><CloseButton id="close" /></a>

                <style jsx>
                    {`

                        .hidden {
                            opacity: 0;
                            transition: opacity 0.5s linear;
                            pointer-events: none;
                        }

                        .visible {
                            opacity: 1;
                            transition: opacity 0.5s linear;
                            pointer-events: visible;
                        }

                        .ChevronLeft {
                            position: absolute;
                            height: 75px;
                            width: 75px;
                            z-index: 10;
                            transform: rotate(90deg)
                        }

                        .ChevronRight {
                            position: absolute;
                            height: 75px;
                            width: 75px;
                            z-index: 10;
                            transform: rotate(-90deg)
                        }

                        #left {
                            right: 40px;
                            top: 0px;
                            filter: drop-shadow(4px 3px 3px black);
                        }

                        #right {
                            right: -40px;
                            top: -5px;
                            filter: drop-shadow(-4px 3px 3px black);
                        }

                        .ChevronLeft::before,
                        .ChevronLeft::after {
                            position:absolute;
                            display:block;
                            content:"";
                            border:35px solid transparent; /*adjust size*/
                        }
                        /*Change the four instances of 'top' below to rotate (top/right/bottom/left)*/
                        .ChevronLeft::before {
                            
                            border-top-color:#b00; /*Chevron Color*/
                        }
                        .ChevronLeft::after {
                            top:-10px; /*adjust thickness*/
                            border-top-color:#fff; /*Match background colour*/
                        }

                        .ChevronRight::before,
                        .ChevronRight::after {
                            position:absolute;
                            display:block;
                            content:"";
                            border:35px solid transparent; /*adjust size*/
                        }
                        /*Change the four instances of 'top' below to rotate (top/right/bottom/left)*/
                        .ChevronRight::before {
                            
                            border-top-color:#b00; /*Chevron Color*/
                        }
                        .ChevronRight::after {
                            top:-10px; /*adjust thickness*/
                            border-top-color:#fff; /*Match background colour*/
                        }

                        #closeLink {
                            position: absolute;
                            width: 25px;
                            height: 25px;
                            cursor: pointer;
                            right: 2.5%;
                            top: 4.5%;
                        }

                        button {
                            position: absolute;
                            top: 50%;
                            transform: translateY(-50%);
                            width: 75px;
                            height: 75px;
                            background: none;
                            border: none;
                            cursor: pointer;
                        }

                        button:focus {
                            outline: none;
                            box-shadow: none;
                        }

                        #goLeft {
                            left: 0.5%;
                        }

                        #goRight {
                            right: 0.5%;
                        }

                        .slider {
                            width: 100%;
                            height: 100%;
                            box-sizing: border-box;
                            display: flex;
                            align-items: center;
                            min-width: 450px;
                            overflow: hidden;
                            
                        }

                        i {
                            font-size: 2vw;
                        } 

                        .slide1 {
                            position: relative;
                            width: 100%;
                            height: 60vh;
                            margin: auto;
                            transition: transform 0.5s;
                        }

                        .slide2 {
                            position: relative;
                            width: 100%;
                            height: 60vh;
                            margin: auto;
                            transition: transform 0.5s;
                            transform: translateX(115%);
                        }

                        .slide3 {
                            position: relative;
                            width: 100%;
                            height: 60vh;
                            margin: auto;
                            transition: transform 0.5s;
                            transform: translateX(225%);
                        }

                        @media (max-width: 720px) {

                            #closeLink {
                                top: 10px;
                                right: 15px;
                            }

                            .slider {
                                min-height: 525px;
                            }

                            .slide1 {
                                height: 80vh;
                                margin-top: 0%
                            }

                            .slide2 {
                                height: 80vh;
                                margin-top: 0%
                            }

                            .slide3 {
                                height: 80vh;
                                margin-top: 0%
                            }
                        }

                    `}
                </style>
            </div>
        );} else {
            return null;
        }
    }
}