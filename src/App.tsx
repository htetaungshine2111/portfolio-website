function App() {
  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <nav className="fixed top-0 left-0 w-full bg-gray-950/80 backdrop-blur-md border-b border-gray-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">
            <span className="hidden md:block">Htet Aung Shine</span>

            <span className="md:hidden">HAS</span>
          </h1>

          <div className="flex gap-6 text-gray-300">
            <a href="#about" className="hover:text-white">
              About
            </a>

            <a href="#skills" className="hover:text-white">
              Skills
            </a>

            <a href="#experience" className="hover:text-white">
              Experience
            </a>

            <a href="#projects" className="hover:text-white">
              Projects
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
        <img
          src="/profile.jpeg"
          alt="Htet Aung Shine"
          className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
        <h1 className="text-6xl md:text-7xl font-bold mb-4">Htet Aung Shine</h1>
        <h2 className="text-2xl md:text-3xl text-indigo-400 font-semibold mt-4">
          Software Engineer
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl">
          Software Engineer with 9+ years of experience building enterprise
          applications, REST APIs, financial systems, HR platforms, POS systems,
          and AI-powered web applications.
        </p>

        <div className="flex gap-4 mt-8">
          <a
            href="#projects"
            className="bg-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-black"
          >
            Contact Me
          </a>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-gray-300 leading-relaxed text-lg">
              I am a Software Engineer with over 9 years of experience
              developing enterprise web applications, REST APIs, financial
              systems, HR platforms, telecommunications solutions, POS systems,
              and learning management systems.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-6">
              Throughout my career in Myanmar, I worked as a Web Developer and
              Software Engineer, building and maintaining business-critical
              applications using PHP, Laravel, Vue.js, MySQL, PostgreSQL, REST
              APIs, and GraphQL. I contributed to financial platforms, HR
              systems, POS solutions, telecommunications applications, and
              educational systems serving real-world users and organizations. I
              was also involved in application deployment, server management,
              and production releases.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-6">
              In Japan, I worked as a System Engineer, developing and
              maintaining enterprise software solutions using Java, Node.js,
              Excel VBA/Macros, cron jobs, and automation scripts. I contributed
              to dashboard development, feature enhancements, system
              maintenance, and business process improvements within enterprise
              environments.
            </p>

            <p className="text-gray-300 leading-relaxed text-lg mt-6">
              Recently, I have been focusing on modern full-stack development
              using React, TypeScript, Node.js, Express, Prisma, PostgreSQL, and
              AI-powered applications. My latest project is an AI-powered Resume
              & Career Platform that provides resume analysis, job matching,
              cover letter generation, interview preparation, and analytics
              dashboards.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-6">Quick Facts</h3>

            <ul className="space-y-4 text-gray-300">
              <li>📍 Kent, Washington, USA</li>
              <li>💻 9+ Years of Software Development Experience</li>
              <li>🇯🇵 Former System Engineer in Japan</li>
              <li>🌏 Professional Experience in Myanmar, Japan, and USA</li>
              <li>🚀 Full-Stack Developer (React, Node.js, Laravel, Vue.js)</li>
              <li>🔗 REST API & GraphQL Development</li>
              <li>🗄️ PostgreSQL, MySQL & Prisma</li>
              <li>🤖 AI-Powered Application Development</li>
              <li>🏢 Built Financial, HR, POS & Telecom Systems</li>
              <li>☁️ Deployed Applications to Production Environments</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="highlights" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Professional Highlights</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            ✅ 9+ Years Software Development Experience
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            🇯🇵 Former System Engineer in Japan
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            🚀 Built Financial, HR, POS & Telecom Systems
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            🔗 Developed REST APIs & GraphQL Services
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            🤖 Built AI-Powered Full-Stack Applications
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            🌏 Professional Experience in Myanmar, Japan & USA
          </div>
        </div>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Frontend</h3>

            <p className="text-gray-300">
              React, TypeScript, JavaScript, Vue.js, HTML5, CSS3, Tailwind CSS
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Backend</h3>

            <p className="text-gray-300">
              Node.js, Express.js, PHP, Laravel, Java, REST APIs, GraphQL, JWT
              Authentication
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Database</h3>

            <p className="text-gray-300">PostgreSQL, MySQL, Prisma ORM</p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">DevOps & Tools</h3>

            <p className="text-gray-300">
              Git, GitHub, Vercel, Render, Supabase, Linux, Cron Jobs
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">Automation</h3>

            <p className="text-gray-300">
              Excel VBA, Macros, Process Automation
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold mb-4">
              AI & Modern Development
            </h3>

            <p className="text-gray-300">
              Gemini AI, AI Integration, Resume Analysis Systems, Interview
              Preparation Tools
            </p>
          </div>
        </div>
      </section>

      <section id="languages" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Languages</h2>

        <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <ul className="space-y-3 text-gray-300">
            <li>🇲🇲 Burmese — Native</li>
            <li>🇺🇸 English — Professional Working Proficiency</li>
            <li>🇯🇵 Japanese — Professional Working Proficiency</li>
          </ul>
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Professional Experience</h2>

        <div className="space-y-8">
          {/* Japan */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">System Engineer</h3>

            <p className="text-indigo-400 mt-2">
              Japan Hundsun Software Inc. | Tokyo, Japan
            </p>

            <p className="text-gray-500 mt-1">Aug 2022 – Mar 2025</p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>
                Developed automation tools using Java, Python, Node.js, and
                Excel VBA/Macros.
              </li>
              <li>
                Implemented new features and enhancements for enterprise web
                applications and dashboards.
              </li>
              <li>
                Created automation scripts and scheduled tasks using cron jobs.
              </li>
              <li>
                Performed testing, debugging, issue investigation, and
                production support.
              </li>
              <li>
                Collaborated with cross-functional teams to deliver reliable
                enterprise solutions.
              </li>
            </ul>
          </div>

          {/* Global Technology */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">Software Engineer</h3>

            <p className="text-indigo-400 mt-2">
              Global Technology Company | Yangon, Myanmar
            </p>

            <p className="text-gray-500 mt-1">Sep 2021 – Jul 2022</p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>
                Designed and developed backend APIs for mobile and web platforms
                using Laravel and PostgreSQL.
              </li>
              <li>
                Built and maintained telecommunications and enterprise business
                applications.
              </li>
              <li>
                Supported production systems, deployments, and application
                releases.
              </li>
              <li>
                Collaborated with developers and stakeholders to deliver new
                features and improvements.
              </li>
            </ul>
          </div>

          {/* Better HR */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">Web Developer</h3>

            <p className="text-indigo-400 mt-2">Better HR | Yangon, Myanmar</p>

            <p className="text-gray-500 mt-1">Jan 2020 – May 2021</p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>
                Developed HR and payroll platform features using Laravel,
                Vue.js, MySQL, and REST APIs.
              </li>
              <li>Built API integrations and business workflow solutions.</li>
              <li>
                Improved user experience, performance, and system reliability.
              </li>
              <li>
                Participated in feature planning, testing, deployment, and
                maintenance.
              </li>
            </ul>
          </div>

          {/* mBridge */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">Web Developer</h3>

            <p className="text-indigo-400 mt-2">
              mBridge Co., Ltd | Yangon, Myanmar
            </p>

            <p className="text-gray-500 mt-1">Jan 2019 – Dec 2019</p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>
                Developed and maintained enterprise web applications using
                Laravel and Vue.js.
              </li>
              <li>
                Improved website performance, responsiveness, and usability.
              </li>
              <li>
                Implemented new features and supported production systems.
              </li>
            </ul>
          </div>

          {/* SoftComm */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">Programmer</h3>

            <p className="text-indigo-400 mt-2">
              SoftComm Co., Ltd | Yangon, Myanmar
            </p>

            <p className="text-gray-500 mt-1">Jun 2016 – Jul 2018</p>

            <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
              <li>
                Developed business websites and POS systems using PHP frameworks
                and SQL databases.
              </li>
              <li>Gathered requirements and implemented software solutions.</li>
              <li>
                Participated in testing, deployment, and production support.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="current-focus" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Current Focus</h2>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold">
            AI Resume & Career Platform
          </h3>

          <p className="text-indigo-400 mt-2">
            React • TypeScript • Node.js • Prisma • PostgreSQL • Gemini AI
          </p>

          <p className="text-gray-300 mt-4 leading-relaxed">
            Currently building and maintaining a full-stack AI-powered career
            platform that provides resume analysis, job matching, cover letter
            generation, interview preparation, analytics dashboards, and
            user-specific data management.
          </p>
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* AI Resume Platform */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">
              AI Resume & Career Platform
            </h3>

            <p className="text-indigo-400 mt-2">
              React • TypeScript • Node.js • Prisma • PostgreSQL • Gemini AI
            </p>

            <p className="text-gray-300 mt-4">
              Full-stack AI-powered platform for resume analysis, job matching,
              cover letter generation, interview preparation, and analytics
              dashboards.
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
              <li>JWT Authentication</li>
              <li>Resume Analysis & AI Feedback</li>
              <li>Cover Letter Generator</li>
              <li>Interview Question Generator</li>
              <li>Dashboard Analytics</li>
            </ul>

            <div className="flex gap-4 mt-6">
              <a
                href="https://ai-resume-job-platform-five.vercel.app"
                target="_blank"
                rel="noreferrer"
                className="bg-indigo-600 px-4 py-2 rounded-lg"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/htetaungshine2111/ai-resume-job-platform"
                target="_blank"
                rel="noreferrer"
                className="border border-gray-600 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Better HR */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">Better HR</h3>

            <p className="text-indigo-400 mt-2">
              Laravel • Vue.js • MySQL • REST APIs • GraphQL
            </p>

            <p className="text-gray-300 mt-4">
              HR and payroll management platform used by businesses to manage
              employees, attendance, payroll, and HR processes.
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
              <li>HR Management Features</li>
              <li>Payroll Functionality</li>
              <li>REST API Development</li>
              <li>Third-Party Integrations</li>
            </ul>
          </div>

          {/* Amay Mother Finance */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">Amay Mother Finance</h3>

            <p className="text-indigo-400 mt-2">Laravel • MySQL • REST APIs</p>

            <p className="text-gray-300 mt-4">
              Financial platform supporting loan management, customer
              operations, and mobile application APIs.
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
              <li>Financial Services Platform</li>
              <li>Mobile Application APIs</li>
              <li>Loan Management Features</li>
              <li>Backend Development</li>
            </ul>
          </div>

          {/* GlobalNet */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">GlobalNet</h3>

            <p className="text-indigo-400 mt-2">
              Laravel • Vue.js • Enterprise Applications
            </p>

            <p className="text-gray-300 mt-4">
              Telecommunications platform supporting business operations,
              dashboards, and enterprise workflows.
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
              <li>Telecommunications Solutions</li>
              <li>Business Dashboards</li>
              <li>Enterprise Web Applications</li>
              <li>System Enhancements</li>
            </ul>
          </div>

          {/* University of Nursing Yangon */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="text-2xl font-semibold">
              University of Nursing Yangon LMS
            </h3>

            <p className="text-indigo-400 mt-2">Laravel • MySQL</p>

            <p className="text-gray-300 mt-4">
              Learning Management System for students, instructors, and
              administrators.
            </p>

            <ul className="mt-4 text-gray-300 list-disc list-inside space-y-1">
              <li>Student Learning Portal</li>
              <li>Course Management</li>
              <li>Administrative Features</li>
              <li>Educational Platform Development</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="text-4xl font-bold mb-8">Contact</h2>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <p className="text-gray-300 text-lg mb-6">
            I am currently seeking Software Engineer, Full-Stack Developer, and
            Backend Developer opportunities. Feel free to reach out.
          </p>

          <div className="space-y-4 text-gray-300">
            <p>📍 Kent, Washington, USA</p>

            <p>📧 Email: htshine21@gmail.com</p>

            <p>
              💼 LinkedIn:
              <a
                href="https://linkedin.com/in/htetaung-shine"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 ml-2"
              >
                linkedin.com/in/htetaung-shine
              </a>
            </p>

            <p>
              🐙 GitHub:
              <a
                href="https://github.com/htetaungshine2111"
                target="_blank"
                rel="noreferrer"
                className="text-indigo-400 hover:text-indigo-300 ml-2"
              >
                github.com/htetaungshine2111
              </a>
            </p>
          </div>

          <div className="mt-8">
            <a
              href="/resume.pdf"
              download
              className="bg-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-500"
            >
              Download Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-800 py-8 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-gray-400">
          © 2026 Htet Aung Shine. Built with React, TypeScript and Tailwind CSS.
        </div>
      </footer>
    </div>
  );
}

export default App;
