import ReactDOM from 'react-dom'
import React from 'react'
import './index.scss'
import { App } from './components/App'

function getRoot() {
    const old = document.getElementById('root')
    if (old) return old
    const root = document.createElement('div')
    root.id='root'
    document.body.append(root)
    return root
}

ReactDOM.render(<App />, getRoot())