import React from 'react'
import { HomePageFirstSection } from '../layout/sections/main/HomePageFirstSection'
import { Skills } from '../layout/sections/skills/Skills'
import { AboutSection } from '../layout/sections/about/AboutSection'
import { Portfolio } from '../layout/sections/portfolio/Portfolio'
import Background from "../assets/images/elips.svg";

export const Home = () => {
  return (
    <>
      <HomePageFirstSection />
      <Skills />
      <AboutSection backgroundSrc={Background} />
      <Portfolio />
    </>
  )
}