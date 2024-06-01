import { useRef } from 'react'
import './App.css'
import Education from './Education'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import BWGradientWave from './components/BWGradientWave'
import Experience from './Experience'
import { transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from './utils/ColorProps';

function App({ titlecardSpacerHeight }) {

  const waveEndRef = useRef(null)

  return (
    <div className='overallContainer'>
      <Spacer height={`${titlecardSpacerHeight + 40}px`} color={transpWhite} zindex={998} />
      {/* <BWGradient spacerHeight={5} indexMod={1} /> */}
      <BWGradientWave nextSectionRef={waveEndRef} spacerHeight={462} indexMod={1} />
      {/* <BWGradientWave 
        spacerHeight={462} 
        indexMod={1} 
        colorArray={[bwgrad20, bwgrad19, bwgrad18, bwgrad17, bwgrad16, bwgrad15, bwgrad13, bwgrad11, bwgrad10, bwgrad9, bwgrad7, bwgrad5, bwgrad3]} 
        // svgPath={"M0,224L26.7,202.7C53.3,181,107,139,160,144C213.3,149,267,203,320,218.7C373.3,235,427,213,480,186.7C533.3,160,587,128,640,106.7C693.3,85,747,75,800,90.7C853.3,107,907,149,960,176C1013.3,203,1067,213,1120,186.7C1173.3,160,1227,96,1280,80C1333.3,64,1387,96,1413,112L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"}
        // svgPath="M0,64L30,101.3C60,139,120,213,180,213.3C240,213,300,139,360,144C420,149,480,235,540,229.3C600,224,660,128,720,117.3C780,107,840,181,900,213.3C960,245,1020,235,1080,218.7C1140,203,1200,181,1260,160C1320,139,1380,117,1410,106.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
        svgPath="M0,96L30,128C60,160,120,224,180,218.7C240,213,300,139,360,112C420,85,480,107,540,122.7C600,139,660,149,720,138.7C780,128,840,96,900,90.7C960,85,1020,107,1080,133.3C1140,160,1200,192,1260,181.3C1320,171,1380,117,1410,90.7L1440,64L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
      /> */}
      <Spacer height={"10vh"} color={bwgrad20} zindex={1002} />
      <Experience nextSectionRef={waveEndRef} />
    </div>
  )
}

export default App;
