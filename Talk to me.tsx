import { motion } from 'framer-motion'
import { Mail, MessageSquare } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function TalkToMe() {
  return (
    <section id="talk-to-me" className="py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Talk to Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Let's connect and explore exciting opportunities together!
          </p>
          <div className="space-y-4">
            <motion.div 
              className="flex items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Mail className="mr-4 h-6 w-6 text-blue-600 dark:text-yellow-400" />
              <a href="mailto:rajanup835@gmail.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300">
                rajanup835@gmail.com
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <MessageSquare className="mr-4 h-6 w-6 text-blue-600 dark:text-yellow-400" />
              <a href="https://wa.me/917903693971" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-yellow-400 transition-colors duration-300">
                +91 7903693971
              </a>
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
