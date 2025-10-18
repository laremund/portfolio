import './App.css'
import ExperienceCard from './components/ExperienceCard/ExperienceCard'
import { experienceData } from './components/ExperienceCard/experience'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">Lars Remund</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-gray-900 transition-colors">Skills</a>
              <a href="#portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>
            <button className="md:hidden text-gray-600 hover:text-gray-900">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
              <a href="#about" className="block px-3 py-2 text-gray-600 hover:text-gray-900">About</a>
              <a href="#experience" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#skills" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Skills</a>
              <a href="#portfolio" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-gray-900">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Lars Remund</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Software Engineer & UX/UI Designer</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Human Experience Design and Computer Science student with experience in React, TypeScript, 
            and full-stack development. Passionate about creating user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#portfolio" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              View My Work
            </a>
            <a href="#contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6">
                I'm a Human Experience Design and Computer Science student at Utah State University, 
                passionate about creating digital experiences that are both beautiful and functional. 
                With experience in front-end development and UX/UI design, I bridge the gap between 
                design and development.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                I've worked on projects serving 25k+ users and generating $20M+ in revenue, 
                giving me real-world experience in building scalable, user-focused applications. 
                I'm always eager to learn new technologies and contribute to meaningful projects.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">React</span>
                <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">TypeScript</span>
                <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">UX/UI Design</span>
                <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">Python</span>
              </div>
            </div>
            <div className="bg-gray-200 h-80 rounded-lg flex items-center justify-center">
              <span className="text-gray-500 text-lg">Professional Photo Placeholder</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Experience</h2>
          <div className="space-y-8">
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                company={experience.company}
                location={experience.location}
                duration={experience.duration}
                responsibilities={experience.responsibilities}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 skill-icon">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Frontend Development</h3>
              <ul className="text-gray-600 space-y-2">
                <li>React & TypeScript</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Vite & Modern Build Tools</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 skill-icon">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">UX/UI Design</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Figma & Adobe Creative Suite</li>
                <li>User Research & Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 skill-icon">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">Development Process</h3>
              <ul className="text-gray-600 space-y-2">
                <li>Agile & Scrum Methodologies</li>
                <li>Git & Version Control</li>
                <li>Automated Testing</li>
                <li>AWS & Cloud Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Portfolio</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">E-Commerce Platform</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Modern Shopping Experience</h3>
                <p className="text-gray-600 mb-4">
                  A full-stack e-commerce platform built with React, TypeScript, and Node.js. 
                  Features include user authentication, payment processing, and inventory management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">TypeScript</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
              <div className="bg-gradient-to-r from-green-500 to-teal-600 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Task Management App</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Team Collaboration Tool</h3>
                <p className="text-gray-600 mb-4">
                  A collaborative task management application with real-time updates, 
                  drag-and-drop functionality, and team communication features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm">CSS3</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Weather Dashboard</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Interactive Weather App</h3>
                <p className="text-gray-600 mb-4">
                  A responsive weather dashboard with location-based forecasts, 
                  interactive maps, and detailed weather analytics.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">API Integration</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Chart.js</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
              <div className="bg-gradient-to-r from-red-500 to-orange-600 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Social Media Dashboard</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Analytics Platform</h3>
                <p className="text-gray-600 mb-4">
                  A comprehensive social media analytics dashboard with data visualization, 
                  content scheduling, and performance tracking across multiple platforms.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">D3.js</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
              <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Mobile Banking App</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Financial Management</h3>
                <p className="text-gray-600 mb-4">
                  A secure mobile banking application with biometric authentication, 
                  transaction history, and budget tracking features.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React Native</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">Security</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden portfolio-card">
              <div className="bg-gradient-to-r from-teal-500 to-green-600 h-48 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">Learning Platform</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Online Education Hub</h3>
                <p className="text-gray-600 mb-4">
                  An interactive learning platform with video streaming, progress tracking, 
                  and collaborative features for online education.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Vue.js</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">MongoDB</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">WebRTC</span>
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">Live Demo</a>
                  <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Let's Connect</h3>
              <p className="text-lg text-gray-600 mb-8">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📧</span>
                  <a href="mailto:larsremund2@gmail.com" className="text-blue-600 hover:text-blue-800">
                    larsremund2@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📱</span>
                  <span className="text-gray-600">(636) 634-1260</span>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-4">📍</span>
                  <span className="text-gray-600">Pleasant Grove, UT</span>
                </div>
              </div>
              <div className="flex space-x-4 mt-8">
                <a href="https://www.linkedin.com/in/lars-remund-347a10213/" target="_blank" rel="noopener noreferrer" 
                   className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/laremund" target="_blank" rel="noopener noreferrer" 
                   className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h4 className="text-xl font-semibold mb-6 text-gray-900">Quick Message</h4>
              <form className="space-y-4">
                <div>
                  <input type="text" placeholder="Your Name" 
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <input type="email" placeholder="Your Email" 
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
                <div>
                  <textarea rows={4} placeholder="Your Message" 
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                </div>
                <button type="submit" 
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Lars Remund. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
