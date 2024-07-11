import { StaticImageData } from "next/image"
import koolmind_logo from "public/logos/koolmind_logo.png"
import isro_logo from "public/logos/isro_logo.png"
import navpad_logo from "public/logos/navpad_logo.jpeg"


type Experience = {
    role:string,
    company:string,
    work:string[],
    icon:StaticImageData,
    date:string
}

export const experiences:Experience[] = [
    {
        role: "Software Engineer",
        company: "KoolMind Technolab",
        work: [
            "Increased transaction success rate by 13% by integrating 3 payment gateways in a Java microservice",
"Improved API response times by 21% using Redis caching in a Java microservice",
"Secured API access with JWT token-based authentication in a Java microservice",
"Enabled data-driven decisions with interactive React and Redux dashboards"
        ],
        icon: koolmind_logo,
        date:"June 2022 -- July2023"
    },
    {
        role: "Machine Learning Engineer Intern",
        company: "Indian Space Research Organisation",
        work: [

        "Improved Landsat image quality by 88% with a Python ML model using Gauss-Newton optimization",
"Enhanced data processing efficiency with an end-to-end pipeline for image ingestion, processing, color balancing, and mosaic generation",
"Boosted developer efficiency by creating a Python library for easy TIFF file handling and data access"
        ],
        icon: isro_logo,
        date:"Dec 2021 -- May 2022"
    },
    {
        role: "Software Engineer Intern",
        company: "KoolMind Technolab",
        work: [
            "Built an invoicing app with Flutter and SQLite for payments and client management",
"Increased revenue by 16% with Google AdMob ad integration",
"Boosted user engagement by 42% using Firebase Cloud Messaging for targeted notifications"
        ],
        icon: koolmind_logo,
        date:"Apr 2021 -- Aug 2021"
    },
    {
        role: "Software Engineer Intern",
        company: "KoolMind Technolab",
        work: [
            "Increased transaction success rate by 13% by integrating 3 payment gateways in a Java microservice",
"Improved API response times by 21% using Redis caching in a Java microservice",
"Secured API access with JWT token-based authentication in a Java microservice",
"Enabled data-driven decisions with interactive React and Redux dashboards"
        ],
        icon: navpad_logo,
        date:"Apr 2020 – July 2020"
    },

   
]