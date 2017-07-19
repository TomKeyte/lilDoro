import React from 'react'


export default class InlineTimeEdit extends React.Component {
    constructor() {
        super()
        this.state = {
            m: '00',
            s: '00',
            error: ''
        }
        this._handleChange   = this._handleChange.bind(this);
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