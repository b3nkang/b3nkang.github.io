import './App.css';
import ExperienceItem from './components/ExperienceItem';

function Experience({ iconStyling, waveStyling}) {
    return (
    <div className="wave4" style={{ ...waveStyling}}>
        <ExperienceItem
            imgSrc={"/images/intus_care_logo.jpeg"} 
            alt={"Intus Care logo"}
            name="Intus Care"
            title="Software Engineering Intern"
            period="Jun. 2024 – Aug. 2024"
            location="Cambridge, MA"
            iconStyling={iconStyling}
        >
            Incoming for summer 2024, working on applications team with <code>MongoDB</code>, <code>React</code>, <code>Zod</code> (data validation), <code>Zustand</code> (state manager), and <code>TypeScript</code>. Developing <code>tRPC</code> protocol routes and data modelling for seeding <code>MongoDB</code> instances.
        </ExperienceItem>
        <ExperienceItem 
            imgSrc={"/images/usereferme_logo.jpeg"} 
            alt={"Refer Me logo"}
            name="Refer Me"
            title="Software Engineering Intern"
            period="Feb. 2024 – Apr. 2024"
            location={`(Remote) Seattle, WA`}
            iconStyling={iconStyling}
        >
            Engineered job scraper with <code>bs4/Selenium</code>, utilizing <code>instructor</code> and <code>Pydantic</code> to extract JSON via OpenAI's API. Reduced scraper API costs by ~1500% ($0.01 to $0.0005/call) via chunking inputs and model downgrades while holding 98% accuracy.
        </ExperienceItem>
        <ExperienceItem 
            imgSrc={"/images/letsift_logo.jpeg"} 
            alt={"Sift logo"}
            name="Sift"
            title="Software Engineering Intern"
            period="Nov. 2023 – Jan. 2024"
            location="Providence, RI"
            iconStyling={iconStyling}
        >
            Led homepage migration to <code>React/TypeScript/Next.js</code> stack, deprecating thousands of lines of code. Optimized site performance with React Lazy Load, Next.js Image and server-side rendering to achieve Lighthouse SEO score of 100."
        </ExperienceItem>
        <ExperienceItem
            imgSrc={"/images/cims_logo.jpeg"} 
            alt={"NYU Courant logo"}
            name="AI & Predictive Analytics Lab"
            title="Visiting Researcher, NYU Courant"
            period="June 2023 – Oct. 2023"
            location="New York, NY"
            bottomPadding={0}
            mt={4.5}
            mb={0}
            iconStyling={iconStyling}
        >
            Built world’s largest corpus of queryable LENR research on AI & Low-Energy Nuclear Reactions (AI-LENR) team. Co-authored paper in IEEE ICBDA 2024 and was main contributor to LENRdashboard.com, built with <code>D3.js</code>, <code>JavaScript</code>, <code>HTML/CSS</code>.
        </ExperienceItem>  
    </div>
    )
}

export default Experience;