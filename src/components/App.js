import React from 'react'
import GithubCorner from 'react-github-corner'
import styled from 'styled-components'

import '../styles/App.css'

import TimerContainer from '../containers/timerContainer'
import Pomodoro from './pomodoro'
import Footer from './footer'

const Wrapper = styled.div`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
`

const Flex = styled.section`
	display: flex;
	justify-content: space-around;
	margin: 0 auto;
	flex: 1;

	@media screen and (max-width: 1000px) {
		flex-direction: column-reverse;
	}
`

const App = props => {
	return (
		<Wrapper>
			<GithubCorner
				href="https://github.com/tomkeyte/"
				octoColor="tomato"
				bannerColor="royalblue"
			/>

			<h1>
				<em>lil</em>'Doro Timer
			</h1>
			<Flex>
				{/* <Pomodoro /> */}
				<TimerContainer />
			</Flex>
			<Footer />
		</Wrapper>
	)
}

export default App
