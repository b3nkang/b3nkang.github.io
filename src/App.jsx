import { useRef } from 'react'
import './App.css'
import Education from './Education'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import { transpWhite } from './utils/ColorProps'
import BWGradientWave from './components/BWGradientWave'
import Experience from './Experience'

function App({ titlecardSpacerHeight }) {

  const waveEndRef = useRef(null)

  return (
    <div className='overallContainer'>
      <Spacer height={titlecardSpacerHeight + 40} color={transpWhite} zindex={998} />
      {/* <BWGradient spacerHeight={5} indexMod={1} /> */}
      <BWGradientWave nextSectionRef={waveEndRef} spacerHeight={462} indexMod={1} />
      <Experience nextSectionRef={waveEndRef} />
      <Education />
      <Education />
    </div>
  )
}

export default App;
