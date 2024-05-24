// import { useState } from 'react'
import './App.css'
import Education from './Education'
import Titlecard from './Titlecard'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import { transpWhite } from './utils/ColorProps'
import WavySpacer from './components/Wave'
import { bwgrad1, bwgrad20 } from './utils/ColorProps'
import BWGradientWave from './components/BWGradientWave'

function App() {
  return (
    <div className='overallContainer'>
      <Spacer height={30} color={transpWhite} />
      {/* <BWGradient spacerHeight={5} indexMod={1} /> */}
      <BWGradientWave spacerHeight={500} indexMod={2} />
      {/* <WavySpacer color={bwgrad20} height={-10}/>
      <Spacer color={bwgrad20} height={5} /> */}
      <Education />
      <Education />
      <Education />
    </div>
  )
}

export default App
