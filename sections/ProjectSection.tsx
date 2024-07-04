import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import { useSection } from "context/section";
import useScrollActive from "hooks/useScrollActive";

import { projects } from "../data/Project";


const ProjectSection: React.FC = () => {
  const { theme } = useTheme();
  const [searchTags, setSearchTags] = useState<string[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const elementRef = useRef<HTMLDivElement>(null);

  // Set active link for project section
  const projectSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    projectSection && onSectionChange!("projects");
  }, [onSectionChange, projectSection]);

  const handleToggleTag = (tag: string) => {
    if (searchTags.includes(tag)) {
      setSearchTags(searchTags.filter((t) => t !== tag));
    } else {
      setSearchTags([...searchTags, tag]);
    }
  };

  // Function to check if a project should be shown based on searchTags
  const shouldShowProject = (project: any) => {
    if (searchTags.length === 0) return true;
    return searchTags.some((tag) => project.tags.includes(tag));
  };

  return (
    <section ref={sectionRef} id="projects" className="section">
      <div className="project-title text-center">
        <h2 className="section-heading">Projects</h2>
      </div>
      <span className="project-desc text-center block mb-4" ref={elementRef}>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </span>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200 dark:border-gray-700">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr className="border-b border-gray-300 dark:border-gray-600">
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Name
              </th>
              <th className="px-6 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300">
                Tech Stack
              </th>
              <th className="px-8 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 w-2/6">
                Description
              </th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider dark:text-gray-300 w-1/6">
                Links
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            {projects.map((project) => (
              <tr
                key={project.name}
                className={`${
                  projects.indexOf(project) % 2 === 0
                    ? "bg-white dark:bg-gray-900"
                    : "bg-gray-50 dark:bg-gray-800"
                } border-b border-gray-300 dark:border-gray-600`}
              >
                <td className="px-4 py-4">
                  <div className="text-m font-semi text-gray-900 dark:text-white">
                    {project.name}
                  </div>
                </td>
                <td className="px-4 py-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block  bg-gray-200 dark:bg-gray-600 rounded-full px-3 py-1 text-sm text-gray-800 dark:text-gray-200 mr-2 mb-2"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="px-4 py-4 w-2/6">
                  <div className="text-sm text-gray-500 dark:text-gray-200">
                    {project.description}
                  </div>
                </td>
                <td className="px-4 py-4 w-1/6">
                  {project.links.map((link) => {
                    return (
                      <div>
                        <a
                          href={link.url}
                          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {link.linkName}
                        </a>
                      </div>
                    );
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProjectSection;
