import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import {projectsData} from '@/lib/data' 
import Project from './project'

export default function Projects() {
  return (
    <section id='projects' className='scroll-mt-28'>
     <SectionHeading>My projects</SectionHeading>
     {
        projectsData.map((projects, index) => (
            <React.Fragment key={index}>
            <Project {...projects}/>
            </React.Fragment>
            
        )

        
        )
     }
    </section>
  )
} 
