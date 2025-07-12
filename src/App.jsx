import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
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
  FaCube
} from 'react-icons/fa';

const Portfolio = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('home');
  const canvasRef = useRef(null);

  // 3D Background Animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current, 
      alpha: true,
      antialias: true 
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Create floating particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.005,
      color: '#00a8ff',
      transparent: true,
      opacity: 0.8
    });

    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Create animated sphere
    const sphereGeometry = new THREE.SphereGeometry(1, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({ 
      color: '#ff6b35',
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Create floating cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ 
      color: '#00a8ff',
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 3;
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate objects
      sphere.rotation.x += 0.001;
      sphere.rotation.y += 0.002;
      cube.rotation.x += 0.002;
      cube.rotation.y += 0.001;
      particles.rotation.y += 0.0005;

      // Mouse interaction
      if (mousePos.x && mousePos.y) {
        const mouseX = (mousePos.x / window.innerWidth) * 2 - 1;
        const mouseY = -(mousePos.y / window.innerHeight) * 2 + 1;
        
        sphere.position.x = mouseX * 0.5;
        sphere.position.y = mouseY * 0.5;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [mousePos]);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Custom Cursor */}
      <div 
        className="fixed w-5 h-5 border-2 border-blue-500 rounded-full pointer-events-none z-[9999] transition-all duration-100 mix-blend-difference"
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
        }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-lg py-4 shadow-lg shadow-blue-500/20' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent cursor-pointer hover:scale-110 transition-transform">
            JRP
          </div>
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
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 z-0" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="mb-6 inline-block">
            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-500 to-orange-500 rounded-full p-1 animate-pulse">
              <div className="w-full h-full bg-black rounded-full flex items-center justify-center">
                <FaCube className="text-5xl text-blue-500 animate-spin" style={{animationDuration: '10s'}} />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
            Jaya Raghu Ram Penugonda
          </h1>
          
          <p className="text-2xl md:text-3xl text-gray-300 mb-8">
            Data Scientist | AI/ML Engineer | Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-10">
            Transforming data into intelligent solutions that drive innovation
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
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

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-500 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                I'm a passionate Data Analytics Engineering graduate student at Northeastern University with a perfect 4.0 GPA, 
                combining 2.5 years of professional experience with cutting-edge academic knowledge.
              </p>
              <p className="text-lg leading-relaxed">
                What drives me is the intersection of data science, artificial intelligence, and practical software engineering. 
                I believe in creating solutions that not only leverage the latest in ML/AI technology but also deliver real 
                business value.
              </p>
              <p className="text-lg leading-relaxed">
                Currently focused on advancing my expertise in machine learning, natural language processing, and cloud-native 
                data architectures. Actively seeking opportunities to contribute to innovative AI/ML projects.
              </p>
              
              <button className="group bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-2">
                <FaDownload />
                Download Resume
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { number: '3.9/4.0', label: 'GPA at Northeastern', icon: '🎓' },
                { number: '2.5+', label: 'Years Experience', icon: '💼' },
                { number: '10+', label: 'Technologies', icon: '🚀' },
                { number: '5+', label: 'Major Projects', icon: '💡' }
              ].map((stat, index) => (
                <div
                  key={index}
                  className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                >
                  <div className="text-4xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-bold text-blue-500 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-8 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                category: 'Programming Languages',
                icon: <FaCode className="text-2xl" />,
                skills: ['Python', 'JavaScript', 'TypeScript', 'C#', 'SQL', 'HTML/CSS']
              },
              {
                category: 'ML/AI Frameworks',
                icon: <FaBrain className="text-2xl" />,
                skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'HuggingFace', 'LangChain', 'LangGraph']
              },
              {
                category: 'Data & Visualization',
                icon: <FaChartBar className="text-2xl" />,
                skills: ['Power BI', 'Tableau', 'Plotly', 'Excel', 'SQL Server']
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
      <section id="projects" className="py-20 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'NUBOT - AI Student Assistant',
                description: 'Developed an intelligent chatbot using RAG architecture to provide personalized student support.',
                tech: ['Mistral LLM', 'LangChain', 'FAISS', 'Docker', 'GCP'],
                gradient: 'from-blue-500 to-purple-600',
                icon: '🤖'
              },
              {
                title: 'COVID-19 Detection System',
                description: 'Built a CNN model using transfer learning with VGG16. Achieved 91.61% accuracy.',
                tech: ['TensorFlow', 'VGG16', 'Streamlit', 'Python', 'OpenCV'],
                gradient: 'from-orange-500 to-red-600',
                icon: '🏥'
              },
              {
                title: 'Health Monitoring Platform',
                description: 'Designed SQL-based data insights platform with real-time Power BI dashboards.',
                tech: ['SQL Server', 'Power BI', 'Python', 'ETL', 'DAX'],
                gradient: 'from-green-500 to-teal-600',
                icon: '📊'
              }
            ].map((project, index) => (
              <div
                key={index}
                className="group relative bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/50 transform hover:-translate-y-3 hover:rotate-1 transition-all duration-500 cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-300`} />
                
                <div className="absolute top-4 right-4 text-6xl opacity-20 group-hover:opacity-40 transition-opacity duration-300">
                  {project.icon}
                </div>
                
                <div className="p-6 relative">
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
                    <a className="flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors duration-300 cursor-pointer">
                      <FaExternalLinkAlt />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-8 bg-gray-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-orange-500" />
            
            {[
              {
                date: '2022 - 2024',
                title: 'Programmer Analyst',
                company: 'Cognizant Technology Solutions',
                description: [
                  'Built predictive SQL procedures and ASP.NET REST APIs',
                  'Migrated legacy email systems to modern .NET frameworks',
                  'Developed full-stack MVC web applications'
                ],
                icon: '💼'
              },
              {
                date: '2024 - Present',
                title: 'Graduate Research Assistant',
                company: 'Northeastern University',
                description: [
                  'Conducting research in AI/ML applications',
                  'Developing innovative NLP solutions',
                  'Publishing academic findings'
                ],
                icon: '🎓'
              }
            ].map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="group bg-black/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/30 transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-blue-500 text-sm font-semibold mb-2">{exp.date}</div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                    <p className="text-orange-500 mb-3">{exp.company}</p>
                    <ul className="space-y-1 text-gray-400 text-sm">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center text-2xl shadow-lg">
                  {exp.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8">
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
      <footer className="py-8 border-t border-gray-800">
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
        
        .animate-gradient {
          animation: gradient 4s ease infinite;
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