import React, {Component} from 'react';

class BackgroundVideo extends Component {
    constructor (props) {
        super(props);

        this.state = {
            videoURL: 'https://ccon-site.s3-us-west-2.amazonaws.com/BoxFillLoop.mp4'
        }
    }

    render () {
        return (
            <video alt="Sell catalytic converters" id="background-video" type="video/mp4" muted autoplay="" loop="" style={{

                height: '100vh',
                width: '100vw',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                padding: 'none',
                position: 'fixed',
                opacity: '0.3',
                objectFit: 'cover',

            }}>
                <source src={this.state.videoURL} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        )
    }
};

export default BackgroundVideo;