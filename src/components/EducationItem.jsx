import { minHeight } from '@mui/system'
import './Components.css'
import CompanyIcon from './CompanyIcon'

export default function EducationItem({
    iconStyling, 
    imgSrc, 
    alt, 
    name, 
    title, 
    period, 
    location, 
    desc, 
    bottomPadding=1, 
    mb=3.5, 
    mt=3
}) {
    return (
    <div>
        <div className="eduItem">
            <div style={{
                display: "flex",
                gap: `15px`,
                flexBasis: `75%`
            }}>
                <CompanyIcon imgSrc={imgSrc} alt={alt} styling={iconStyling}/>
                <div className="eduItemTitle">
                    <h4 style={{
                        lineHeight: 0.9,
                        marginTop: `3px`,
                        marginBottom: `2px`,
                        fontSize: `1.75em`,
                        fontFamily: 'canela-dregular'
                    }}>
                        {name}
                    </h4>
                    <h5 style={{
                        fontFamily: 'canela-dlight',
                        fontWeight: '100',
                    }}>
                        {title}
                    </h5>
                </div>
            </div>
            <div className="eduItemDetails" style={{ flexBasis: "25%"}}>
                <div style={{ lineHeight: '0.95' }}>{period}</div>
                <div style={{ lineHeight: '0.95', fontFamily: 'canela-dlightitalic' }}>{location}</div>
            </div>
        </div>
        <div style={{marginTop: `1.5vh`, paddingLeft: '0vw'}}>{desc}</div>
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