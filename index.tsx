import Head from 'next/head'
import { useState, useEffect } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import TalkToMe from '../components/TalkToMe'
import Footer from '../components/Footer'

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <ThemeProvider attribute="class">
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Head>
          <title>ANUP RAJ - Portfolio</title>
          <meta name="description" content="Portfolio of ANUP RAJ, Front-end Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        <main className="container mx-auto px-4 py-8">
          <Hero />
          <Skills />
          <Projects />
          <Education />
          <Contact />
          <TalkToMe />
        </main>

        <Footer />
      </div>
    </ThemeProvider>
  )
}
