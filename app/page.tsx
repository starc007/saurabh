'use client'

import Header from '@/components/Header'
import Identity from '@/components/Identity'
import TechStack from '@/components/TechStack'
import ProjectSection from '@/components/ProjectSection'
import Footer from '@/components/Footer'
import TopStatusBar from '@/components/TopStatusBar'
import Dock from '@/components/Dock'


const Home = () => {
  return (
    <div className="relative min-h-screen text-foreground/50 pt-32 pb-64 selection:bg-accent selection:text-black">
      <div className="max-w-[720px] mx-auto px-8 lg:px-0">
        <TopStatusBar />
        <Header />
        <Identity />
        <ProjectSection />
        <TechStack />
        <Footer />
      </div>
      <Dock />
    </div>
  )
}

export default Home