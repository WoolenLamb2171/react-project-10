import React from 'react'
import { render } from 'react-dom'
import Shop from './components/Shop'

function App() {
  return (
    <div>
      <Shop />
    </div>
  )
}

render(<App />, document.querySelector('#root'))
