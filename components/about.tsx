'use client'
import SectionHeading from './section-heading'
import { motion } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const { ref } = useSectionInView('About')
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] 
  text-center leading-8
  sm:mb-40
  scroll-mt-28 "
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am a{' '}
        <span className="font-medium">
          Software Development and Management Engineering
        </span>{' '}
        student with experience in designing and building web applications, from
        landing pages to full service platforms. I have worked in startups using
        <span className="font-medium"> Scrum</span> and management tools like
        <span className="font-medium"> Jira</span>.
      </p>

      <p className="mb-3">
        My core stack includes{' '}
        <span className="font-medium">
          React, Next.js, Spring Boot, TypeScript, and MongoDB
        </span>
        , with additional experience in{' '}
        <span className="font-medium">
          Sequelize, Stripe, internationalization, and SendGrid
        </span>
        . I am also familiar with{' '}
        <span className="font-medium">React Native</span>.
      </p>

      <p>
        Currently, I am specializing in{' '}
        <span className="font-medium">data engineering</span>, developing sales
        management systems that transform data into valuable analytics and
        predictions, helping businesses optimize decision-making. I am motivated
        by creating{' '}
        <span className="font-medium">
          scalable, efficient, and impactful solutions
        </span>{' '}
        that improve user experience.
      </p>
    </motion.section>
  )
}
