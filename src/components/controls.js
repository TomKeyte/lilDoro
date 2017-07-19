import React from 'react'
import styled from 'styled-components'

import playIcon from '../images/play.svg'
import pauseIcon from '../images/pause.svg'
import restartIcon from '../images/restart.svg'

const Wrapper = styled.div`
	display: block;
	display: flex;
	justify-content: center;
	margin-top: 30px;
`

const Button = styled.span`
	min-width: 60px;
	height: 60px;
	background: royalblue;
	border: none;
	outline: none;
	cursor: pointer;
	border-radius: 5px;
	padding: 10px;
	color: white;

	&:first-of-type {
		margin-right: 30px;
	}

	i {
		display: block;
		background-image: url(${props => props.icon && props.icon});
		background-size: contain;
		background-repeat: no-repeat;
		width: 100%;
		height: 100%;

		&:hover {
			transform: scale(1.1);
			transition: transform 0.3s;
		}
	}
`

const Controls = props => {
	return (
		<Wrapper>
			<Button
				onClick={props._handlePlay}
				icon={!props.play ? playIcon : pauseIcon}
			>
				<i />
			</Button>
			<Button onClick={props._handleReset} icon={restartIcon}>
				<i />
			</Button>
		</Wrapper>
	)
}

export default Controls
