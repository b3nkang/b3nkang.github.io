import { useEffect, useState } from "react"
import './App.css'
import Education from "./Education"
import Experience from "./Experience"
import Skills from "./Skills"
import WaveSquare from "./components/WaveSquare"
import HeaderTypography from "./components/HeaderTypography"
import Flexbox from "./components/Flexbox"
import Projects from "./Projects"
import Volunteering from "./Volunteering"

export default function MainCard({nextSectionRef, color = {r:0,g:0,b:0,a:1.0,}}){
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
        { backgroundColor: 'rgba(32,40,47,1.0)' },
        { backgroundColor: 'rgba(65,73,80,1.0)' },
        { backgroundColor: 'rgba(105,113,120,1.0)' }, 
        { backgroundColor: 'rgba(190,198,205,1.0)' },
        { backgroundColor: 'rgba(230,238,245,1.0)' }
    ];

    useEffect(() => {
        function checkRefLocation() {
            if (nextSectionRef.current) {
                if (nextSectionRef.current.getBoundingClientRect().top < 0) {
                    setRefStyling({ 
                        backgroundColor: 'rgba(17,25,32,1.0)', 
                        // backgroundColor: 'rgba(25,25,25,1.0)', 
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
            <WaveSquare waveClass="expPanel cardBounder" waveStyle={refStyling}>
                <WaveSquare waveClass="wave0" waveStyle={wave0Styling}>
                    <WaveSquare waveClass="wave1" waveStyle={wave1Styling}>
                        <WaveSquare waveClass="wave2" waveStyle={wave2Styling}>
                            <WaveSquare waveClass="wave3" waveStyle={wave3Styling}>
                                <div className="expCont" style={{marginBottom:"15px"}}><h2>past experience</h2></div>
                                <Experience iconStyling={iconStyling} waveStyling={wave4Styling} />
                                <Flexbox
                                    fD="row"
                                    justifyContent="space-evenly"
                                    gap={20}
                                    pt={35}
                                    mediaClass="eduSkillsScreen"
                                >
                                    <Flexbox fG={1} fB={61} fD="column" justifyContent="space-between">
                                        <div>
                                            <HeaderTypography headerClass="expCont" pl="2vw" mb={10}>
                                                education
                                            </HeaderTypography>
                                            <Education iconStyling={iconStyling} waveStyling={wave4Styling} />
                                        </div>
                                        <Flexbox justifyContent="start" alignItems="start">
                                            <div style={{height: "90px"}}></div>
                                        </Flexbox>
                                    </Flexbox>
                                    <Flexbox fG={1} fB={39} fD="column" mediaClass="skillsScreen">
                                        <HeaderTypography headerClass="expCont" pl="1.8vw" mb={5}>
                                            skills
                                        </HeaderTypography>
                                        <Skills iconStyling={iconStyling} waveStyling={wave4Styling} />
                                    </Flexbox>
                                </Flexbox>
                                <Projects iconStyling={iconStyling} waveStyling={wave4Styling} />
                                <Volunteering iconStyling={iconStyling} waveStyling={wave4Styling} />
                            </WaveSquare>
                        </WaveSquare>
                    </WaveSquare>
                </WaveSquare>
            </WaveSquare>
        </WaveSquare>
    )
}