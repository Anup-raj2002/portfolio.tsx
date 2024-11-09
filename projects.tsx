import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const projects = [
  { name: 'Tour and Travels Website', description: 'A website assisting users in planning trips and adventurous activities. Developed using HTML, CSS, JavaScript, React.js, and Bootstrap.' },
  { name: 'Clean and Green Website', description: 'A platform connecting waste processing industries, shopkeepers, vendors, and individuals for eco-friendly and economical waste management solutions.' },
  { name: 'Swiggy Clone', description: 'A clone of the popular food delivery app Swiggy, developed using HTML, CSS, and JavaScript to strengthen fundamental web development skills.' },
  { name: 'Flappy Bird Game Clone', description: 'A clone of the Flappy Bird game developed using Pygame, a Python library. Features include game physics, object animation, score tracking, and obstacle creation.' },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Projects</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-gray-800 dark:text-gray-200">{project.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
