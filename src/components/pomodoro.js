import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.aside`
	margin-right: 40px;
	max-width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	div {
		border-radius: 10px;
		background: rgba(0, 0, 0, 0.1);
		padding: 20px;
	}
	span {
		display: block;
		margin: 20px 0;
		line-height: 130%;
		font-weight: 500;
	}
`

const Pomodoro = props => {
	return (
		<Wrapper>
			<div>
				<span>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Illo cupiditate, explicabo, maxime voluptates fugit quae
				</span>
				<span>
					Quibusdam, repellat, repudiandae! Neque commodi id eveniet,
					voluptatem assumenda molestiae tempore ipsam sit doloribus
					amet.
				</span>
				<span>
					Ratione assumenda deleniti quam culpa rem, voluptate
					laboriosam
				</span>
				<span>
					Aperiam tempore aut suscipit dolorum deserunt. Ducimus
					magnam incidunt corporis
				</span>
			</div>
		</Wrapper>
	)
}

export default Pomodoro
