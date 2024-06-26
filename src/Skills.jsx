import LanguageButton from "./components/LanguageButton";
import './App.css';
import SkillsItem from "./components/SkillsItem";
import SkillIconItems from "./components/SkillIconItems";
import SkillsTechItem from "./components/SkillsTechItems";

export default function Skills({ iconStyling, waveStyling}) {
    return (
        <div className="wave4" style={{ marginBottom: "20px", padding: "1.7vw 2.15vw 2.15vw 2.15vw", display: "flex", flexDirection: "column", flexGrow: 1, ...waveStyling}}> 
            {/* <SkillsItem
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
                // mb={0} 
                itemName="Dev Tools:" 
                iconStyling={iconStyling}
                skillsArray={["MongoDB", "Firestore", "GCP", "Zod", "Zustand", "tRPC", "Git", "VS Code", "IntelliJ"]}
            /> */}
            {/* <SkillIconItems
                itemName="Languages:" 
                iconStyling={iconStyling}
                skills="py,java,js,ts,html,css"
            />
            <SkillIconItems
                itemName="Frameworks & Libraries:" 
                iconStyling={iconStyling}
                skills="react,vite,next,tailwind,materialui,flask,selenium,vitest"
            />
            <SkillIconItems
                mb={0} 
                itemName="Databases & Dev Tools:" 
                iconStyling={iconStyling}
                skills={"mongodb,firebase,gcp,git,docker,github,vscode,idea,vercel"}
            /> */}
            <SkillsTechItem
                itemName="Languages:" 
                iconStyling={iconStyling}
                skillsArray={["python-dark", "javascript", "typescript", "html", "css", "java-dark"]}
            />
            <SkillsTechItem
                itemName="Frameworks & Libraries:" 
                iconStyling={iconStyling}
                skillsArray={["react-dark", "nextjs-dark", "tailwindcss-dark","nodejs-dark","flask-light", "selenium", "pytest-dark", "playwright-dark"]}
            />
            <SkillsTechItem 
                mb={0} 
                itemName="Databases & Dev Tools:" 
                iconStyling={iconStyling}
                skillsArray={["mongodb-dark", "firebase-light", "googlecp-dark", "nginx", "git", "docker", "github-dark","vscode-dark", "intellijidea-dark" ]}
            />

        </div>

    )
}