import './App.css';
import ExperienceItem from './components/ExperienceItem';
import HeaderTypography from './components/HeaderTypography';
import VolunteerItem from './components/VolunteerItem';

function Volunteering({ iconStyling, waveStyling}) {
    return (
        <div>
            <HeaderTypography headerClass="expCont" pl="2.5vw" mb={-10} mt={35}>
                volunteering
            </HeaderTypography>
            <div className="wave4" style={{ marginTop: "20px", ...waveStyling}}>
                {/* <ExperienceItem
                    imgSrc={"/images/fsab_logo.jpeg"}
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
                    imgSrc={"/images/develop_for_good_logo.jpeg"}
                    alt={"Develop for Good logo"}
                    name="Develop for Good"
                    title="Software Developer"
                    period="May. 2024 – Aug. 2024"
                    location="(Remote) Pittsburgh, PA"
                    iconStyling={iconStyling}
                    // bottomPadding={0}
                    mt={4.5}
                    // mb={4}
                >
                    Team: involveMINT. Using Angular, Express.
                </ExperienceItem> */}
                <VolunteerItem
                    imgSrc={"/images/fsab_logo.jpeg"}
                    alt={"FSAB logo"}
                    name="Full Stack at Brown"
                    title="Project Manager, Software Developer"
                    period="Sept. 2023 – Current"
                    location={`Providence, RI`}
                    iconStyling={iconStyling}
                    skillsArray={["react-dark", "typescript", "materialui", "nextjs-dark", "tailwindcss-dark","firebase-light","git","github-dark"]}
                >
                    Develop sites for local groups at Full Stack @ Brown, Brown’s pro-bono SWE club. Led 10-dev team in Spring 2024 to build, from scratch, the <a href="https://meyers-lab.vercel.app/" className="fade-link">Brown Medicare Coding Report</a> for Prof. David Meyers' lab. Headed Firestore integration efforts as dev for Fall 2023, building Brown JCA’s site.                
                </VolunteerItem>
                <VolunteerItem
                    imgSrc={"/images/develop_for_good_logo.jpeg"}
                    alt={"Develop for Good logo"}
                    name="Develop for Good"
                    title="Software Developer"
                    period="May. 2024 – Aug. 2024"
                    location="(Remote) Pittsburgh, PA"
                    skillsArray={["angular",  "typescript","firebase-light", "docker"]}
                    iconStyling={iconStyling}
                    bottomPadding={0}
                    mt={4.5}
                    mb={0}
                    itemb={0}
                >
                    Work within a legacy <code>Angular</code> codebase with an <code>Express.js</code> backend and <code>Firebase-emulators</code> mimicing <code>SQL</code>, supporting a local Pittsburgh-based non-profit, involveMINT.
                </VolunteerItem>
            </div>
        </div>
    )
}

export default Volunteering;