import { useEffect, useState } from "react"
import './App.css'

function Experience({nextSectionRef, color = {r:0,g:0,b:0,a:1.0,}}){
    const divStyling = {
        backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})`,
    }

    const [refStyling, setRefStyling] = useState({})

    useEffect(() => {
        function checkRefLocation() {
            if (nextSectionRef.current) {
                if (nextSectionRef.current.getBoundingClientRect().top < 0) {
                    setRefStyling({ 
                        backgroundColor: 'rgba(255, 255, 255, 1.0)', 
                        boxShadow: `0px 0px 0px 30px rgba(255, 255, 255, 1.0)`
                    });
                    console.log("Set ref styling to grey");
                } else {
                    setRefStyling({ backgroundColor: `rgba(${color.r},${color.g},${color.b},${color.a})` });
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
                <h1>past experience</h1>
            </div>
        </div>
    )
}

export default Experience;