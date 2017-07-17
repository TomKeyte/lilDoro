import React from 'react'
import GithubCorner from 'react-github-corner'

import '../styles/App.css'


import TimerContainer from './TimerContainer'

const App = (props) => {
    return (
        <div>
            <GithubCorner href="https://github.com/tomkeyte/" octoColor='tomato' bannerColor='royalblue'/>
            <TimerContainer/>
            <Footer />
        </div>
    );
}

const Footer = (props) => {
    return <footer>Created by <a href='http://www.tomkeyte.com' target='_blank' rel='noopener noreferrer'>Tom Keyte</a></footer>
}

export default App