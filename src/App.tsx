import './App.css'
import ExperienceCard from './components/ExperienceCard/ExperienceCard'
import { experienceData } from './components/ExperienceCard/experience'
import PortfolioCard from './components/PortfolioCard/PortfolioCard'
import { portfolioData } from './components/PortfolioCard/portfolio'
import Button from './components/Button/Button'
import SkillChip from './components/SkillChip/SkillChip'

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
      <section className="pt-30 pb-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Lars Remund</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Software Engineer & UX/UI Designer</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Human Experience Design and Computer Science student with experience in React, TypeScript, 
            and full-stack development. Passionate about creating user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#portfolio" variant="primary" size="lg">
              View My Work
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get In Touch
            </Button>
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
                <SkillChip skill="React" variant="blue" />
                <SkillChip skill="TypeScript" variant="green" />
                <SkillChip skill="UX/UI Design" variant="purple" />
                <SkillChip skill="Python" variant="orange" />
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
            {portfolioData.map((project, index) => (
              <PortfolioCard
                key={index}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                gradientFrom={project.gradientFrom}
                gradientTo={project.gradientTo}
                projectName={project.projectName}
              />
            ))}
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
                <Button href="https://www.linkedin.com/in/lars-remund-347a10213/" target="_blank" rel="noopener noreferrer" variant="primary">
                  LinkedIn
                </Button>
                <Button href="https://github.com/laremund" target="_blank" rel="noopener noreferrer" variant="secondary">
                  GitHub
                </Button>
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
                <Button type="submit" variant="primary" className="w-full">
                  Send Message
                </Button>
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
