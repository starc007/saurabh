'use client'

import Header from '@/components/Header'
import Identity from '@/components/Identity'
import TechStack from '@/components/TechStack'
import ProjectSection from '@/components/ProjectSection'

import TopStatusBar from '@/components/TopStatusBar'



const Home = () => {
  return (
    <>
      <TopStatusBar />
      <Header />
      <Identity />
      <ProjectSection />
      <TechStack />
    </>
  )
}

export default Home