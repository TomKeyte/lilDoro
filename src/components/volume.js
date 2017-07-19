import React from 'react'
import styled from 'styled-components'

const Slider = styled.span`
	width: 400px;
	display: block;
	margin: 0 auto;
	display: flex;
	align-items: center;

	label {
		display: block;
		line-height: 25px;
		font-size: 20px;
		margin-right: 20px;
		vertical-align: center;
	}
	input {
		display: block;
		height: 25px;
		background: none;
	}

	input[type=range] {
		height: 25px;
		-webkit-appearance: none;
		margin: 10px 0;
		width: 100%;
	}
	input[type=range]:focus {
		outline: none;
	}
	input[type=range]::-webkit-slider-runnable-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: cornflowerblue;
		border-radius: 1px;
		border: 0px solid #000000;
	}
	input[type=range]::-webkit-slider-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 1px solid cornflowerblue;
		height: 18px;
		width: 18px;
		border-radius: 25px;
		background: #fff;
		cursor: pointer;
		-webkit-appearance: none;
		margin-top: -7px;
	}
	input[type=range]:focus::-webkit-slider-runnable-track {
		background: cornflowerblue;
	}
	input[type=range]::-moz-range-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		animate: 0.2s;
		box-shadow: 0px 0px 0px #000000;
		background: cornflowerblue;
		border-radius: 1px;
		border: 0px solid #000000;
	}
	input[type=range]::-moz-range-thumb {
		box-shadow: 0px 0px 0px #000000;
		border: 1px solid cornflowerblue;
		height: 18px;
		width: 18px;
		border-radius: 25px;
		background: #fff;
		cursor: pointer;
	}
	input[type=range]::-ms-track {
		width: 100%;
		height: 5px;
		cursor: pointer;
		animate: 0.2s;
		background: transparent;
		border-color: transparent;
		color: transparent;
	}
	input[type=range]::-ms-fill-lower {
		background: cornflowerblue;
		border: 0px solid #000000;
		border-radius: 2px;
		box-shadow: 0px 0px 0px #000000;
	}
	input[type=range]::-ms-fill-upper {
		background: cornflowerblue;
		border: 0px solid #000000;
		border-radius: 2px;
		box-shadow: 0px 0px 0px #000000;
	}
	input[type=range]::-ms-thumb {
		margin-top: 1px;
		box-shadow: 0px 0px 0px #000000;
		border: 1px solid cornflowerblue;
		height: 18px;
		width: 18px;
		border-radius: 25px;
		background: #fff;
		cursor: pointer;
	}
	input[type=range]:focus::-ms-fill-lower {
		background: cornflowerblue;
	}
	input[type=range]:focus::-ms-fill-upper {
		background: cornflowerblue;
	}
`

const Volume = props => {
	return (
		<Slider>
			<label>Volume: </label>
			<input
				type="range"
				min="0"
				max="100"
				step="10"
				value={props.volume}
				onChange={props._setVolume}
				disabled={props.disabled}
			/>
		</Slider>
	)
}

export default Volume
