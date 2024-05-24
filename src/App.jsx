// import { useState } from 'react'
import './App.css'
import Education from './Education'
import Titlecard from './Titlecard'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import { transpWhite } from './utils/ColorProps'
import WavySpacer from './components/Wave'
import BWGradientWave from './components/BWGradientWave'

function App() {
  return (
    <div className='overallContainer'>
      <Spacer height={30} color={transpWhite} zindex={998} />
      {/* <BWGradient spacerHeight={5} indexMod={1} /> */}
      <BWGradientWave spacerHeight={462} indexMod={1} />
      <Education />
      <Education />
      <Education />
    </div>
  )
}

export default App
