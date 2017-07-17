import React, { Component } from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'


const Container = styled.div`
    position: relative;
    display: inline-block;
    margin-right: 10px;
    
    &:last-of-type {
        margin-right: 0;
    }
`

const Checkboxx = styled.input`
	position: absolute;
    top: 0;
	left: 0;
    width: 40px;
	height: 40px;

	cursor: pointer;
    opacity: 0;
    -webkit-appearance: none;
	display: inline-block;
	vertical-align: middle;
	z-index: 100;
    background: green;

    &:checked + label {
        color: #fff;
    }
`

const Label = styled.label`
    display: block;
	position: relative;
	font-size: 1em;
    line-height: 40px;
	padding: 0 0 0 50px;
	vertical-align: top;
	color: rgba(0,0,0,0.3);
	cursor: pointer;
	-webkit-transition: color 0.3s;
	transition: color 0.3s;

    &::before {
        // needs to match checkbox styles
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;

        cursor: pointer;
        content: '';
        border: 2px solid #fff;
        transition: opacity 0.3s;
    }
`

const SVG = styled.svg`
    position: absolute;
	width: 30px;
	height: 30px;
	top: 50%;
	left: 5px;
    transform: translateY(-50%);
	pointer-events: none;

    path {
        stroke: royalblue;
        stroke-width: 13px;
        stroke-linecap: round;
        stroke-linejoin: round;
        fill: none;
    }
`


class Checkbox extends Component {
    constructor (props) {
		super();
		this.state = {
            checked: null
        }

        this.draw = this.draw.bind(this)
	};


    draw(e) {
        let el = e ? e.target : document.getElementById(this.props.id)
        let parent = el.parentNode
        let svg = parent.querySelector( 'svg' );
        // let paths = [];
        const animDef = { speed : .2, easing : 'ease-in-out' };
        const checkmark = 'M16.667,62.167c3.109,5.55,7.217,10.591,10.926,15.75 c2.614,3.636,5.149,7.519,8.161,10.853c-0.046-0.051,1.959,2.414,2.692,2.343c0.895-0.088,6.958-8.511,6.014-7.3 c5.997-7.695,11.68-15.463,16.931-23.696c6.393-10.025,12.235-20.373,18.104-30.707C82.004,24.988,84.802,20.601,87,16';

        let path = document.createElementNS('http://www.w3.org/2000/svg', 'path' )
        svg.appendChild( path );
        path.setAttributeNS( null, 'd', checkmark );

        const length = path.getTotalLength();
        // Clear any previous transition
        //path.style.transition = path.style.WebkitTransition = path.style.MozTransition = 'none';
        // Set up the starting positions
        path.style.strokeDasharray = length + ' ' + length;
        path.style.strokeDashoffset = Math.floor( length ) - 1;

        // Trigger a layout so styles are calculated & the browser
        // picks up the starting position before animating
        path.getBoundingClientRect();
        // Define our transition
        path.style.transition = path.style.WebkitTransition = path.style.MozTransition  = 'stroke-dashoffset ' + animDef.speed + 's ' + animDef.easing + ' ' + 0 * animDef.speed + 's';
        // Go!
        path.style.strokeDashoffset = '0'; 
    }

    reset(e) {
        const el = e.target;
        const parent = el.parentNode;
        const path = parent.querySelector('svg > path');
        path.parentNode.removeChild(path);
    }

    handleClick(e) {
        let c = {
            id: e.target.name,
            checked: e.target.checked
        }
        if (this.state.checked) {
            this.reset(e)
        } else {
            this.draw(e)
        }
        this.setState({checked: !this.state.checked}, () => this.props.handleClick(c));
    }

    componentDidMount() {
        let checked = this.props.checked
        this.setState({
            checked
        })

        checked && this.draw()
    }

    render() {
        return (
            <Container>
                <Checkboxx
                    id={this.props.id}
                    name={this.props.name}
                    type="checkbox"
                    checked={this.state.checked}
                    onClick={this.handleClick.bind(this)} />

                <Label htmlFor={this.props.id} styleName="label">{this.props.label}</Label>
                <SVG styleName="svg" viewBox="0 0 100 100"></SVG>
            </Container>
        )
    }
}

Checkbox.PropTypes = {
    checked: PropTypes.bool,
    label: PropTypes.string,
    id: PropTypes.string.required
}

Checkbox.defaultProps = {
    checked: false
}


export default Checkbox