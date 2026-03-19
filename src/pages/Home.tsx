import { motion } from 'framer-motion';
import { LeaveCard } from '../components/LeaveCard';
import { HomeMotion } from '../common/motion/Home';
import { Link } from 'react-router-dom';
import { SectionMotion } from '../common/motion/Section';
import { SectionHeader } from '../components/SectionHeader';
import { SkillCard } from '../components/SkillCard';
import { CommonCard } from '../components/CommonCard';
import { IconBolt, IconRobot, IconClockPlay } from '@tabler/icons-react';

export const Home = () => {
  const { description, resume, wrapImg, image } = HomeMotion;
  const { section } = SectionMotion;
  
  // Skills data
  const skills = [
    { label: 'Power Automate', icon: <IconBolt /> },
    { label: 'Copilot Studio', icon: <IconRobot /> },
    { label: 'Power Apps', icon: <IconRobot /> },
    { label: 'Openclaw', icon: <IconRobot /> },
  ];
  
  // Experience data
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
    <section className="flex flex-col lg:flex-row h-full p-6 items-center min-h-[70vh]">
      <motion.div
        className="flex flex-1 flex-col space-y-6 items-center md:items-start"
        initial={description.initial}
        animate={description.animated}
        transition={description.transition}
      >
        <div className="flex gap-2 text-md lg:text-2xl font-medium font-sora">
          <span>Hi there!</span>{' '}
          <div className="ml-1 animate-waving-hand">👋</div>
        </div>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl">
          Ricardo Alexandre
        </h1>
        <h2 className="text-teal-500 font-bold text-xl md:text-3xl">
          Power Platform Specialist
        </h2>
        <p className="text-center md:text-start text-xs md:text-base">
          Power Platform experience since 2021, helping clients unblock blockers, 
          implement quick solutions, and architect Power Platform projects.
        </p>
        <Link to="https://www.linkedin.com/in/ricardonevesalexandre/" target="_blank" rel="noopener noreferrer">
          <motion.div
            initial={resume.initial}
            animate={resume.animated}
            transition={resume.transition}
            className="rounded-3xl w-max border px-4 py-2 border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-black hover:border-teal-500"
          >
            Connect on LinkedIn
          </motion.div>
        </Link>
      </motion.div>
      <motion.div
        initial={wrapImg.initial}
        animate={wrapImg.animated}
        transition={wrapImg.transition}
        className="flex flex-1 items-center justify-center bg-gradient-to-bl from-emerald-500 via-emerald-900 to-black overflow-hidden relative"
      >
        <motion.img
          initial={image.initial}
          animate={image.animated}
          transition={image.transition}
          src="/profile.jpg"
          alt="Ricardo Alexandre"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </motion.div>

      <LeaveCard label="Power Platform" />
      
      {/* Skills Section */}
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="w-full space-y-6 mt-12"
      >
        <SectionHeader
          icon={<IconBolt />}
          label="Skills"
          description="List of my skills"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
        </div>
      </motion.section>
      
      {/* Experience Section */}
      <motion.section
        initial={section.initial}
        animate={section.animated}
        transition={section.transition}
        className="w-full space-y-6"
      >
        <SectionHeader
          icon={<IconClockPlay />}
          label="Experience"
          description="My professional career journey"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiences.map((experience) => (
            <CommonCard key={experience.id} {...experience} />
          ))}
        </div>
      </motion.section>
    </section>
  );
};
