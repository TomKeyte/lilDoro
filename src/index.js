import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
