import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
	bottom: 0;
	width: 100%;
	padding: 1em 0;
	background: cornflowerblue;
	color: white;
	a {
		color: inherit;
	}
`

const Footer = props => {
	return (
		<Container>
			Created by{' '}
			<a
				href="http://www.tomkeyte.com"
				target="_blank"
				rel="noopener noreferrer"
			>
				Tom Keyte
			</a>
		</Container>
	)
}

export default Footer
