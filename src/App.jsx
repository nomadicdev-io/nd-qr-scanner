import { useState } from 'react'
import './App.scss'
import UIHeader from './components/UIHeader'
import UIScanArea from './components/UIScanArea'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <UIHeader />
      <UIScanArea />
    </div>
  )
}

export default App
