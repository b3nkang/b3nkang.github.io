// import { useState } from 'react'
import './App.css'
import Education from './Education'
import Titlecard from './Titlecard'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import { transpWhite } from './utils/ColorProps'
import WavySpacer from './components/WavySpacer'
import { bwgrad1, bwgrad20 } from './utils/ColorProps'
function App() {
  return (
    <div className='overallContainer'>
      <Spacer height={50} color={transpWhite} />
      <BWGradient spacerHeight={5} indexMod={1} />
      {/* <WavySpacer color={bwgrad20} height={-10}/>
      <Spacer color={bwgrad20} height={5} /> */}
      <Education />
      <Education />
      <Education />
    </div>
  )
}

export default App
