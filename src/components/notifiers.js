import React from 'react'

import Checkbox from './checkbox'

const Notifiers = props => {
	return (
		<div>
			<Checkbox
				id="chk-notify"
				name="notification"
				label="Notification"
				checked={props.notification}
				handleClick={props._handleNotifierClick}
			/>
			<Checkbox
				id="chk-sound"
				name="sound"
				label="Play sound"
				checked={props.sound}
				handleClick={props._handleNotifierClick}
			/>
			<Checkbox
				id="chk-vibrate"
				name="vibrate"
				label="vibrate"
				checked={props.vibrate}
				handleClick={props._handleNotifierClick}
			/>
		</div>
	)
}

export default Notifiers
