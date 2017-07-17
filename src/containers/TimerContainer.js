import React, {Component} from 'react'

import Timer from '../components/timer'


export default class TimerContainer extends Component {

    constructor() {
        super()
        this.state = {
            start: 0,
            time: 0,
            play: false,
            volume: 100,
            vibrate: false,
            sound: true,
            notification: true,
            format: 'Pomodoro',
            editing: false
        }
        this._handlePlay    = this._handlePlay.bind(this)
        this._handleReset   = this._handleReset.bind(this)
        this.setDefaultTime = this.setDefaultTime.bind(this)
        this.tick           = this.tick.bind(this)
        this.stop           = this.stop.bind(this)
        this._handleFormatClick = this._handleFormatClick.bind(this)
        this._onInlineTimeChange = this._onInlineTimeChange.bind(this)
        this._setVolume     = this._setVolume.bind(this)
        this._handleNotifierClick = this._handleNotifierClick.bind(this)
    }

    _getTimerFormats() {
        return [
            {name: 'Pomodoro', time: 1500},
            {name: 'Break', time: 300},
            {name: 'Custom', time: 0}
        ]
    }

    _handlePlay() {
        let play = !this.state.play
        this.setState({
            play,
            editing: false
        })
        play && !this.interval &&
            (this.interval = setInterval(this.tick, 1000))
    }

    _handleReset() {
        let start = this.state.start
        this.setState({
            time: start,
            play: false
        })
    }

    _handleFormatClick(e) {
        let target = e.target.innerText
        let clicked = this._getTimerFormats().filter(t => {
            return target === t.name
        })
        clicked.length === 1 &&
            (this.setState({
                play: false,
                format: clicked[0].name,
                start: clicked[0].time,
                time: clicked[0].time,
                editing: clicked[0].name === 'Custom'
            }))
    }

    setDefaultTime() {
        const start = 1500
        const time = 1500
        this.setState({time, start})
    }

    _onInlineTimeChange(t) {
        this.setState({start: t, time: t})
    }

    tick() {
        if (this.state.time === 0 && this.state.start !== 0) {
            this.alert()
            this.setState({play: false})
            this.stop()
        }
        if (this.state.play) {
            let time = this.state.time - 1
            this.setState({time})
        }
    }

    stop() {
        clearInterval(this.interval)
        this.interval = null;
    }

    playSound() {
        let audio = new Audio('../../sound/ring.mp3')
        audio.volume = this.state.volume / 100
        audio.play()
        setTimeout(()=> audio.pause(), 4000)
    }

    notify() {
        switch (this.state.format) {
            case 'Pomodoro':
                new Notification("Relax :)", {
                icon: "../../images/tomato.png",
                lang: "en",
                body: "Get up, have a break."
                })
                break
            case 'Break':
                new Notification("Back to work", {
                icon: "../../images/tomato.png",
                lang: "en",
                body: "Break over, time to work again"
                })
                break
            default:
                new Notification("Timer finished", {
                    icon: "../../images/tomato.png",
                    lang: "en",
                    body: "Time up, buddy!"
                })
        }
    }

    _setVolume(e) {
        this.setState({volume: e.target.value})
    }

    alert() {
        this.state.vibrate && window.navigator.vibrate(1000)
        this.state.sound && this.playSound()
        this.state.notification && this.notify()
    }

    _handleNotifierClick(c) {
        const {id, checked } = c
        this.setState({[id]: checked})
    }

    componentDidMount() {
        Notification.requestPermission()
        this.setDefaultTime()
    }

    componentWillUnmount() {
        this.stop()
    }

    render() {
        return <Timer {...this.state}
                _handlePlay={this._handlePlay}
                _handleReset={this._handleReset}
                _getTimerFormats={this._getTimerFormats}
                _handleFormatClick={this._handleFormatClick}
                _onInlineTimeChange={this._onInlineTimeChange}
                _setVolume={this._setVolume}
                format={this.state.format}
                _handleNotifierClick={this._handleNotifierClick}
            />
    }
}