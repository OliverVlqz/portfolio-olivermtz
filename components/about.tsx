'use client'
import SectionHeading from './section-heading'
import { motion,  } from 'framer-motion'

import { useSectionInView } from '@/lib/hooks'

export default function About() {
  const {ref} = useSectionInView('About')
  return (
    <motion.section 
    ref={ref}
    className='mb-28 max-w-[45rem] 
    text-center leading-8
    sm:mb-40
    scroll-mt-28 '
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{ delay:0.175}}
    id='about'

    >
       <SectionHeading >About Me</SectionHeading>
        <p className='mb-3'>
        I am currently studying for a degree in{" "}
        <span className="font-medium">Cross-Platform software</span>, I decided to pursue my
        passion for programming. I started the university and i´m actually learning{" "}
        <span className="font-medium">full-stack web/mobile development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, SpringBoot, TypeScript and MongoDB
        </span>
        . I am also familiar with React Native. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">part-time position</span> as a software
        developer.
        </p>
        <p>
        <span className="italic">When I'm not coding</span>, I enjoy training at the gym, going out with my friends, and listening a lot of music. I also like{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">soft skills and psychology</span>. I'm also
        learning how to center a div.
        </p>
    </motion.section>
  )
}
