import React, { useState, useEffect } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaExternalLinkAlt,
  FaBriefcase,
  FaPaperPlane,
  FaCode,
  FaBrain,
  FaChartBar,
  FaCloud,
  FaTwitter,
  FaArrowRight,
  FaDownload,
  FaDatabase,
  FaChartLine,
  FaLayerGroup,
  FaBars,
  FaTimes
} from 'react-icons/fa';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Projects data
  const projects = [
    {
      title: 'NUBOT - Retrieval Augmented Generation Chatbot',
      description: 'Developed an intelligent chatbot using RAG architecture to provide personalized student support.',
      tech: ['Mistral LLM', 'LangChain', 'FAISS', 'Docker', 'GCP'],
      categories: ['All Projects', 'ML Projects']
    },
    {
      title: 'COVID-19 Detection System',
      description: 'Built a CNN model using transfer learning with VGG16. Achieved 91.61% accuracy.',
      tech: ['Python', 'TensorFlow', 'VGG16', 'OpenCV', 'Streamlit'],
      categories: ['All Projects', 'ML Projects']
    },
    {
      title: 'Health Monitoring Platform',
      description: 'Designed SQL-based data insights platform with real-time Power BI dashboards.',
      tech: ['SQL Server', 'Power BI', 'Python'],
      categories: ['All Projects', 'SQL Projects']
    },
    {
      title: 'Credit Risk Assessment Using Ensemble Model and Neural Networks',
      description: 'Developed a credit risk assessment model using different ML algorithms and neural networks.',
      tech: ['Python', 'Scikit-learn', 'TensorFlow', 'Pandas', 'NumPy'],
      categories: ['All Projects', 'ML Projects']
    },
    {
      title: 'Crash Reporting Analysis',
      description: 'Analyzed 191K+ crash reports using Python, pandas, and data visualization to identify accident patterns. Cleaned data, engineered features, and discovered that human error causes more crashes than weather conditions, with speed directly correlating to injury severity - insights valuable for traffic safety improvements.',
      tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn'],
      categories: ['All Projects', 'Data Analytics']
    },
    {
      title: 'Parking Violation Analysis using Plotly',
      description: 'Analyzed 63K+ D.C. parking violations using Python and geospatial visualization.',
      tech: ['Python', 'Pandas', 'NumPy', 'Plotly', 'Matplotlib', 'Seaborn'],
      categories: ['All Projects', 'Data Analytics']
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'All Projects' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);
      
      // Close mobile menu on scroll
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileMenuOpen]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg py-4 shadow-lg shadow-blue-500/20' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="logo-text text-2xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform">
              JRP
            </div>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-blue-500 transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-blue-500 transition-colors"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu Overlay */}
        <div className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-lg transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`} style={{ top: scrolled ? '72px' : '88px' }}>
          <div className="flex flex-col items-center justify-center h-[calc(100vh-88px)] gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  scrollToSection(item.toLowerCase());
                  setMobileMenuOpen(false);
                }}
                className="text-2xl text-gray-300 hover:text-blue-500 transition-colors duration-300"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen relative overflow-hidden">
        <div className="relative z-10 min-h-screen flex">
          <div className="w-full md:w-1/2 flex items-center px-8 md:pl-16 lg:pl-24">
            <div className="w-full max-w-2xl py-20 mx-auto md:mx-0 text-center md:text-left animate-fadeIn">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient pb-4">
                Jaya Raghu Ram Penugonda
              </h1>
              
              <p className="text-2xl md:text-3xl text-gray-300 mb-6 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                Data Analyst | Data Engineer | Full-Stack Developer
              </p>
              
              <p className="text-lg text-gray-400 mb-10 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                Transforming data into intelligent solutions that drive innovation
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeIn" style={{ animationDelay: '0.6s' }}>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="group border-2 border-blue-500 text-blue-500 px-8 py-4 rounded-full font-semibold hover:bg-blue-500 hover:text-white hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaBriefcase />
                  View Projects
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-semibold hover:bg-orange-500 hover:text-white hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaEnvelope />
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
          
          {/* Right side - Reserved space for future image */}
          <div className="hidden md:block w-1/2 h-screen">
            {/* This space is reserved for future profile image */}
          </div>
        </div>

        {/* <div className="absolute bottom-10 left-1/2 md:left-1/4 transform -translate-x-1/2 animate-bounce z-20">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2" />
          </div>
        </div> */}
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 relative z-30 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a dedicated Data Analytics Engineering graduate student at Northeastern University, eager to pursue data analyst roles while expanding my expertise in AI/ML technologies.
              </p>
              <p className="text-lg leading-relaxed">
               My journey began as an analyst at Cognizant, where I developed strong SQL skills and gained hands-on experience in data analysis and business intelligence. This practical foundation drives my passion for transforming raw data into actionable insights.
              </p>
              <p className="text-lg leading-relaxed">
                Currently pursuing my Master's degree, I'm actively building expertise in data visualizations and artificial intelligence. I'm particularly excited about exploring new AI/ML technologies and applying them to solve real-world business challenges.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* Current & Previous Affiliations */}
              <div className="grid grid-cols-2 gap-4">
                <div className="group relative bg-gradient-to-br from-red-900/20 to-black/50 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 hover:shadow-[0_10px_30px_rgba(239,68,68,0.3)] transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-2 right-2 text-xs bg-red-500/20 text-red-400 px-2 py-1 rounded-full">
                    Currently
                  </div>
                  <div className="flex flex-col items-center text-center pt-4">
                    <img 
                      src="/northeastern-logo.png" 
                      alt="Northeastern" 
                      className="w-24 h-24 object-contain bg-white rounded-xl p-2 mb-4 shadow-lg"
                    />
                    <p className="text-white font-semibold text-base mb-2">Northeastern University</p>
                    <div className="mt-2">
                      <p className="text-3xl font-bold text-red-400">3.9/4.0</p>
                      <p className="text-sm text-gray-400">Current GPA</p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative bg-gradient-to-br from-blue-900/20 to-black/50 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_10px_30px_rgba(59,130,246,0.3)] transform hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute top-2 right-2 text-xs bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full">
                    Previous
                  </div>
                  <div className="flex flex-col items-center text-center pt-4">
                    <img 
                      src="/cognizant-logo.jpeg" 
                      alt="Cognizant" 
                      className="w-24 h-24 object-contain bg-white rounded-xl p-2 mb-4 shadow-lg"
                    />
                    <p className="text-white font-semibold text-base mb-2">Cognizant</p>
                    <div className="mt-2">
                      <p className="text-3xl font-bold text-blue-400">2.5+</p>
                      <p className="text-sm text-gray-400">Years Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Download Resume Button */}
              {/* <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2 w-full justify-center">
                <FaDownload />
                Download Resume
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-gray-900/30 relative z-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Programming Languages',
                icon: <FaCode className="text-2xl" />,
                skills: ['Python', 'SQL', 'T-SQL', 'C', 'C#', 'HTML/CSS', 'JavaScript']
              },
              {
                category: 'ML/AI Frameworks',
                icon: <FaBrain className="text-2xl" />,
                skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'HuggingFace', 'LangChain', 'LangGraph']
              },
              {
                category: 'Visualization and Tools',
                icon: <FaChartBar className="text-2xl" />,
                skills: ['Power BI', 'Tableau', 'Plotly', 'Snowflake', 'Excel', 'SQL Server']
              },
              {
                category: 'Cloud & DevOps',
                icon: <FaCloud className="text-2xl" />,
                skills: ['GCP', 'Docker', 'Git', 'Azure DevOps', 'CI/CD']
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 text-blue-500">
                  {category.icon}
                  <h3 className="text-xl font-semibold">{category.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="text-gray-300 hover:text-orange-500 transition-colors duration-300 cursor-pointer text-sm"
                    >
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-8 relative z-30 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 pb-2 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          {/* Project Category Tabs */}
          <div className="flex justify-center mb-12">
            <div className="relative">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-full p-1 flex gap-2">
                {[
                  { name: 'All Projects', icon: <FaLayerGroup className="text-sm" /> },
                  { name: 'ML Projects', icon: <FaBrain className="text-sm" /> },
                  { name: 'Data Analytics', icon: <FaChartLine className="text-sm" /> },
                  { name: 'SQL Projects', icon: <FaDatabase className="text-sm" /> }
                ].map((category) => (
                  <button
                    key={category.name}
                    onClick={() => setActiveCategory(category.name)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 relative flex items-center gap-2 ${
                      activeCategory === category.name
                        ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg'
                        : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                    }`}
                  >
                    {category.icon}
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={`${activeCategory}-${index}`}
                className="group relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 hover:shadow-[0_10px_40px_rgba(128,90,150,0.4)] transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 cursor-pointer animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-xs text-blue-400 hover:bg-blue-500/20 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                      <FaGithub />
                      <span className="text-sm">GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-gray-900/30 relative z-30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="relative px-4">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-orange-500" />
            
            {/* First Experience - Card Left, Date Right */}
            <div className="relative flex items-center justify-between mb-12">
              <div className="w-[45%]">
                <div className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_10px_40px_rgba(128,90,150,0.4)] transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src="/northeastern-logo.png" 
                      alt="Northeastern University" 
                      className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Graduate Teaching Assistant</h3>
                      <p className="text-blue-400 font-semibold text-lg">Northeastern University</p>
                    </div>
                  </div>
                  <ul className="space-y-1 text-gray-400 text-sm ml-16">
                    <li>Pursuing MS in Data Analytics Engineering</li>
                    <li>Teaching Assistant - IE 6600 Computation & Visualization</li>
                    <li>Grading assignments and projects, supported lab sessions for graduate-level coursework</li>
                  </ul>
                </div>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg z-10">
                🎓
              </div>
              
              <div className="w-[45%] text-left pl-8">
                <p className="text-orange-500 font-bold text-xl">May 2025 - Present</p>
              </div>
            </div>
            
            {/* Second Experience - Date Left, Card Right */}
            <div className="relative flex items-center justify-between mb-12">
              <div className="w-[45%] text-right pr-8">
                <p className="text-orange-500 font-bold text-xl">Feb 2022 - Aug 2024</p>
              </div>
              
              <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg z-10">
                💼
              </div>
              
              <div className="w-[45%]">
                <div className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-[0_10px_40px_rgba(128,90,150,0.4)] transform hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src="/cognizant-logo.jpeg" 
                      alt="Cognizant" 
                      className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                    />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">Programmer Analyst</h3>
                      <p className="text-blue-400 font-semibold text-lg">Cognizant Technology Solutions</p>
                    </div>
                  </div>
                  <ul className="space-y-1 text-gray-400 text-sm ml-16">
                    <li>Developed predictive procedures for ad performance analytics, reducing turnaround time by 30%</li>
                    <li>Automated chatbot log analysis and created monitoring dashboards for usage optimization</li>
                    <li> Streamlined reporting workflows across SQL Server and Excel sources for time-sensitive projects</li>
                    <li>Migrated legacy system with SQL-to-JSON</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 relative z-30 bg-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-blue-500 mb-4">Let's Connect</h3>
                <p className="text-gray-400 mb-6">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and innovation.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: <FaEnvelope />, text: 'penugonda.j@northeastern.edu', color: 'text-blue-500' },
                    { icon: <FaMapMarkerAlt />, text: 'Boston, Massachusetts', color: 'text-orange-500' },
                    { icon: <FaLinkedin />, text: 'linkedin.com/in/jayaraghuram', color: 'text-blue-500' },
                    { icon: <FaGithub />, text: 'github.com/jayaraghuram', color: 'text-orange-500' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-4 group cursor-pointer">
                      <span className={`text-2xl ${item.color} group-hover:scale-125 transition-transform duration-300`}>
                        {item.icon}
                      </span>
                      <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    rows="5"
                    className="w-full px-4 py-3 bg-gray-900/50 border border-gray-700 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-white resize-none"
                    placeholder="Your message..."
                  />
                </div>
                
                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-orange-500 text-white py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 relative z-30 bg-black">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <div className="flex justify-center gap-6 mb-4">
            {[
              { icon: <FaLinkedin />, link: '#' },
              { icon: <FaGithub />, link: '#' },
              { icon: <FaEnvelope />, link: '#' },
              { icon: <FaTwitter />, link: '#' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-2xl text-gray-400 hover:text-blue-500 transform hover:-translate-y-2 transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-500">
            © 2024 Jaya Raghu Ram Penugonda. All rights reserved.
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          animation-fill-mode: both;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;