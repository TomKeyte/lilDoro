import React from 'react'
import styled from 'styled-components'

import NumberLine from './numberLine'
import InlineTimeEdit from './inlineTimeEdit'
import StateList from './stateList'
import Formats from './formats'

import Volume from './volume'
import Notifiers from './notifiers'
import Controls from './controls'

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	> div {
	}
`

const Timer = props => {
	const { time, start } = props

	return (
		<Wrapper>
			<div>
				<StateList {...props} />
				<div>
					{props.editing
						? <InlineTimeEdit
								_handleBlur={props._onInlineTimeChange}
							/>
						: <NumberLine start={start} current={time} />}
					<Controls {...props} />
				</div>
				<Volume
					_setVolume={props._setVolume}
					disabled={!props.sound}
					value={props.volume}
				/>

				<Formats
					formats={props._getTimerFormats}
					format={props.format}
					_handleFormatClick={props._handleFormatClick}
				/>

				<Notifiers {...props} />
			</div>
		</Wrapper>
	)
}

export default Timer
