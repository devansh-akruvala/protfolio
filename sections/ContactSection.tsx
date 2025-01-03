import { useEffect, useRef } from "react";
import { RoughNotation } from "react-rough-notation";
import { useTheme } from "next-themes";

import LinkButton from "@/components/LinkButton";
import { useSection } from "context/section";
import useOnScreen from "hooks/useOnScreen";
import useScrollActive from "hooks/useScrollActive";
import { email } from "data/Email";

const ContactSection: React.FC = () => {
  const { theme } = useTheme();

  const sectionRef = useRef<HTMLDivElement>(null);
  const isSecOnScreen = useOnScreen(sectionRef);

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);

  // Set active link for contact section
  const contactSection = useScrollActive(sectionRef);
  const { onSectionChange } = useSection();
  useEffect(() => {
    contactSection && onSectionChange!("contact");
  }, [contactSection]);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-[700px] text-center bg-[#ECEff1] dark:bg-[#1C2A3A] mb-2"
    >
      <div className="text-center">
          <h2 className="text-2xl inline-block my-6 font-medium">Contact</h2>
      </div>
      <div className="mt-8 mb-20">
        <h3 className="font-medium text-lg mb-2 md:text-3xl" ref={elementRef}>
          Let's be awesome together!
        </h3>
        <p className="mb-6 mx-auto max-w-lg md:mb-10 lg:leading-loose">
        I love coding and always look forward to new challenges. If you have projects to collaborate on or ideas to build, please reach out. I'd love to work on something amazing together!
        </p>
        <LinkButton href={`mailto:${email}`}>
          Get in touch!
        </LinkButton>
      </div>
    </section>
  );
};

export default ContactSection;
