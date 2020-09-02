import React from 'react';
import App from '../components/App';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import Head from 'next/head';

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Ccon Metals Inc. - The best catalytic converter scrap price</title>
                    <meta desc="Sell catalytic converters with transparency, security, and integrity."/>
                    <link rel="icon" type="image/ico" href="../public/favicon.ico"/>
                </Head>

                <App></App>
                <style>
                    {`
                        @font-face {
                            font-family: 'Syncopate';
                            src: local('Syncopate-Bold'), url(./fonts/Syncopate-Bold.ttf) format('truetype');
                          }
                          
                          html, body, #__next, #next-body {
                            margin: auto;
                            margin-top: 0;
                            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
                              'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
                              sans-serif;
                            -webkit-font-smoothing: antialiased;
                            -moz-osx-font-smoothing: grayscale;
                            
                            background-color: #282c34;
                            width: 100%;
                            max-height: 800px;
                            
                            min-width: 630px;
                          }

                        @media (max-width: 720px) {

                            html, body, #__next, #next-body {
                                width: 100%;
                                height: 100vh;
                                max-height: 1200px;
                                min-width: 600px;
                                overflow: hidden;
                            }

                        }
                    `}
                </style>
            </div>
        )
    }
}

Index.getInitialProps = async function() {
    // Fetch some data from an external API
    return {
      name: "Arunoda Susiripla"
    }
  }



export default Index;