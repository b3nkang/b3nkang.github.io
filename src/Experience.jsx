import { useEffect, useState } from "react"
import './App.css'

function Experience({nextSectionRef, color = {r:0,g:0,b:0,a:1.0,}}){
    const divStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    }

    const [refStyling, setRefStyling] = useState({})
    const [wave0Styling, setWave0Styling] = useState({})
    const [wave1Styling, setWave1Styling] = useState({})
    const [wave2Styling, setWave2Styling] = useState({})
    const [wave3Styling, setWave3Styling] = useState({})
    const [wave4Styling, setWave4Styling] = useState({})

    const waveSetStateArray = [setWave0Styling,setWave1Styling,setWave2Styling,setWave3Styling,setWave4Styling]

    useEffect(() => {
        function checkRefLocation() {
            if (nextSectionRef.current) {
                if (nextSectionRef.current.getBoundingClientRect().top < 0) {
                    setRefStyling({ 
                        // backgroundColor: 'rgba(255, 255, 255, 1.0)', 
                        backgroundColor: 'rgba(25,25,25,1.0)', 
                        // boxShadow: `0px 0px 0px 30px rgba(255, 255, 255, 1.0)`
                    });

                    /* refactor to use for loop */
                    setWave0Styling({ backgroundColor: 'rgba(47,47,47,1.0)' });
                    setWave1Styling({ backgroundColor: 'rgba(80,80,80,1.0)' });
                    setWave2Styling({ backgroundColor: 'rgba(120,120,120,1.0)' });
                    setWave3Styling({ backgroundColor: 'rgba(177,177,177,1.0)' });
                    setWave4Styling({ backgroundColor: 'rgba(255,255,255,1.0)' });
                    console.log("Set ref styling to grey");
                } else {
                    /* refactor to use for loop */
                    setRefStyling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
                    setWave0Styling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
                    setWave1Styling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
                    setWave2Styling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
                    setWave3Styling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
                    setWave4Styling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
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

    return(
        <div className="panelEd" style={divStyling}>
            <div className={`expPanel`} style={refStyling}>
                <div className="wave0" style={wave0Styling}>
                    <div className="wave1" style={wave1Styling}>
                        <div className="wave2" style={wave2Styling}>
                            <div className="wave3" style={wave3Styling}>
                                <div className="wave4" style={wave4Styling}>
                                    <h1>past experience</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;