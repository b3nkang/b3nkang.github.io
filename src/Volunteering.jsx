import './App.css';
import ExperienceItem from './components/ExperienceItem';
import HeaderTypography from './components/HeaderTypography';

function Volunteering({ iconStyling, waveStyling}) {
    return (
        <div>
            <HeaderTypography headerClass="expCont" pl="2.5vw" mb={-10} mt={35}>
                volunteering
            </HeaderTypography>
            <div className="wave4" style={{ marginTop: "20px", ...waveStyling}}>
                <ExperienceItem
                    imgSrc={"/src/assets/images/fsab_logo.jpeg"}
                    alt={"FSAB logo"}
                    name="Full Stack at Brown"
                    title="Project Manager, Software Developer"
                    period="Sept. 2023 – Current"
                    location={`Providence, RI`}
                    iconStyling={iconStyling}
                >
                    Develop sites for local groups at Full Stack @ Brown, Brown’s pro-bono SWE club. Project Manager for Spring ’24. Created Brown JCA’s site with <code>TS/React/Material-UI</code> on 9-dev team, using <code>Firebase</code> for posts & image uploads.                
                </ExperienceItem>
                <ExperienceItem
                    imgSrc={"/src/assets/images/develop_for_good_logo.jpeg"}
                    alt={"Develop for Good logo"}
                    name="Develop for Good"
                    title="Software Developer"
                    period="May. 2024 – Aug. 2024"
                    location="(Remote) Pittsburgh, PA"
                    iconStyling={iconStyling}
                    bottomPadding={0}
                    mt={4.5}
                    mb={0}
                >
                    Team: involveMINT. Using Angular, Express.
                </ExperienceItem>
            </div>
        </div>
    )
}

export default Volunteering;