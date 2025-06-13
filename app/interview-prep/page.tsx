import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import { CheckCircle, XCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Interview Preparation - LatestIndiaJobs",
  description: "Comprehensive interview preparation tips and strategies to help you ace your next job interview.",
}

export default function InterviewPrepPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: "Interview Preparation", href: "/interview-prep" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Interview Preparation Guide</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Ace Your Next Interview</h2>
          <p className="text-blue-700 dark:text-blue-400">
            Interviews can be nerve-wracking, but with proper preparation, you can showcase your skills and experience
            effectively. This guide covers everything you need to know to make a great impression.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">1. Research the Company</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                One of the most important steps in interview preparation is researching the company thoroughly. This
                demonstrates your interest and helps you tailor your responses to align with the company's values and
                needs.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Visit the company website</span> to
                    understand their products/services, mission, vision, and values.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Check recent news articles</span>{" "}
                    about the company to stay updated on their latest developments.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Research the company's competitors
                    </span>{" "}
                    to understand the industry landscape.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Look up your interviewers on LinkedIn
                    </span>{" "}
                    to find common ground or understand their background.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              2. Prepare for Common Questions
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                While every interview is different, there are common questions that you should be prepared to answer.
                Practice your responses but avoid sounding rehearsed.
              </p>
              <div className="space-y-6 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Tell me about yourself</h3>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Tips:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Keep it professional and relevant to the position</li>
                      <li>
                        Structure your answer: Present (your current role) → Past (relevant experience) → Future (why
                        you're interested in this role)
                      </li>
                      <li>Aim for 1-2 minutes in length</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    What are your strengths and weaknesses?
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Tips:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      <li>For strengths: Choose qualities relevant to the job and provide specific examples</li>
                      <li>
                        For weaknesses: Be honest but strategic - mention a real weakness that isn't critical to the job
                      </li>
                      <li>Explain how you're working to improve your weaknesses</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Why do you want to work for this company?
                  </h3>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-2 font-medium">Tips:</p>
                    <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-1">
                      <li>Show that you've researched the company</li>
                      <li>Connect the company's values or mission to your own career goals</li>
                      <li>
                        Mention specific aspects of the company that appeal to you (culture, innovation, products)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex items-start bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  Practice your answers out loud or with a friend. Record yourself to identify areas for improvement in
                  your delivery and body language.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              3. Prepare the STAR Method for Behavioral Questions
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Behavioral questions ask about how you've handled situations in the past. The STAR method provides a
                structured way to answer these questions effectively.
              </p>
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">STAR Method:</h3>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    <li>
                      <span className="font-medium">S</span>ituation: Describe the context
                    </li>
                    <li>
                      <span className="font-medium">T</span>ask: Explain your responsibility
                    </li>
                    <li>
                      <span className="font-medium">A</span>ction: Detail the steps you took
                    </li>
                    <li>
                      <span className="font-medium">R</span>esult: Share the outcome and learnings
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Example Question:</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-2 italic">
                    "Tell me about a time when you had to deal with a difficult team member."
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Prepare 5-7 STAR stories covering different scenarios: leadership, teamwork, conflict resolution,
                    problem-solving, etc.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              4. Dress Appropriately and Plan Logistics
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                First impressions matter. Your appearance and punctuality can significantly impact how you're perceived.
              </p>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Dress Code:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          Research the company culture
                        </span>{" "}
                        and dress one level above what employees typically wear.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          When in doubt, business formal
                        </span>{" "}
                        is usually a safe choice.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Logistics:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-800 dark:text-gray-200">Plan your route in advance</span>{" "}
                        and aim to arrive 10-15 minutes early.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-800 dark:text-gray-200">For virtual interviews</span>,
                        test your technology beforehand and ensure a professional background.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">What to Bring:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          Extra copies of your resume
                        </span>{" "}
                        and a list of references.
                      </p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">
                        <span className="font-medium text-gray-800 dark:text-gray-200">Notepad and pen</span> to take
                        notes during the interview.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              5. Body Language and Communication
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                How you communicate goes beyond the words you say. Your body language and communication style can
                significantly impact the interviewer's perception.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Do:</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Maintain good eye contact</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Sit up straight with shoulders back</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Smile and show enthusiasm</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Use hand gestures naturally</p>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Listen actively and nod when appropriate</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">Don't:</h3>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Fidget or play with objects</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Cross your arms (appears defensive)</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Check your phone or watch</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Interrupt the interviewer</p>
                    </div>
                    <div className="flex items-start">
                      <XCircle className="w-5 h-5 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                      <p className="text-gray-600 dark:text-gray-400">Speak too quickly or mumble</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Remember to breathe and pause before answering difficult questions. It's okay to take a moment to
                  gather your thoughts rather than rushing into an answer.
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Practice Makes Perfect</h2>
          <p className="text-blue-700 dark:text-blue-400 mb-4">
            Consider scheduling a mock interview with a friend or using our interview preparation service to get
            personalized feedback.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/blog"
              className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-md hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
            >
              Read More Articles
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-md hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
