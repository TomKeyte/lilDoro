import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div `
    position: relative;
    display: inline-block;
`

const Indicator = styled.div `
    width: 0; 
    height: 0; 
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid royalblue;
    display: block;

    position: absolute;
    bottom: 0;
    left: 10%;
    transform: translateX(-50%);
`
export default class NumberLine extends React.Component {
    majorWidth = 4
    majorHeight = 50
    minorWidth = 4
    minorHeight = 30
    margin = 15
    cWidth = window.innerWidth > 500 ? 500 : window.innerWidth - 60
    cHeight = 110

    constructor(props) {
        super(props)
        this.state = {
            start: this.props.start,
            current: this.props.current
        }

        this.draw = this.draw.bind(this)
        this._handleResize = this._handleResize.bind(this)
    }

    draw() {
        let c = this.canvas.getContext('2d')
        
        let numMins = this.state.start / 60

        // clear and paint rect with bg color
        c.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.fillStyle = '#ef5f45'
        this.ctx.fillRect(0, 0, this.cWidth, this.cHeight)

        //y co-ord of top of ticks
        let majorTop = this.cHeight / 2 - this.majorHeight / 2
        let minorTop = this.cHeight / 2 + this.majorHeight / 2 - this.minorHeight

        // width of 1 minutes
        let minuteWidth = (this.majorWidth) + (4 * this.minorWidth) + (5 * this.margin)

        let startMins = this.state.start / 60
        let currentMins = this.state.current / 60
        let elapsedMins = startMins - currentMins
        let xStart = (this.cWidth / 10) - (numMins - elapsedMins) * minuteWidth / 5
        let x, i

        // i is minute number
        for (i = 0; i <= numMins; i++) {
            c.beginPath()
            if (i % 5 === 0) {
                let min = i / 5
                x = xStart + min * minuteWidth
                //only paint if within canvas
                if (x > 0 - this.majorWidth && x < this.cWidth + this.majorWidth) {
                    c.strokeStyle = '#fff'
                    c.fillStyle = '#fff'
                    c.lineWidth = this.majorWidth
                    c.moveTo(x, majorTop)
                    c.lineTo(x, majorTop + this.majorHeight)
                    let adj = c.measureText(i).width / 2
                    c.fillText(i, xStart + min * minuteWidth - adj + 0.5, majorTop + this.majorHeight + 15)
                }
            } else {
                x = xStart + i * minuteWidth / 5
                if (x > 0 - this.minorWidth && x < this.cWidth + this.minorWidth) {
                    c.strokeStyle = '#444'
                    c.lineWidth = this.minorWidth
                    c.moveTo(x, minorTop)
                    c.lineTo(x, minorTop + this.minorHeight)
                }
            }
            c.stroke()
            // console.log(x)
        }

        //while x < this.cWidth, keep drawing ticks
        let j = i
        while (x < this.cWidth) {
            c.beginPath()
            if (j % 5 === 0) {
                let min = j / 5
                x = xStart + min * minuteWidth

                c.strokeStyle = '#fff'
                c.fillStyle = '#fff'
                c.lineWidth = this.majorWidth
                c.moveTo(x, majorTop)
                c.lineTo(x, majorTop + this.majorHeight)
                let adj = c.measureText(i).width / 2
                c.fillText(j, xStart + min * minuteWidth - adj + 0.5, majorTop + this.majorHeight + 15)
            } else {
                x = xStart + j * minuteWidth/5
                if (x > 0 - this.minorWidth && x < this.cWidth + this.minorWidth) {
                    c.strokeStyle = '#444'
                    c.lineWidth = this.minorWidth
                    c.moveTo(x, minorTop)
                    c.lineTo(x, minorTop + this.minorHeight)
                }
            }
            c.stroke()
            j++
        }
    }
    _handleResize() {
        if (window.innerWidth < 500) {
            this.cWidth = window.innerWidth - 60;
        } else {
            this.cWidth = 500;
        }
        this.canvas.width = this.cWidth
        // console.log(this.cWidth)
        this.draw();
    }

    componentDidMount() {
        this.canvas = document.getElementById('js-timer-canvas')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.width = this.cWidth
        this.canvas.height = this.cHeight
        this.ctx.font = '10pt helvetica'
        this.draw()

        window.addEventListener('resize', this._handleResize)
    }

    componentDidUpdate(pp) {
        if (pp !== this.props) {
            this.setState({
                start: this.props.start,
                current: this.props.current
            }, this.draw)
        }
    }

    render() {
        return (
            <Wrapper >
                <canvas id='js-timer-canvas'></canvas>
                <Indicator/>
            </Wrapper>
        )
    }
}