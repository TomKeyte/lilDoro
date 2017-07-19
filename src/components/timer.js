import React from 'react'
import styled from 'styled-components'
import NumberLine from './NumberLine'
import InlineTimeEdit from './InlineTimeEdit'
import Checkbox from './checkbox'
import StateList from './stateList'

import playIcon from '../images/play.svg'
import pauseIcon from '../images/pause.svg'
import restartIcon from '../images/restart.svg'

import Volume from './volume';

const Button = styled.span`
    min-width: 60px;
    height: 60px;
    background: royalblue;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    padding: 10px;
    

    &:first-of-type {
        margin-right: 30px;
    }

    span {
        display: block;
        background-image: url(${props => props.icon && props.icon});
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 100%;


        &:hover {
            transform: scale(1.1);
            transition: transform 0.3s;
        }
    }
`

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
                    <Button onClick={props._handlePlay} icon={!props.play ? playIcon : pauseIcon}><span/></Button>
                    <Button onClick={props._handleReset} icon={restartIcon}><span /></Button>
                </div>

            </div>
            <Volume _setVolume={props._setVolume} disabled={!props.sound} value={props.volume}/>

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