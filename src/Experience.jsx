import { useEffect, useState } from "react"
import './App.css'
import ExperienceItem from "./components/ExperienceItem"
import EducationItem from "./components/EducationItem"
import LanguageButton from "./components/LanguageButton"

function Experience({nextSectionRef, color = {r:0,g:0,b:0,a:1.0,}}){
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

    return(
        <div className="panelEd" style={{ zIndex:"2000", ...divStyling}}>
            <div className={`expPanel`} style={refStyling}>
                <div className="wave0" style={wave0Styling}>
                    <div className="wave1" style={wave1Styling}>
                        <div className="wave2" style={wave2Styling}>
                            <div className="wave3" style={wave3Styling}>
                                <div style={{ display: "flex", justifyContent: "space-evenly", gap: "20px"}}>
                                    <div style={{ flexGrow: 1, flexBasis: "40%", display: "flex", flexDirection: 'column', justifyContent: "space-between" }}>
                                        <div>
                                            <div className="expCont"  style={{ display: "flex", justifyContent: "start", paddingLeft: "20px"}}><h2>education</h2></div>
                                            <div className="wave4" style={{ paddingTop: "2.15vw", ...wave4Styling}}>
                                                <EducationItem
                                                    imgSrc={"/src/assets/images/brown_university_logo.jpeg"}
                                                    alt={"Brown University logo"}
                                                    name="Brown University"
                                                    title="Sc.B. in Computer Science"
                                                    period="9/2023 - 5/2026"
                                                    location="GPA: 3.86"
                                                    iconStyling={iconStyling}
                                                    mt={0.93}
                                                    mb={3}
                                                />
                                                <EducationItem
                                                    imgSrc={"/src/assets/images/new_york_university_logo.jpeg"}
                                                    alt={"New York University logo"}
                                                    name="New York University"
                                                    title="Presidential Honors Scholar"
                                                    period="9/2022 - 5/2023"
                                                    location="GPA: 3.92"
                                                    bottomPadding={0}
                                                    mt={0.5}
                                                    mb={0}
                                                    iconStyling={iconStyling}
                                                />
                                            </div>
                                        </div>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "start",
                                            alignItems: "end",
                                        }}>
                                            <div className="expCont" style={{marginBottom: "-10px", paddingLeft: "20px"}}><h2>experience</h2></div>
                                        </div>
                                    </div>
                                    {/* <div style={{ flexGrow: 1, flexBasis: "60%"}}>
                                        <div className="expCont"  style={{ display: "flex", justifyContent: "start", paddingLeft: "20px"}}><h2>skills</h2></div>
                                        <div className="wave4" style={{ padding: "2.15vw", display: "flex", flexDirection: "column", flexGrow: 1, height: "auto", ...wave4Styling}}>  */} 
                                    <div style={{ flexGrow: 1, flexBasis: "60%", display: "flex", flexDirection: "column" }}>
                                        <div className="expCont"  style={{ display: "flex", justifyContent: "start", paddingLeft: "20px"}}><h2>skills</h2></div>
                                        <div className="wave4" style={{ padding: "2.15vw", display: "flex", flexDirection: "column", flexGrow: 1, ...wave4Styling}}> 

                                            <div style={{
                                                width: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "start",
                                                gap: "10px",
                                                marginBottom: "15px"
                                            }}>
                                                <div style={{
                                                    flexGrow: 1,
                                                    flexBasis: "30%",
                                                    fontFamily: "canela-dregular",
                                                    fontSize: "20px",
                                                    padding: "5px 5px 3px 0px",
                                                }}>
                                                    Languages:
                                                </div>
                                                <div style={{                                                 
                                                    width: "auto",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "start",
                                                    gap: "6px",
                                                    flexWrap: "wrap",
                                                    flexBasis: "70%"
                                                }}>
                                                    <LanguageButton text="Python" iconStyling={iconStyling} />
                                                    <LanguageButton text="Java" iconStyling={iconStyling} />
                                                    <LanguageButton text="JavaScript" iconStyling={iconStyling} />
                                                    <LanguageButton text="TypeScript" iconStyling={iconStyling} />
                                                    <LanguageButton text="HTML" iconStyling={iconStyling} />
                                                    <LanguageButton text="CSS" iconStyling={iconStyling} />
                                                </div>
                                            </div>
                                            <div style={{
                                                width: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "start",
                                                gap: "10px",
                                                marginBottom: "15px"
                                            }}>
                                                <div style={{
                                                    flexGrow: 1,
                                                    flexBasis: "30%",
                                                    fontFamily: "canela-dregular",
                                                    fontSize: "20px",
                                                    padding: "5px 5px 3px 0px",
                                                    lineHeight: 1
                                                }}>
                                                    Frameworks:
                                                </div>
                                                <div style={{                                                 
                                                    width: "auto",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "start",
                                                    gap: "6px",
                                                    flexWrap: "wrap",
                                                    flexBasis: "70%"
                                                }}>
                                                    <LanguageButton text="React" iconStyling={iconStyling} />
                                                    <LanguageButton text="Vite" iconStyling={iconStyling} />
                                                    <LanguageButton text="Next.js" iconStyling={iconStyling} />
                                                    <LanguageButton text="Tailwind" iconStyling={iconStyling} />
                                                    <LanguageButton text="Express.js" iconStyling={iconStyling} />
                                                    <LanguageButton text="Flask" iconStyling={iconStyling} />
                                                    <LanguageButton text="Selenium" iconStyling={iconStyling} />
                                                    <LanguageButton text="Pytest" iconStyling={iconStyling} />
                                                    <LanguageButton text="JUnit" iconStyling={iconStyling} />
                                                    <LanguageButton text="Playwright" iconStyling={iconStyling} />
                                                </div>
                                            </div>
                                            <div style={{
                                                width: "auto",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "center",
                                                alignItems: "start",
                                                gap: "10px",
                                            }}>
                                                <div style={{
                                                    flexGrow: 1,
                                                    flexBasis: "30%",
                                                    fontFamily: "canela-dregular",
                                                    fontSize: "20px",
                                                    padding: "5px 5px 3px 0px",
                                                    lineHeight: 1
                                                }}>
                                                    Dev Tools:
                                                </div>
                                                <div style={{                                                 
                                                    width: "auto",
                                                    display: "flex",
                                                    justifyContent: "start",
                                                    alignItems: "start",
                                                    gap: "6px",
                                                    flexWrap: "wrap",
                                                    flexBasis: "70%"
                                                }}>
                                                    <LanguageButton text="MongoDB" iconStyling={iconStyling} />
                                                    <LanguageButton text="Firestore" iconStyling={iconStyling} />
                                                    <LanguageButton text="GCP" iconStyling={iconStyling} />
                                                    <LanguageButton text="Zod" iconStyling={iconStyling} />
                                                    <LanguageButton text="Zustand" iconStyling={iconStyling} />
                                                    <LanguageButton text="tRPC" iconStyling={iconStyling} />
                                                    <LanguageButton text="Git" iconStyling={iconStyling} />
                                                    <LanguageButton text="VS Code" iconStyling={iconStyling} />
                                                    <LanguageButton text="IntelliJ" iconStyling={iconStyling} />                                                </div>
                                            </div>
                                        </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;