// require('wavesurfer.js')

import React, { useEffect } from 'react'
// import Wavesurfer from 'react-wavesurfer'

import { Icon } from 'antd'

import '../assets/App.css'


const Home = () => {


    useEffect(() => {

    }, [])
    return (
        <div className="web">
            <div className="white">
                <Icon type="align-left" className="djIcon"/>
                <div className="djName">
                    <div>Patricio</div>
                </div>
                <div className="djName">
                    <div>Mayorga</div>
                </div>
                <div className="upcoming">
                    <h2>UPCOMING SONG</h2>
                </div>
                <div className="songOut">
                    <div className="songIn">
                        haha
                    </div>
                </div>
            </div>
            <div className="black"></div>
            <div className="song">
                <div id="waveform"></div>
            </div>
        </div>
    )

}

export default Home