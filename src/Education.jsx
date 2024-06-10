import './App.css';
import EducationItem from './components/EducationItem';

function Education({ iconStyling, waveStyling}) {
    return (
    <div className="wave4" style={{  padding: "2.3vw 2.3vw 0.5vw 2.3vw", ...waveStyling}}>
        <EducationItem
            imgSrc={"/src/assets/images/brown_university_logo.jpeg"}
            alt={"Brown University logo"}
            name="Brown University"
            title="Sc.B. in Computer Science"
            period="9/2023 - 5/2026"
            location="GPA: 3.86"
            iconStyling={iconStyling}
            mt={2.93}
            mb={3}
        >
            <div style={{ fontSize: "18px"}}>
                <span style={{fontFamily: "canela-dlightitalic"}}> Relevant Coursework:</span> Design and Analysis of Algorithms; Computer Systems; Deep Learning; Software Engineering; Program Design, Data Structures & Algorithms; Statistical Inference; Linear Algebra; Calculus II.
            </div>
        </EducationItem>
        <EducationItem
            imgSrc={"/src/assets/images/new_york_university_logo.jpeg"}
            alt={"New York University logo"}
            name="New York University"
            title="Presidential Honors Scholar"
            period="9/2022 - 5/2023"
            location="GPA: 3.92"
            bottomPadding={0}
            mt={0.5}
            mb={2.5}
            iconStyling={iconStyling}
        >
            <div style={{ fontSize: "18px"}}>
                <span style={{fontFamily: "canela-dlightitalic"}}> Relevant Coursework:</span>  Discrete Mathematics; Intro to Computer Programming; Intro to Computer Science; Linear Algebra; Calculus I.
            </div>
        </EducationItem>
    </div>
    )
}

export default Education;