import React from 'react'
import GithubCorner from 'react-github-corner'

import '../styles/App.css'

import TimerContainer from './TimerContainer'
import Footer from '../components/footer'

const App = (props) => {
    return (
        <div>
            <GithubCorner href="https://github.com/tomkeyte/" octoColor='tomato' bannerColor='royalblue'/>
            <TimerContainer/>
            <Footer />
        </div>
    );
}

export default App