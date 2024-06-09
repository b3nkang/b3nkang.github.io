import './App.css';
import ExperienceItem from './components/ExperienceItem';

function Experience({ iconStyling, waveStyling}) {
    return (
    <div className="wave4" style={{ marginTop: "20px", ...waveStyling}}>
        <ExperienceItem
            imgSrc={"/src/assets/images/intus_care_logo.jpeg"} 
            alt={"Intus Care logo"}
            name="Intus Care"
            title="Software Engineering Intern"
            period="Jun. 2024 – Aug. 2024"
            location="Cambridge, MA"
            desc="Incoming for summer 2024, working on applications team with MongoDB, React, Zod (data validation), Zustand (state manager), and TypeScript. Developing tRPC protocol routes and data modelling for seeding MongoDB instances."
            iconStyling={iconStyling}
        />
        <ExperienceItem 
            imgSrc={"/src/assets/images/usereferme_logo.jpeg"} 
            alt={"Refer Me logo"}
            name="Refer Me"
            title="Software Engineering Intern"
            period="Feb. 2024 – Apr. 2024"
            location={`(Remote) Seattle, WA`}
            desc="Engineered job scraper with bs4/Selenium, utilizing instructor & Pydantic to extract JSON via OpenAI's API. Reduced scraper API costs by 10^3% ($0.01 to $0.0005/call) via chunking inputs and model downgrades while holding 98% accuracy."
            iconStyling={iconStyling}
        />
        <ExperienceItem 
            imgSrc={"/src/assets/images/letsift_logo.jpeg"} 
            alt={"Sift logo"}
            name="Sift"
            title="Software Engineering Intern"
            period="Nov. 2023 – Jan. 2024"
            location="Providence, RI"
            desc="Led homepage migration to React/TypeScript/Next.js stack, deprecating thousands of lines of code. Optimized site performance with React Lazy Load, Next.js Image and server-side rendering to achieve Lighthouse SEO score of 100."
            iconStyling={iconStyling}
        />
        <ExperienceItem
            imgSrc={"/src/assets/images/cims_logo.jpeg"} 
            alt={"NYU Courant logo"}
            name="AI & Predictive Analytics Lab"
            title="Visiting Researcher, NYU Courant"
            period="June 2023 – Oct. 2023"
            location="New York, NY"
            desc="Built world’s largest corpus of queryable LENR research on AI & Low-Energy Nuclear Reactions (AI-LENR) team. Co-authored paper in IEEE ICBDA 2024 and was main contributor to LENRdashboard.com, built with D3.js, JS, HTML/CSS."
            bottomPadding={0}
            mt={4.5}
            mb={0}
            iconStyling={iconStyling}
        />  
    </div>
    )
}

export default Experience;