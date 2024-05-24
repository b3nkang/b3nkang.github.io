// import { useState } from 'react'
import './App.css'
import Education from './Education'
import Titlecard from './Titlecard'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import { transpWhite } from './utils/ColorProps'

function App() {
  return (
    <div className='overallContainer'>
      <Spacer height={50} color={transpWhite} />
      <BWGradient spacerHeight={5} indexMod={1} />
      <Education />
      <Education />
      <Education />
    </div>
  )
}

export default App
