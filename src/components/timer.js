import React from 'react'

import NumberLine from './NumberLine'
import InlineTimeEdit from './InlineTimeEdit'
import Checkbox from './checkbox'

import StateList from './stateList'

const Timer = (props) => {
    const {time, start} = props

    const renderLabels = () => {
        const timeFormats = props._getTimerFormats()
        return timeFormats.map((t, i) => {
            let style = t.name === props.format ? 'format active-format' : 'format'
            return <li key={i}
                    className={style} 
                    onClick={props._handleFormatClick} 
                    >{t.name}</li>
        })
    }
    return (
        <div>
            <StateList {...props} />

            <h1><em>lil</em>'Doro Timer</h1>
            <div className='timer'>
                <div className='time'>
                    {props.editing ?
                        <InlineTimeEdit _handleBlur={props._onInlineTimeChange}/>
                        :<NumberLine start={start} current={time} />
                    }
                </div>
                <div className="buttons">
                    <button onClick={props._handlePlay}>
                        {!props.play ? 'Play' : '||'}
                    </button>
                    <button onClick={props._handleReset}>Reset</button>
                </div>

            </div>
            <div>
                <label>Volume: </label>
            <input type='range'
                min='0' max='100' step="10"
                value={props.volume} onChange={props._setVolume} disabled={!props.sound} />

            </div>

            <ul>{renderLabels()}</ul>

            <div>
                <Checkbox id='chk-notify' name='notification' label='Notification' checked={props.notification} handleClick={props._handleNotifierClick}/>
                <Checkbox id='chk-sound' name='sound' label='Play sound' checked={props.sound}  handleClick={props._handleNotifierClick}/>
                <Checkbox id='chk-vibrate' name='vibrate' label='vibrate' checked={props.vibrate}  handleClick={props._handleNotifierClick}/>
            </div>
        </div>
    )
}


export default Timer