import { motion } from 'framer-motion';
import {
  IconBolt,
  IconRobot,
} from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';

export const Skills = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'List of my skills';
  // Power Platform skills
  const skills = [
    { label: 'Power Automate', icon: <IconBolt /> },
    { label: 'Copilot Studio', icon: <IconRobot /> },
    { label: 'Power Apps', icon: <IconRobot /> },
    { label: 'Openclaw', icon: <IconRobot /> },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconBolt />}
        label="Skills"
        description={sectionDescription}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
        ))}
      </div>
    </motion.section>
  );
};
