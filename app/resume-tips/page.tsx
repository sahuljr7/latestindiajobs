import type { Metadata } from "next"
import Breadcrumb from "@/components/breadcrumb"
import { CheckCircle, AlertCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Resume Tips - LatestIndiaJobs",
  description: "Expert resume writing tips to help you create a standout resume and land your dream job.",
}

export default function ResumeTipsPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/blog" },
          { label: "Resume Tips", href: "/resume-tips" },
        ]}
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">Resume Writing Tips</h1>

        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">
            Create a Resume That Gets You Noticed
          </h2>
          <p className="text-blue-700 dark:text-blue-400">
            Your resume is often the first impression you make on potential employers. Follow these expert tips to
            create a standout resume that showcases your skills and experience effectively.
          </p>
        </div>

        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              1. Tailor Your Resume for Each Job
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                One of the most important resume tips is to customize your resume for each job application. This doesn't
                mean rewriting your entire resume, but rather adjusting certain sections to highlight the skills and
                experiences most relevant to the position.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Review the job description</span> and
                    identify key skills and requirements.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Prioritize relevant experiences
                    </span>{" "}
                    that match what the employer is looking for.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Use industry keywords</span> that
                    might be used in applicant tracking systems (ATS).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">2. Choose the Right Format</h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                The format of your resume should be determined by your career history and the position you're applying
                for. There are three main resume formats:
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Chronological</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Lists work history in reverse chronological order. Best for candidates with a strong, consistent
                    work history.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Functional</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Emphasizes skills over work history. Good for career changers or those with employment gaps.
                  </p>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Combination</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Blends chronological and functional formats. Highlights both skills and work experience.
                  </p>
                </div>
              </div>
              <div className="flex items-start bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg">
                <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-yellow-700 dark:text-yellow-400">
                  Most recruiters prefer the chronological format as it clearly shows your career progression. Only use
                  functional formats if absolutely necessary.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              3. Craft a Strong Professional Summary
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Your professional summary is a brief statement at the top of your resume that highlights your most
                relevant skills and experiences. Think of it as your elevator pitch.
              </p>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Example of a Strong Summary:</h3>
                <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <p className="text-gray-600 dark:text-gray-400 italic">
                    "Results-driven Software Engineer with 5+ years of experience developing scalable web applications.
                    Proficient in React, Node.js, and AWS. Reduced application load time by 40% and implemented CI/CD
                    pipelines that decreased deployment time by 60%. Seeking to leverage technical expertise in a Senior
                    Developer role at XYZ Company."
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Keep it concise</span> - aim for 3-5
                    impactful sentences.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Include quantifiable achievements
                    </span>{" "}
                    whenever possible.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Mention your career goals</span> as
                    they relate to the position.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              4. Highlight Achievements, Not Just Duties
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Instead of simply listing job responsibilities, focus on your accomplishments. Use the PAR method:
                Problem, Action, Result.
              </p>
              <div className="mb-4">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">Example:</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-1 font-medium">Instead of:</p>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "Responsible for managing social media accounts and creating content."
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-600 dark:text-gray-400 mb-1 font-medium">Write:</p>
                    <p className="text-gray-600 dark:text-gray-400 italic">
                      "Increased social media engagement by 75% by implementing a strategic content calendar and
                      interactive campaigns, resulting in a 25% boost in website traffic and 15% growth in sales."
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex items-start bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <p className="text-sm text-blue-700 dark:text-blue-400">
                  Use action verbs like "achieved," "implemented," "increased," "reduced," "developed," and "managed" to
                  start your bullet points.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
              5. Keep It Concise and Relevant
            </h2>
            <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Recruiters typically spend only 6-7 seconds scanning a resume initially. Make those seconds count by
                keeping your resume concise and focused on relevant information.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Aim for 1-2 pages</span> - one page
                    for early career, two pages maximum for experienced professionals.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">Use bullet points</span> instead of
                    paragraphs for better readability.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Only include relevant work experience
                    </span>{" "}
                    from the past 10-15 years.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-800 dark:text-gray-200">
                      Remove outdated skills or technologies
                    </span>{" "}
                    unless they're specifically relevant to the job.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold text-blue-800 dark:text-blue-300 mb-3">Need More Help?</h2>
          <p className="text-blue-700 dark:text-blue-400 mb-4">
            Check out our blog for more detailed resume guides and examples, or consider our professional resume review
            service.
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
