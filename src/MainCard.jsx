import { useEffect, useState } from "react"
import './App.css'
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import WaveSquare from "./components/WaveSquare"

export default function MainCard({nextSectionRef, color = {r:0,g:0,b:0,a:1.0,}}){
    // const divStyling = {
    //     backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    // }
    const [divStyling, setDivStyling] = useState({ 
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
        position: `relative`
    })

    const [refStyling, setRefStyling] = useState({})
    const [wave0Styling, setWave0Styling] = useState({})
    const [wave1Styling, setWave1Styling] = useState({})
    const [wave2Styling, setWave2Styling] = useState({})
    const [wave3Styling, setWave3Styling] = useState({})
    const [wave4Styling, setWave4Styling] = useState({})
    const [iconStyling, setIconStyling] = useState({ opacity: 0 })
    const waveSetStateArray = [setWave0Styling,setWave1Styling,setWave2Styling,setWave3Styling,setWave4Styling]
    const expWaveColorArray = [
        { backgroundColor: 'rgba(47,47,47,1.0)' },
        { backgroundColor: 'rgba(80,80,80,1.0)' },
        { backgroundColor: 'rgba(120,120,120,1.0)' },
        { backgroundColor: 'rgba(205,205,205,1.0)' },
        { backgroundColor: 'rgba(240,240,240,1.0)' }
    ]

    useEffect(() => {
        function checkRefLocation() {
            if (nextSectionRef.current) {
                if (nextSectionRef.current.getBoundingClientRect().top < 0) {
                    setRefStyling({ 
                        backgroundColor: 'rgba(25,25,25,1.0)', 
                    });
                                        
                    setDivStyling({        
                        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
                    })

                    setIconStyling({ 
                        opacity: 1, 
                    })

                    for (let i = 0; i < 5; i++) {
                        waveSetStateArray[i](expWaveColorArray[i])
                    }

                    console.log("Set ref styling to grey");
                } else {
                    setRefStyling({ 
                        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`
                    });

                    waveSetStateArray.forEach((setter) => {
                        setter({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` })
                    })

                    setIconStyling({
                        opacity: 0, 
                    })
                    
                    console.log("Reset ref styling to original color");
                }
            } else {
                console.log("nextSectionRef.current is null");
            }
        }
        window.addEventListener('scroll', checkRefLocation)
        checkRefLocation();

        return () => {
            window.removeEventListener("scroll", checkRefLocation);
        };
    }, [])

    const waveClassArray = ["wave0", "wave1", "wave2", "wave3"]
    const waveStyleArray = [wave0Styling, wave1Styling, wave2Styling, wave3Styling]

    return(
        <WaveSquare waveClass="panelEd" waveStyle={{ zIndex:"2000", ...divStyling}}>
            <WaveSquare waveClass="expPanel" waveStyle={refStyling}>
                <WaveSquare waveClass="wave0" waveStyle={wave0Styling}>
                    <WaveSquare waveClass="wave1" waveStyle={wave1Styling}>
                        <WaveSquare waveClass="wave2" waveStyle={wave2Styling}>
                            <WaveSquare waveClass="wave3" waveStyle={wave3Styling}>
                                <div style={{ display: "flex", justifyContent: "space-evenly", gap: "20px", paddingTop: "10px"}}>
                                    <div style={{ flexGrow: 1, flexBasis: "50%", display: "flex", flexDirection: 'column', justifyContent: "space-between" }}>
                                        <div>
                                            <div className="expCont"  style={{ display: "flex", justifyContent: "start", paddingLeft: "15px"}}><h2>education</h2></div>
                                            <Education iconStyling={iconStyling} waveStyling={wave4Styling} />
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "end",
                                        }}>
                                            <div className="expCont" style={{marginBottom: "-10px", paddingLeft: "15px"}}><h2>experience</h2></div>
                                        </div>
                                    </div>
                                    <div style={{ flexGrow: 1, flexBasis: "50%", display: "flex", flexDirection: "column" }}>
                                        <div className="expCont"  style={{ display: "flex", justifyContent: "start", paddingLeft: "10px"}}><h2>skills</h2></div>
                                        <Skills iconStyling={iconStyling} waveStyling={wave4Styling} />
                                    </div>
                                </div>
                                {/* <div className="expCont"><h2>past experience</h2></div> */}
                                <Experience iconStyling={iconStyling} waveStyling={wave4Styling} />
                            </WaveSquare>
                        </WaveSquare>
                    </WaveSquare>
                </WaveSquare>
            </WaveSquare>
        </WaveSquare>
    )
}

// export default Experience;