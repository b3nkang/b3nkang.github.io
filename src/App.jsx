import { useState, useRef, useEffect } from 'react'
import './App.css'
import Education from './Education'
import Spacer from './components/Spacer'
import BWGradient from './components/BWGradient'
import BWGradientWave from './components/BWGradientWave'
import Experience from './Experience'
import { red, green, transpWhite, bwgrad1, bwgrad2, bwgrad3, bwgrad4, bwgrad5, bwgrad6, bwgrad7, bwgrad8, bwgrad9, bwgrad10, bwgrad11, bwgrad12, bwgrad13, bwgrad14, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20 } from './utils/ColorProps';

function App({ titlecardSpacerHeight }) {

  const waveEndRef = useRef(null)
  const [windowHeight, setWindowHeight] = useState(`${titlecardSpacerHeight + 40}px`)

  useEffect(() => {
    const vhInPx = window.innerHeight * 0.3;
    if (vhInPx >= (titlecardSpacerHeight+40)) {
      setWindowHeight(`${vhInPx}px`)
    } else if ((titlecardSpacerHeight+40) > vhInPx) {
      setWindowHeight(`${(titlecardSpacerHeight+40)}px`)
    }
  }, [titlecardSpacerHeight]);


  return (
    <div className='overallContainer'>
      <Spacer height={windowHeight} color={transpWhite} zindex={998} />
      {/* <BWGradient spacerHeight={5} indexMod={1} /> */}
      <BWGradientWave nextSectionRef={waveEndRef} spacerHeight={462} indexMod={1} />
      <Spacer height={"0vh"} color={bwgrad20} zindex={1002} />
      <Experience nextSectionRef={waveEndRef} />
      <div style={{
        // height: "100%",
        // width: "100%",
        transform: "rotate(180deg)",
        transformOrigin: "center center",
        // zIndex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: 'relative',
        marginTop: '-15vh'
        // overflow: "hidden"
      }}>
        <BWGradientWave
          spacerHeight={462}
          indexMod={1}
          colorArray={[bwgrad2, bwgrad3, bwgrad5, bwgrad7, bwgrad9, bwgrad11, bwgrad13, bwgrad15, bwgrad16, bwgrad17, bwgrad18, bwgrad19, bwgrad20, bwgrad20, bwgrad20, bwgrad20, bwgrad20, bwgrad20, bwgrad20] }
          svgPath="M -448 320 C -347.6667 314 -320 308 -270 285 C -232 268 -195 234 -158 181 C -74 47 -48 43 0 96 L 30 128 C 60 160 120 224 180 218.7 C 240 213 300 139 360 112 C 420 85 480 107 540 122.7 C 600 139 660 149 720 138.7 C 780 128 840 96 900 90.7 C 960 85 1020 107 1080 133.3 C 1140 160 1200 192 1260 181.3 C 1320 171 1380 117 1410 90.7 L 1440 64 C 1465 40 1488 44 1517 113 L 1521 124 C 1574 260 1665 320 1783 320 L 1410 320 C 1380 320 1320 320 1260 320 C 1200 320 1140 320 1080 320 C 1020 320 960 320 900 320 C 840 320 780 320 720 320 C 660 320 600 320 540 320 C 480 320 420 320 360 320 C 300 320 240 320 180 320 C 120 320 60 320 30 320 L 0 320 Z"
          spacerWaveClassMinHeight={0}
        />
      </div>
      <Spacer color={green} height="40vh" marginTop={-30} />
    </div>
  )
}

export default App;
