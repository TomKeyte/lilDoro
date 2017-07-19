import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.ul`
	list-style-type: none;
	display: flex;
	justify-content: center;
	padding: 0;
`

const Format = styled.li`
	display: inline-block;
	padding: 5px 10px;
	cursor: pointer;
	transition: background-color, color;
	transition-timing-function: ease-in-out;
	transition-duration: 0.3s;
	border-radius: 5px;
	color: ${props => (props.current ? '#fff' : '#ddd')};
	background-color: ${props =>
		props.current ? 'cornflowerblue' : 'transparent'};

	&:not(:last-of-type) {
		margin-right: 10px;
	}

	&:hover {
		background-color: ${props =>
			props.current ? 'royalblue' : 'royalblue'};
		color: #eee;
	}
`

const Formats = props => {
	const timeFormats = props.formats()

	return (
		<Wrapper>
			{timeFormats &&
				timeFormats.map((t, i) => {
					return (
						<Format
							key={i}
							current={t.name === props.format}
							onClick={props._handleFormatClick}
						>
							{t.name}
						</Format>
					)
				})}
		</Wrapper>
	)
}

export default Formats
