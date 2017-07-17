import React from 'react'


export default class InlineTimeEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            m: '00',
            s: '00',
            error: ''
        }

        this.validateMinutes = this.validateMinutes.bind(this)
        this.validateSeconds = this.validateSeconds.bind(this)
        this._handleChange   = this._handleChange.bind(this);
    }

    validateMinutes(e) {
        let val = e.target.value
        if (!isNaN(parseInt(val, 10)) && typeof parseInt(val, 10) === 'number') {
            this.setState({
                error: '',
                m: val
            })
        } else if(val === '') {
            this.setState({
                error: '',
                m: val
            })
        } else {
            this.setState({
                error: 'Please enter a valid number of minutes',
                m: '00'
            })
            e.stopPropagation()
        }
    }

    validateSeconds(e) {
        let val = e.target.value
        if (!isNaN(parseInt(val, 10)) && typeof parseInt(val, 10) === 'number' && val < 60 && val > 0) {
            this.setState({
                error: '',
                s: val
            })
        } else {
            this.setState({
                error: 'Please enter a valid number of seconds',
                s: '00'
            })
            e.stopPropagation()
        }
    }

    _handleChange(e) {
        this.setState(
            {[e.target.name]: e.target.value},
            () => {
                const t = parseInt(this.state.m, 10) * 60 + parseInt(this.state.s, 10)
                t && this.props._handleBlur(t)
            }
        )
    }

    render() {
        return (
            <span className='inline-timer'>
                <input className='minutes'
                        name='m'
                        type='number'
                        value={this.state.m}
                        onChange={this._handleChange}
                        maxLength={3}/>
                <span className='time-seperator'> : </span>
                <input  className='seconds'
                    type='number'
                    name='s'
                    value={this.state.s}
                    onChange={this._handleChange}
                    maxLength={2}
                    max={59} />
                {this.state.error && 
                    <span className='timer-error'>{this.state.error}</span>}  
            </span>
        )
    }
}