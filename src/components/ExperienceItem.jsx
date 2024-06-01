import { minHeight } from '@mui/system'
import './Components.css'
import CompanyIcon from './CompanyIcon'

export default function ExperienceItem({iconStyling, imgSrc, alt, name, title, period, location, desc, bottomPadding=1, mb=3.5, mt=3}) {
    return (
    <div>
        <div className="expItem">
            <div style={{
                display: "flex",
                gap: `15px`,
                flexBasis: `66%`
            }}>
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
            <div className="expItemDetails">
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
                backgroundColor: 'rgb(200,200,200)',
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