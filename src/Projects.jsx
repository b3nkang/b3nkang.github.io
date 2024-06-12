import './App.css';
import ProjectItem from "./components/ProjectItem";
import HeaderTypography from './components/HeaderTypography';

export default function Projects({ iconStyling, waveStyling}) {
    return (
        <div>
            <HeaderTypography headerClass="expCont" pl="2.5vw" mb={8} mt={-70}>
                projects
            </HeaderTypography>
            <div className="wave4" style={waveStyling}>
                <ProjectItem
                    title="Chess.com Paid Analysis Unlocker"
                    mt={3.5}
                    mb={3.5}
                    fB={40}
                    iconStyling={iconStyling}
                    skillsArray={["Python", "Selenium", "Flask", "JavaScript", "Gunicorn", "Nginx", "Google Cloud", "Git"]}
                    url="https://github.com/b3nkang/analysis-unlocker-extension"
                >
                    Developed Chrome Extension to unlock Chess.com’s paid subscription analysis for free via <code>Selenium</code> and <code>Flask</code>. Configured robust deployment with a <code>Gunicorn</code> server, <code>Nginx</code> reverse proxy, and <code>systemd</code> for 100% uptime. Extension was sent to Chess.com CTO and resulted in security review & patch.
                </ProjectItem>
                <ProjectItem
                    title="Scrabble Detector with CV & CNN Classification"
                    bottomPadding={0}
                    mt={4.5}
                    mb={0}
                    fB={40}
                    iconStyling={iconStyling}
                    skillsArray={["OpenCV", "Python", "TensorFlow", "NumPy", "Git"]}
                    url="https://github.com/b3nkang/scrabble-detector"
                >
                    Developed computer vision-based board detector on NASPA Scrabble streams using OpenCV’s <code>Otsu</code> thresholding, largest contour, <code>Hough-line</code> & <code>DBSCAN</code>. Detected board was sliced and fed into Scrabble-tile CNN architecture with 3 conv & 2 FC layers, trained on Chars74k dataset, achieving with 91% training acc.                                        
                </ProjectItem>
            </div>
        </div>
    )
}