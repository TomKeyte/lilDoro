import React from 'react'
import styled from 'styled-components'

const Inline = styled.span`
	position: relative;
	display: inline-block;
	height: 114px;

	span,
	input {
		height: 114px;
	}
	span {
		font-size: 5ch;
	}

	input {
		color: white;
		background: none;
		outline: none;
		border: none;
		font-size: 60px;
		width: 100px;
		text-align: center;
	}
`

export default class InlineTimeEdit extends React.Component {
	constructor() {
		super()
		this.state = {
			m: '00',
			s: '00'
		}
		this._handleChange = this._handleChange.bind(this)
	}

	_handleChange(e) {
		this.setState({ [e.target.name]: e.target.value }, () => {
			const t =
				parseInt(this.state.m, 10) * 60 + parseInt(this.state.s, 10)
			t && this.props._handleBlur(t)
		})
	}

	render() {
		return (
			<Inline>
				<input
					name="m"
					type="number"
					value={this.state.m}
					onChange={this._handleChange}
					min={0}
					maxLength={3}
				/>
				<span> : </span>
				<input
					name="s"
					type="number"
					value={this.state.s}
					onChange={this._handleChange}
					maxLength={2}
					min={0}
					max={59}
				/>
			</Inline>
		)
	}
}
