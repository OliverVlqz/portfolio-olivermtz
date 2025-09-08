import React from 'react'
import { BsBank, BsPersonArmsUp } from 'react-icons/bs'
import { LuGraduationCap, LuLaptop } from 'react-icons/lu'
import Siahva from '@/public/Siahva.png'
import MapLocation from '@/public/MapLocation.png'
import SiahvaApp from '@/public/SiahvaApp.png'
import Entrypay from '@/public/EntryPayLandingPage.png'
import WareHouse from '@/public/WarehouseManager.png'
import ChatMedia from '@/public/ChatMedia.png'
import AdoptionCenter from '@/public/AdoptionCenter.png'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const experiencesData = [
  {
    title: 'My First Steps in Programming',
    location: 'Morelos, MX',
    description:
      'I began programming in C++ and Java during high school. After completing various projects, I graduated with a degree in computing, specializing in the Physical-Mathematical field.',
    icon: React.createElement(LuGraduationCap),
    date: '2017',
  },
  {
    title: 'University Enrollment',
    location: 'Morelos, MX',
    description:
      'I began my academic journey in Software Development Engineering, gaining experience in Java, JavaScript, and problem-solving through multiple academic and personal projects.',
    icon: React.createElement(BsBank),
    date: '2022 - 2024',
  },
  {
    title: 'Professional Internship at EntryPay',
    location: 'Morelos, MX',
    description:
      'After working on several web and mobile development projects, I completed my professional internship at EntryPay, a technology company specialized in access control and payment solutions.',
    icon: React.createElement(LuLaptop),
    date: '2024 - 2025',
  },
  {
    title: 'Engineering in Software Development',
    location: 'Morelos, MX',
    description:
      'I am currently completing my Software Development and Management Engineering degree, eager to contribute what I’ve learned to impactful software projects.',
    icon: React.createElement(BsPersonArmsUp),
    date: '2025 - Present',
  },
] as const

export const projectsData = [
  {
    title: 'EntryPay',
    description:
      'A landing page designed to inform users about the Entrypay product, provide a quotation feature, and facilitate contact for detailed information about its services.',
    tags: ['Nextjs', 'Sequelize', 'MUI', 'PostgreSQL', 'Contentful'],
    imageUrl: Entrypay,
  },

  {
    title: 'Warehouse Manager',
    description:
      'A web application designed to manage a warehouse, allowing users to add, edit, and delete entrys and outs of products. Also, it provides a graphic information of products.',
    tags: ['React', 'Bootstrap', 'SpringBoot', 'MySQL'],
    imageUrl: WareHouse,
  },
  {
    title: 'Adoption Center',
    description:
      'Web platform designed to streamline animal adoption processes, showcase available pets, and support the management of adoption centers.',
    tags: ['React', 'Tailwind', 'Docker', 'SpringBoot Security'],
    imageUrl: AdoptionCenter,
  },
  {
    title: 'ChatMedia',
    description:
      'A web application that allows users to publish images to each other. It also includes a feature for commenting and liking posts.',
    tags: ['React', 'Tailwind', 'Django', 'MySQL'],
    imageUrl: ChatMedia,
  },

  {
    title: 'Siahva',
    description:
      'This project allows users   make reservations and purchases available at the hotel, while administrators can manage all content.',
    tags: ['React', 'JavaScript', 'Tailwind', 'Java', 'SpringBoot'],
    imageUrl: Siahva,
  },
  {
    title: 'Siahva App',
    description:
      'A mobile application that enables users to reserve hotel rooms and purchase products. The app utilizes Firebase as a database to manage these products.',
    tags: ['React Native', 'Expo', 'FireBase', 'Java', 'SpringBoot'],
    imageUrl: SiahvaApp,
  },
 
] as const

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'Python',
  'Data Engineering',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Java',
  'Django',
  'MongoDB',
  'MySQL',
  'SpringBoot',
  'Tailwind',
  'Git',
  'Docker',
] as const
