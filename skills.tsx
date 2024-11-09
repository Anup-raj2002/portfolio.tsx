import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

const skills = [
  { name: 'HTML5', level: 90 },
  { name: 'CSS3', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Python', level: 75 },
  { name: 'C', level: 70 },
  { name: 'Bootstrap', level: 80 },
  { name: 'React.js', level: 75 },
  { name: 'Data Structures', level: 70 },
  { name: 'Algorithms', level: 70 },
]

function SkillBar({ skill, index }) {
  const barRef = useRef(null)
  const isInView = useInView(barRef, { once: true })

  return (
    <motion.div
      ref={barRef}
      initial={{ width: 0, opacity: 0 }}
      animate={isInView ? { width: '100%', opacity: 1 } : { width: 0, opacity: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="mb-6"
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-200">{skill.name}</span>
        <span className="text-sm font-medium text-blue-600 dark:text-yellow-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
        <motion.div
          className="h-2.5 rounded-full bg-blue-600 dark:bg-yellow-400"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">My Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
