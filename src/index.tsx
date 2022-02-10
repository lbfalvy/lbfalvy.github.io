import ReactDOM from 'react-dom'
import React from 'react'
import './index.scss'
import { App } from './components/App'

document.body.onload = () => {
    const old = document.getElementById('root')
    if (old) ReactDOM.hydrate(<App />, old)
    else {
        const root = document.createElement('div')
        root.id='root'
        document.body.append(root)
        ReactDOM.render(<App />, root)
    }
}