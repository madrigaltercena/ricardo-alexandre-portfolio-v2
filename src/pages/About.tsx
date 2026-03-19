import { IconLeaf } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { SectionHeader } from '../components/SectionHeader';
import { SectionMotion } from '../common/motion/Section';

export const About = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'A short story of me';
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconLeaf />}
        label="About"
        description={sectionDescription}
      />
      <div className="flex gap-2 text-md lg:text-xl font-medium">
        <h2 className="font-semibold">Hello, I'm Ricardo</h2>
        <div className="ml-1 animate-waving-hand">👋</div>
      </div>
      <p>
        I am a Power Platform Specialist with experience since 2021, helping 
        clients unblock blockers, implement quick solutions, and architect 
        Power Platform projects. My expertise includes Power Automate, Dataverse, 
        and Copilot Studio.
      </p>
      <p>
        I focus on delivering efficient workflow automations, robust data 
        management solutions, and intelligent AI agents that help businesses 
        streamline their operations and achieve their goals.
      </p>
    </motion.section>
  );
};
