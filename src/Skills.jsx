import LanguageButton from "./components/LanguageButton"
import './App.css'

export default function Skills({ iconStyling, waveStyling}) {
    return (
        <div className="wave4" style={{ padding: "1.7vw 2.15vw 2.15vw 2.15vw", display: "flex", flexDirection: "column", flexGrow: 1, ...waveStyling}}> 
            <div style={{
                width: "auto",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "start",
                gap: "10px",
                marginBottom: "19px"
            }}>
                <div style={{
                    flexGrow: 1,
                    flexBasis: "30%",
                    fontFamily: "canela-dregular",
                    fontSize: "20px",
                    padding: "5px 5px 0px 0px",
                    marginBottom: "-2px"
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
                marginBottom: "20px"
            }}>
                <div style={{
                    flexGrow: 1,
                    flexBasis: "30%",
                    fontFamily: "canela-dregular",
                    fontSize: "20px",
                    padding: "5px 5px 2px 0px",
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
                    padding: "5px 5px 2px 0px",
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
                    <LanguageButton text="IntelliJ" iconStyling={iconStyling} />                                                
                </div>
            </div>
        </div>

    )
}