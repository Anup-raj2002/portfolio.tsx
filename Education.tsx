import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"

export default function Education() {
  return (
    <section id="education" className="py-20">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Education</CardTitle>
        </CardHeader>
        <CardContent>
          <h3 className="text-xl font-semibold mb-2">Bachelor of Technology (B.Tech)</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Computer Science and Engineering
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            KCC Institute of Technology and Management
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            09/2022 – 09/2026
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Greater Noida, India
          </p>
        </CardContent>
      </Card>
    </section>
  )
}
