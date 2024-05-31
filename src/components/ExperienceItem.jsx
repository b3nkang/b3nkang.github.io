import { minHeight } from '@mui/system'
import './Components.css'

export default function ExperienceItem({name, title, period, location, desc, bottomPadding=3}) {
    return (
    <div>
        <div className="expItem">
            <div className="expItemTitle">
                <h4>{name}</h4>
                <h5>{title}</h5>
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
            justifyContent: 'center'
        }}>
            <div style={{
                minHeight: `${bottomPadding}px`,
                backgroundColor: 'rgb(0,0,0)',
                borderRadius: 20,
                margin: "3vh 20vw"
            }}>
        </div>
        </div>
    </div>
    )
}