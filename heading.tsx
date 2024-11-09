import { Download } from 'lucide-react'
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

export default function Hero() {
  const downloadCV = () => {
    const link = document.createElement('a')
    link.href = '/ANUP_RAJ_CV.pdf'
    link.download = 'ANUP_RAJ_CV.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="home" className="py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Welcome to My Portfolio</CardTitle>
          <CardDescription className="text-2xl text-blue-600 dark:text-yellow-400">I'm ANUP RAJ</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <p className="text-gray-700 dark:text-gray-300 text-lg mb-6">
                A passionate Front-end Developer and third-year Computer Science Engineering student.
                I specialize in creating user-friendly and visually appealing web applications.
              </p>
              <div className="flex space-x-4">
                <Button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                  Get in Touch
                </Button>
                <Button 
                  onClick={downloadCV} 
                  variant="outline" 
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" /> Download CV
                </Button>
              </div>
            </div>
            <div className="relative w-[250px] h-[250px] flex-shrink-0">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Anup_pp-removebg-preview-JsclGSgFSsKTZqJfl8dhHgzktPggpT.png"
                alt="ANUP RAJ" 
                className="rounded-full w-full h-full object-cover object-center border-4 border-blue-400 dark:border-yellow-400 shadow-lg"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
