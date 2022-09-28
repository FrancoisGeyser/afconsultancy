import React from 'react'
import ReactDOM from 'react-dom'

// Import root app
import App from './app'

const MOUNT_NODE = document.querySelector('#app')

ReactDOM.render(<App />, MOUNT_NODE)
