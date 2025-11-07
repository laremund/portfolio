import { useState, useEffect } from 'react'
import './App.css'
import ExperienceCard from './components/ExperienceCard/ExperienceCard'
import { experienceData } from './components/ExperienceCard/experience'
// import PortfolioCard from './components/PortfolioCard/PortfolioCard'
// import { portfolioData } from './components/PortfolioCard/portfolio'
import Button from './components/Button/Button'
import SkillChip from './components/SkillChip/SkillChip'
import SnakeGame from './components/SnakeGame/SnakeGame'
import profilePhoto from './assets/profile.jpeg'

function App() {

  const [showPopup, setShowPopup] = useState(false)
  const [showGame, setShowGame] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 5000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-[#0d1117]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#161b22] shadow-[0_4px_10px_-2px_#00000066,0_2px_4px_-1px_#0000004D]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-[#cccccc]">Lars Remund</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="transition-colors text-[#cccccc] hover:text-white">About</a>
              <a href="#experience" className="transition-colors text-[#cccccc] hover:text-white">Experience</a>
              <a href="#skills" className="transition-colors text-[#cccccc] hover:text-white">Skills</a>
              {/* TODO: uncomment this when portfolio is ready */}
              {/* <a href="#portfolio" className="transition-colors text-[#cccccc] hover:text-white">Portfolio</a> */}
              <a href="#contact" className="transition-colors text-[#cccccc] hover:text-white">Contact</a>
            </div>
            <button className="md:hidden transition-colors text-[#cccccc] hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          {/* Mobile Menu */}
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t bg-[#161b22] border-[#21262d]">
              <a href="#about" className="block px-3 py-2 transition-colors text-[#cccccc] hover:text-white">About</a>
              <a href="#experience" className="block px-3 py-2 transition-colors text-[#cccccc] hover:text-white">Experience</a>
              <a href="#skills" className="block px-3 py-2 transition-colors text-[#cccccc] hover:text-white">Skills</a>
              <a href="#portfolio" className="block px-3 py-2 transition-colors text-[#cccccc] hover:text-white">Portfolio</a>
              <a href="#contact" className="block px-3 py-2 transition-colors text-[#cccccc] hover:text-white">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-50 pb-16 text-white bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Lars Remund</h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">Software Engineer & UX/UI Designer</p>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            I specialize in software development and design and I have experience in React, TypeScript, 
            and full-stack development. I'm passionate about creating user-centered digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#experience" variant="primary" size="lg">
              See Work Experience
            </Button>
            <Button href="#contact" variant="outline" size="lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg mb-6 text-[#f0f6fc]">
                I recently graduated from Utah State University with a degree in Human Experience Design
                with a Computer Science emphasis.
              </p>
              <p className="text-lg mb-6 text-[#f0f6fc]">
                I'm passionate about creating digital experiences that are both beautiful and functional. 
                With experience in front-end development and UX/UI design, I bridge the gap between 
                design and development.
              </p>
              <p className="text-lg mb-6 text-[#f0f6fc]">
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
            <div className="flex items-center justify-center">
              <div className="w-100 h-100 rounded-lg overflow-hidden flex items-center justify-center">
                <img src={profilePhoto} alt="Professional Photo" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-[#161b22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
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
      <section id="skills" className="py-16 bg-[#0d1117]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Skills & Technologies</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 skill-icon bg-[#0969da]">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Frontend Development</h3>
              <ul className="space-y-2 text-[#f0f6fc]">
                <li>React & TypeScript</li>
                <li>HTML, CSS, JavaScript</li>
                <li>Vite & Modern Build Tools</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 skill-icon bg-[#1a7f37]">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">UX/UI Design</h3>
              <ul className="space-y-2 text-[#f0f6fc]">
                <li>Figma & Adobe Creative Suite</li>
                <li>User Research & Testing</li>
                <li>Wireframing & Prototyping</li>
                <li>Design Systems</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 skill-icon bg-[#8250df]">
                <span className="text-2xl">⚙️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">Development Process</h3>
              <ul className="space-y-2 text-[#f0f6fc]">
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
      {/* TODO: uncomment this when portfolio is ready */}
      {/* <section id="portfolio" className="py-16 bg-[#161b22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Portfolio</h2>
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
      </section> */}

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-[#161b22]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Get In Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg mb-8 text-[#f0f6fc]">
              I'm always interested in new opportunities and exciting projects. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-4">📧</span>
                <a href="mailto:larsremund2@gmail.com" className="transition-colors text-[#4fc1ff] hover:text-[#6bb6ff]">
                  larsremund2@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-4">📱</span>
                <span className="text-[#f0f6fc]">(636) 634-1260</span>
              </div>
              <div className="flex items-center justify-center">
                <span className="text-2xl mr-4">📍</span>
                <span className="text-[#f0f6fc]">Pleasant Grove, UT</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="https://www.linkedin.com/in/lars-remund-347a10213/" target="_blank" rel="noopener noreferrer" variant="primary">
                LinkedIn
              </Button>
              <Button href="https://github.com/laremund" target="_blank" rel="noopener noreferrer" variant="secondary">
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Snake Game Popup */}
      {showPopup && !showGame && (
        <div
          className="hidden md:block fixed bottom-5 right-5 z-50 p-4 rounded-lg bg-[#161b22] border-1 border-[#4fc1ff] min-w-[280px] max-w-[320px] backdrop-blur-sm snake-popup-shadow snake-popup-animate"
        >
          <div className="flex justify-between items-start mb-3">
              <p className="text-2xl text-[#f0f6fc]">
                Bored?
              </p>                  
            <button
              onClick={() => setShowPopup(false)}
              className="ml-2 flex-shrink-0 transition-colors cursor-pointer text-[#8b949e] hover:text-white"
              aria-label="Close popup"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <Button
            variant="primary"
            size="lg"
            className="w-full cursor-pointer"
            onClick={() => {
              setShowGame(true)
              setShowPopup(false)
            }}
          >
            Play a Game Instead
          </Button>
        </div>
      )}

      {/* Snake Game */}
      {showGame && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/75">
          <div className="relative rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-auto bg-[#0d1117]">
            <button
              onClick={() => setShowGame(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded transition-colors cursor-pointer text-[#8b949e] bg-[#161b22CC] hover:text-white hover:bg-[#161b22]"
              aria-label="Close game"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <SnakeGame />
          </div>
        </div>
      )}
    </div>
  )
}

export default App
