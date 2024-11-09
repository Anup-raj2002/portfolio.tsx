import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from "./ui/button"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">ANUP RAJ</h1>
        
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="text-gray-600 dark:text-gray-300"
          >
            {theme === 'dark' ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMenu}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block bg-white dark:bg-gray-800 md:bg-transparent`}>
        <ul className="container mx-auto px-4 py-2 md:py-0 md:flex md:justify-end md:space-x-4">
          {['home', 'skills', 'projects', 'education', 'contact', 'talk-to-me'].map((section) => (
            <li key={section}>
              <Button
                variant="ghost"
                onClick={() => scrollToSection(section)}
                className="w-full text-left md:w-auto"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
