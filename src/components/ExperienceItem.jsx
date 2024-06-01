import { minHeight } from '@mui/system'
import './Components.css'
import CompanyIcon from './CompanyIcon'

export default function ExperienceItem({imgSrc, alt, name, title, period, location, desc, bottomPadding=3, mb=2, mt=3}) {
    return (
    <div>
        <div className="expItem">
            <div style={{
                display: "flex",
                gap: `15px`,
                flexBasis: `66%`
            }}>
                <CompanyIcon imgSrc={imgSrc} alt={alt} />
                <div className="expItemTitle">
                    <h4>{name}</h4>
                    <h5>{title}</h5>
                </div>
            </div>
            <div className="expItemDetails">
                <div>{period}</div>
                <div style={{fontFamily: 'canela-dlightitalic'}}>{location}</div>
            </div>
        </div>
        <div style={{marginTop: `2vh`, paddingLeft: '0vw'}}>{desc}</div>
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <div style={{
                minHeight: `${bottomPadding}px`,
                backgroundColor: 'rgb(0,0,0)',
                borderRadius: 20,
                margin: `${mt}vh 0 ${mb}vh 0`,
                width: "50px"
            }}>
            </div>
        </div>
    </div>
    )
}