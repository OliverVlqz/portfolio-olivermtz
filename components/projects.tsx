'use client'
import React, { useRef } from 'react'
import SectionHeading from './section-heading'
import {projectsData} from '@/lib/data' 
import Project from './project'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context/active-section-context'

export default function Projects() {
  const {ref, inView} = useInView({
    threshold: 0.5,
  })
  const{setActiveSection}= useActiveSectionContext()
  useEffect(() => {
    if(inView){
      setActiveSection('Projects')
    }
  },[inView, setActiveSection])

  return (
    <section ref={ref} id='projects' className='scroll-mt-28'>
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
