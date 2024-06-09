import LanguageButton from "./components/LanguageButton";
import './App.css';
import SkillsItem from "./components/SkillsItem";

export default function Skills({ iconStyling, waveStyling}) {
    return (
        <div className="wave4" style={{ padding: "1.7vw 2.15vw 2.15vw 2.15vw", display: "flex", flexDirection: "column", flexGrow: 1, ...waveStyling}}> 
            <SkillsItem
                itemName="Languages:" 
                iconStyling={iconStyling}
                skillsArray={["Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS"]}
            />
            <SkillsItem
                itemName="Frameworks:" 
                iconStyling={iconStyling}
                skillsArray={["React", "Vite", "Next.js", "Tailwind", "Flask", "Selenium", "Pytest", "JUnit", "Playwright"]}
            />
            <SkillsItem 
                mb={0} 
                itemName="Dev Tools:" 
                iconStyling={iconStyling}
                skillsArray={["MongoDB", "Firestore", "GCP", "Zod", "Zustand", "tRPC", "Git", "VS Code", "IntelliJ"]}
            />
        </div>

    )
}