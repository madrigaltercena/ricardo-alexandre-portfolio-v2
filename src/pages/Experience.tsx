import { motion } from 'framer-motion';
import { IconClockPlay } from '@tabler/icons-react';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { CommonCard } from '../components/CommonCard';

export const Experience = () => {
  const { section } = SectionMotion;
  const sectionDescription = 'My professional career journey';
  // Ricardo's experience
  const experiences = [
    {
      id: 1,
      image: '/vite.svg',
      name: 'Power Platform Specialist',
      position: 'Freelance / Consulting',
      startDate: '2021',
      endDate: 'Present',
      duration: '3+ Years',
      location: 'Remote',
    },
  ];
  return (
    <motion.section
      initial={section.initial}
      animate={section.animated}
      transition={section.transition}
      className="space-y-6"
    >
      <SectionHeader
        icon={<IconClockPlay />}
        label="Experience"
        description={sectionDescription}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {experiences.map((experience) => (
          <CommonCard key={experience.id} {...experience} />
        ))}
      </div>
    </motion.section>
  );
};
