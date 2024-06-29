import './App.css';
import ExperienceItem from './components/ExperienceItem';
import VolunteerItem from './components/VolunteerItem';

function Experience({ iconStyling, waveStyling}) {
    return (
    <div className="wave4" style={{ ...waveStyling}}>
        {/* <ExperienceItem
            imgSrc={"/images/intus_care_logo.jpeg"} 
            alt={"Intus Care logo"}
            name="Intus Care"
            title="Software Engineering Intern"
            period="Jun. 2024 – Aug. 2024"
            location="Cambridge, MA"
            iconStyling={iconStyling}
        >
            Working on applications team to engineer CareHub, Intus' flagship new EHR built on <code>MongoDB</code>, <code>React</code>, <code>Zod</code>, and <code>TS</code>. Developing <code>tRPC</code> APIs and data models for migrations to <code>Compass</code>, using <code>Faker.js</code> to seed collections with thousands of complex health records.
        </ExperienceItem> */}
        <VolunteerItem
            imgSrc={"/images/intus_care_logo.jpeg"} 
            alt={"Intus Care logo"}
            name="Intus Care"
            title="Software Engineering Intern"
            period="Jun. 2024 – Aug. 2024"
            location="Cambridge, MA"
            iconStyling={iconStyling}
            skillsArray={["mongodb-dark", "react-dark", "typescript", "materialui", "vitest", "nextjs-dark", "javascript","jira-dark"]}
            // bottomPadding={0}
            // mt={4.5}
            // mb={0}
            // itemb={0}
        >
            Working on applications team to engineer CareHub, Intus' flagship new EHR built on <code>MongoDB</code>, <code>React</code>, <code>Zod</code>, and <code>TS</code>. Developing <code>tRPC</code> APIs and data models for migrations to <code>Compass</code>, using <code>Faker.js</code> to seed collections with thousands of complex health records.
        </VolunteerItem>
        <VolunteerItem
            imgSrc={"/images/usereferme_logo.jpeg"} 
            alt={"Refer Me logo"}
            name="Refer Me"
            title="Software Engineering Intern"
            period="Feb. 2024 – Apr. 2024"
            location={`(Remote) Seattle, WA`}
            iconStyling={iconStyling}
            skillsArray={["python-dark","flask-light", "selenium", "pytest-dark", "chatgpt","github-dark"]}
            // bottomPadding={0}
            // mt={4.5}
            // mb={0}
            // itemb={0}
        >
            Engineered job scraper with <code>bs4/Selenium</code>, utilizing <code>instructor</code> and <code>Pydantic</code> to extract JSON via OpenAI's API. Reduced scraper API costs by ~1500% ($0.01 to $0.0005/call) via chunking inputs and model downgrades while holding 98% accuracy.
        </VolunteerItem>
        <VolunteerItem
            imgSrc={"/images/letsift_logo.jpeg"} 
            alt={"Sift logo"}
            name="Sift"
            title="Software Engineering Intern"
            period="Nov. 2023 – Jan. 2024"
            location="Providence, RI"
            iconStyling={iconStyling}
            skillsArray={["react-dark","typescript", "tailwindcss-dark",  "nextjs-dark", "framermotion", "css", "notion-light"]}
        >
            Led homepage migration to <code>React/TypeScript/Next.js</code> stack, deprecating thousands of lines of code. Optimized site performance with React Lazy Load, Next.js Image and server-side rendering to achieve Lighthouse SEO score of 100.
        </VolunteerItem>
        <VolunteerItem
            imgSrc={"/images/cims_logo.jpeg"} 
            alt={"NYU Courant logo"}
            name="AI & Predictive Analytics Lab"
            title="Visiting Researcher, NYU Courant"
            period="June 2023 – Oct. 2023"
            location="New York, NY"
            iconStyling={iconStyling}
            skillsArray={["javascript","html", "css", "d3", "mongodb-dark", "tableau"]}
            bottomPadding={0}
            mt={4.5}
            mb={0}
        >
            Built world’s largest corpus of queryable LENR research on AI & Low-Energy Nuclear Reactions (AI-LENR) team. Co-authored paper in IEEE ICBDA 2024 and was main contributor to <a href="https://lenrdashboard.com/#" className='fade-link'>LENRdashboard.com</a>, built with <code>D3.js</code>, <code>JavaScript</code>, <code>HTML/CSS</code>.
        </VolunteerItem>

        {/* <ExperienceItem 
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
            Led homepage migration to <code>React/TypeScript/Next.js</code> stack, deprecating thousands of lines of code. Optimized site performance with React Lazy Load, Next.js Image and server-side rendering to achieve Lighthouse SEO score of 100.
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
            Built world’s largest corpus of queryable LENR research on AI & Low-Energy Nuclear Reactions (AI-LENR) team. Co-authored paper in IEEE ICBDA 2024 and was main contributor to <a href="https://lenrdashboard.com/#" className='fade-link'>LENRdashboard.com</a>, built with <code>D3.js</code>, <code>JavaScript</code>, <code>HTML/CSS</code>.
        </ExperienceItem>   */}
    </div>
    )
}

export default Experience;