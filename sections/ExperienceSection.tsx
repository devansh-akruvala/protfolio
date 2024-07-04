import { useSection } from "context/section";
import useScrollActive from "hooks/useScrollActive";
import { useTheme } from "next-themes";
import { useEffect, useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {experiences} from "data/Experience"

import devansh from "public/devansh.png"
import Image from "next/image";

const ExperienceSection: React.FC = () => {

    const sectionRef = useRef<HTMLDivElement>(null);
    // Set active link for about section
    const aboutSection = useScrollActive(sectionRef);
    const { onSectionChange } = useSection();
    useEffect(() => {
      aboutSection ? onSectionChange!("Experience?") : onSectionChange!("");
    }, [aboutSection, onSectionChange]);
  
    const {theme} = useTheme()
    
  return (
    <div
      ref={sectionRef}
      className="about-panel bg-white dark:bg-[#1B2731] relative"
    >    <section id="experience" className="section">
       <div className="project-title text-center">
        <h2 className="section-heading">Experience and Education</h2>
      </div>
      <VerticalTimeline lineColor={theme==='dark'?"#007a7a":"#05ce91"} >
        {experiences.map((exp) => {
          return         <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2011 - present"
          iconStyle={{ background: theme==='light'?"#007a7a":"#05ce91", color: "#fff" }}
          icon={ <Image className="rounded-full "
            src={devansh}
            alt=""
          />}
          contentStyle={{background:theme==='light'?"#007a7a":"#05ce91"}}
        >
          <h3 className="text-xl">{exp.role}</h3>
          <h4 className="vertical-timeline-element-subtitle">{exp.company}</h4>
          <p>
            Creative Direction, User Experience, Visual Design, Project
            Management, Team Leading
          </p>
        </VerticalTimelineElement>
        })}



      </VerticalTimeline>
    </section>
    </div>

  );
};

export default ExperienceSection;
