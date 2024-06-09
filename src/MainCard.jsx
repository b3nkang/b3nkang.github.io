import { useEffect, useState } from "react"
import './App.css'
import ExperienceItem from "./components/ExperienceItem"
import EducationItem from "./components/EducationItem"
import LanguageButton from "./components/LanguageButton"
import Skills from "./Skills"
import Education from "./Education"
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
                                <div className="wave4" style={{ marginTop: "20px", ...wave4Styling}}>
                                    <ExperienceItem
                                        imgSrc={"/src/assets/images/intus_care_logo.jpeg"} 
                                        alt={"Intus Care logo"}
                                        name="Intus Care"
                                        title="Software Engineering Intern"
                                        period="Jun. 2024 – Aug. 2024"
                                        location="Cambridge, MA"
                                        desc="Incoming for summer 2024, working on applications team with MongoDB, React, Zod (data validation), Zustand (state manager), and TypeScript. Developing tRPC protocol routes and data modelling for seeding MongoDB instances."
                                        iconStyling={iconStyling}
                                    />
                                    <ExperienceItem 
                                        imgSrc={"/src/assets/images/usereferme_logo.jpeg"} 
                                        alt={"Refer Me logo"}
                                        name="Refer Me"
                                        title="Software Engineering Intern"
                                        period="Feb. 2024 – Apr. 2024"
                                        location={`(Remote) Seattle, WA`}
                                        desc="Engineered job scraper with bs4/Selenium, utilizing instructor & Pydantic to extract JSON via OpenAI's API. Reduced scraper API costs by 10^3% ($0.01 to $0.0005/call) via chunking inputs and model downgrades while holding 98% accuracy."
                                        iconStyling={iconStyling}
                                    />
                                    <ExperienceItem 
                                        imgSrc={"/src/assets/images/letsift_logo.jpeg"} 
                                        alt={"Sift logo"}
                                        name="Sift"
                                        title="Software Engineering Intern"
                                        period="Nov. 2023 – Jan. 2024"
                                        location="Providence, RI"
                                        desc="Led homepage migration to React/TypeScript/Next.js stack, deprecating thousands of lines of code. Optimized site performance with React Lazy Load, Next.js Image and server-side rendering to achieve Lighthouse SEO score of 100."
                                        iconStyling={iconStyling}
                                    />
                                    <ExperienceItem
                                        imgSrc={"/src/assets/images/cims_logo.jpeg"} 
                                        alt={"NYU Courant logo"}
                                        name="AI & Predictive Analytics Lab"
                                        title="Visiting Researcher, NYU Courant"
                                        period="June 2023 – Oct. 2023"
                                        location="New York, NY"
                                        desc="Built world’s largest corpus of queryable LENR research on AI & Low-Energy Nuclear Reactions (AI-LENR) team. Co-authored paper in IEEE ICBDA 2024 and was main contributor to LENRdashboard.com, built with D3.js, JS, HTML/CSS."
                                        bottomPadding={0}
                                        mt={4.5}
                                        mb={0}
                                        iconStyling={iconStyling}
                                    />  
                                </div>
                            </WaveSquare>
                        </WaveSquare>
                    </WaveSquare>
                </WaveSquare>
            </WaveSquare>
        </WaveSquare>
    )
}

// export default Experience;