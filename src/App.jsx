// import { useState } from 'react'
import './App.css'
import Education from './Education'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import { transpWhite } from './utils/ColorProps'
import BWGradientWave from './components/BWGradientWave'

function App({ titlecardSpacerHeight }) {
  return (
    <div className='overallContainer'>
      <Spacer height={titlecardSpacerHeight + 40} color={transpWhite} zindex={998} />
      {/* <BWGradient spacerHeight={5} indexMod={1} /> */}
      <BWGradientWave spacerHeight={462} indexMod={1} />
      <Education />
      <Education />
      <Education />
    </div>
  )
}

export default App;
