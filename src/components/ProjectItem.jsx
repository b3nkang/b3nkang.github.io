import { useState } from 'react'
import './Components.css'
import LanguageButton from './LanguageButton'

export default function ProjectItem({
    iconStyling, 
    title, 
    bottomPadding=1, 
    mb=3.5, 
    mt=3,
    fB=30,
    skillsArray,
    url,
    children
}) {

    const [hoverBool, setHoverBool] = useState(false)

    const handleHoverIn = () => {
        setHoverBool(true)
    }

    const handleHoverOut = () => {
        setHoverBool(false)
    }

    return (
    <div>
        <div style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "4px",
        }}>
            <div className="projectButtonsScreen" style={{
                display: "flex",
                gap: `20px`,
                justifyContent: "left",
                alignItems: "start",
                flexDirection: "row",
                flexGrow: 1
            }}>
                <div className="expItemTitle projectButtonStyleScreen" style={{ marginTop: "4px", flexBasis: `${fB}%` }}>
                    <h4 style={{
                        lineHeight: 0.9,
                        marginBottom: `2px`,
                        fontFamily: 'canela-dregular',
                        fontSize: '26px',
                        padding: 0,
                        marginTop: "5px",
                    }}>
                        {title}
                    </h4>
                </div>
                <div style={{                                                 
                    width: "auto",
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    gap: "6px",
                    flexWrap: "wrap",
                    flexBasis: "100%"
                }}>
                    {/* { skillsArray.map((skill) => {
                        return <LanguageButton text={skill} iconStyling={iconStyling} />
                    })} */}
                    { skillsArray.map((imgUrl) => {
                        return <img key={imgUrl} src={`https://github.com/onemarc/tech-icons/raw/main/icons/${imgUrl}.svg`} style={{ width: '50px', ...iconStyling}} />
                    })}
                </div>

                {/* <div style={{ lineHeight: '0.95', fontFamily: 'canela-dlightitalic', fontSize: "20px" }}>{technologies}</div> */}
            </div>
            {/* <div style={{
                
            }}></div> */}
            <div className="expItemDetails" style={{flexBasis: "5%", display: "flex", justifyContent: "start", marginLeft: "15px"}}>
                <a target="_blank" rel="noopener noreferrer" href={url} style={{ textDecoration: 'none' }}>
                    <div
                        style={{
                            lineHeight: '0.95',
                            fontFamily: 'canela-dlight',
                            fontSize: "24px",
                            padding: "12px 10px 10px 10px",
                            borderRadius: "10px",
                            backgroundColor: hoverBool ? "rgba(200,200,200,1.0)" : "rgba(40,40,40,1.0)",
                            transition: "background-color 0.2s ease-in-out, color 0.5s ease-in-out",
                            color: hoverBool ? "black" : "white"
                        }}
                        onMouseEnter={handleHoverIn}
                        onMouseLeave={handleHoverOut}
                    >repo</div>
                </a>
            </div>
        </div>
        <div style={{ marginTop: `1.5vh`, paddingLeft: '0vw' }}>{children}</div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                minHeight: `${bottomPadding}px`,
                backgroundColor: 'rgb(205,205,205)',
                borderRadius: 20,
                margin: `${mt}vh 0 ${mb}vh 0`,
                width: "100%",
                transition: "opacity 1.75s ease-in-out",
                ...iconStyling
            }}>
            </div>
        </div>
    </div>
    )
}