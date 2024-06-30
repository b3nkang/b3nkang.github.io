import './Components.css'
import CompanyIcon from './CompanyIcon'

export default function VolunteerItem({
    iconStyling, 
    imgSrc, 
    alt, 
    name, 
    title, 
    period, 
    location,
    skillsArray,
    bottomPadding=1, 
    mb=3.5, 
    mt=2.55,
    itemb=0,
    children
}) {
    return (
    <div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: '3px',
        }}>
            <div style={{
                flexBasis: `70%`
            }}>
                <div style={{ display: 'flex', gap: `15px`}}>
                    <CompanyIcon imgSrc={imgSrc} alt={alt} styling={iconStyling}/>
                    <div className="expItemTitle">
                        <h4 style={{
                            lineHeight: 0.9,
                            marginBottom: `2px`
                        }}>
                            {name}
                        </h4>
                        <h5>{title}</h5>
                    </div>
                </div>
                <div style={{marginTop: `1.5vh`, paddingLeft: '0vw'}}>{children}</div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'end',
                flexBasis: '30%',
                textAlign: 'right',
                fontSize: '19px',
                gap: '10px',
            }}>
                <div>
                    <div style={{ lineHeight: '0.95', marginBottom: "8px" }}>{period}</div>
                    <div style={{ lineHeight: '0.95', fontFamily: 'canela-dlightitalic' }}>{location}</div>
                </div>
                <div style={{                                                 
                    width: "auto",
                    display: "flex",
                    justifyContent: "end",
                    alignItems: "start",
                    gap: "6px",
                    flexWrap: "wrap",
                    flexBasis: "40%",
                    // marginBottom: "1vh",
                    marginTop: "1.7vh"
                }}>
                    { skillsArray.map((imgUrl) => {
                        return <img key={imgUrl} alt={imgUrl} src={`https://github.com/onemarc/tech-icons/raw/main/icons/${imgUrl}.svg`} style={{ width: '50px', ...iconStyling, transition: "opacity 1.5s ease-in-out"}} />
                    })}
                </div>
                <div style={{height: `${itemb}vh`}}></div>
            </div>
        </div>
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