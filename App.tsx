
import React, { useState } from 'react';
import { 
  Github, Linkedin, Mail, Download, MapPin, Phone, ExternalLink, 
  Code2, Brain, Database, Cloud, LayoutDashboard, Menu, X,
  Terminal, Cpu, ChevronRight, Target, Zap, Award
} from 'lucide-react';
import { RESUME_DATA } from './constants';
import SkillChart from './components/SkillChart';
import ChatWidget from './components/ChatWidget';

const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
  ];

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-primary-500/30 overflow-x-hidden">
      {/* Background Glow Effects */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40rem] h-[40rem] bg-primary-600/10 rounded-full blur-3xl animate-blob mix-blend-screen opacity-50"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35rem] h-[35rem] bg-blue-600/10 rounded-full blur-3xl animate-blob animation-delay-2000 mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[45rem] h-[45rem] bg-purple-600/10 rounded-full blur-3xl animate-blob animation-delay-4000 mix-blend-screen opacity-50"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 supports-[backdrop-filter]:bg-slate-950/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div 
              className="flex-shrink-0 cursor-pointer group" 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              <span className="text-xl font-bold bg-gradient-to-r from-primary-400 to-blue-400 bg-clip-text text-transparent group-hover:from-primary-300 group-hover:to-blue-300 transition-all duration-300">
                SandeepTeja Sundara
              </span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => handleScroll(link.id)}
                    className="hover:text-primary-400 text-slate-300 transition-all duration-300 px-3 py-2 rounded-md text-sm font-medium hover:bg-slate-800/50 bg-transparent border-none cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
                <button 
                  onClick={() => handleScroll('contact')}
                  className="bg-primary-600/10 text-primary-400 hover:bg-primary-600 hover:text-white border border-primary-600/20 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] cursor-pointer"
                >
                  Let's Talk
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden fixed inset-x-0 top-16 bg-slate-900/95 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'}`}>
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleScroll(link.id)}
                className="text-left w-full text-slate-300 hover:text-primary-400 hover:bg-slate-800/50 block px-3 py-3 rounded-lg text-base font-medium transition-colors bg-transparent border-none"
              >
                {link.name}
              </button>
            ))}
            <button
                onClick={() => handleScroll('contact')}
                className="text-left w-full text-primary-400 hover:text-white hover:bg-primary-600 block px-3 py-3 rounded-lg text-base font-medium transition-colors bg-transparent border-none"
              >
                Let's Talk
              </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 space-y-8 animate-fade-in relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-900/20 border border-primary-500/30 text-primary-400 text-sm font-medium shadow-[0_0_15px_rgba(20,184,166,0.15)] backdrop-blur-sm animate-pulse">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
            </span>
            Open to Full-time Data Scientist Roles
          </div>
          
          <div>
            <h1 className="text-4xl md:text-7xl font-bold text-slate-100 tracking-tight leading-[1.1]">
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-primary-400 via-teal-300 to-blue-400 bg-clip-text text-transparent">
                {RESUME_DATA.personal.name.split(' ')[0]}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-slate-400 font-light mt-4">
              {RESUME_DATA.personal.role}
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-xl leading-relaxed border-l-2 border-slate-700 pl-6">
            Transforming complex data into <span className="text-slate-200 font-semibold">revenue-impacting</span> decisions. 
            Specialized in <span className="text-primary-400">GenAI</span>, <span className="text-primary-400">MLOps</span>, and scalable data products.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href={`mailto:${RESUME_DATA.personal.email}`}
              className="flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl transition-all shadow-[0_0_20px_rgba(20,184,166,0.3)] hover:shadow-[0_0_30px_rgba(20,184,166,0.5)] hover:-translate-y-1 font-medium cursor-pointer"
            >
              <Mail size={20} />
              Hire Me
            </a>
            
            <a 
              href="https://drive.google.com/file/d/1WZGsWIeUNU3OCNKHzceqEvbiPqolsfmP/view?usp=sharing" 
              download="Sandeepteja_Sundara_Resume.pdf"
              className="flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 rounded-xl transition-all border border-slate-700 hover:border-slate-500 backdrop-blur-sm font-medium hover:-translate-y-1 group"
            >
              <Download size={20} className="group-hover:text-primary-400 transition-colors" />
              Resume
            </a>

            <button 
              onClick={() => handleScroll('experience')}
              className="flex items-center gap-2 px-8 py-4 bg-slate-800/50 hover:bg-slate-700/50 text-slate-200 rounded-xl transition-all border border-slate-700 hover:border-slate-500 backdrop-blur-sm font-medium hover:-translate-y-1 cursor-pointer"
            >
              <LayoutDashboard size={20} />
              View Work
            </button>
            
            <div className="flex items-center gap-3 px-4">
               <a href={`https://${RESUME_DATA.personal.linkedin}`} target="_blank" rel="noreferrer" className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
                 <Linkedin size={24} />
               </a>
               <a href={`https://${RESUME_DATA.personal.github}`} target="_blank" rel="noreferrer" className="p-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
                 <Github size={24} />
               </a>
            </div>
          </div>
        </div>
        
        {/* Hero Visual */}
        <div className="flex-1 w-full max-w-lg relative hidden md:block animate-fade-in" style={{animationDelay: '0.2s'}}>
           <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl blur opacity-20"></div>
           <div className="relative w-full aspect-square bg-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700 group">
             <div className="absolute inset-0 bg-grid-slate-700/[0.15] bg-[length:30px_30px] rounded-2xl"></div>
             
             {/* Mock Terminal/Code Interface */}
             <div className="relative h-full flex flex-col">
               <div className="flex justify-between items-center mb-6 border-b border-slate-800 pb-4">
                 <div className="flex space-x-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                 </div>
                 <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                   <Terminal size={12} />
                   <span>ai_pipeline.py</span>
                 </div>
               </div>
               
               <div className="space-y-4 font-mono text-xs sm:text-sm text-slate-400 overflow-hidden">
                 <div className="flex">
                    <span className="text-slate-600 w-6">1</span>
                    <p><span className="text-purple-400">import</span> torch</p>
                 </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6">2</span>
                    <p><span className="text-purple-400">from</span> transformers <span className="text-purple-400">import</span> AutoModel</p>
                 </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6">3</span>
                    <p className="text-slate-500 italic"># Initialize AI Agent</p>
                 </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6">4</span>
                    <p><span className="text-blue-400">class</span> <span className="text-yellow-300">BankingAgent</span>(Agent):</p>
                 </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6">5</span>
                    <p className="pl-4"><span className="text-blue-400">async def</span> <span className="text-yellow-300">optimize_revenue</span>(self, data):</p>
                 </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6">6</span>
                    <p className="pl-8">insight = <span className="text-blue-400">await</span> self.analyze(data)</p>
                 </div>
                 <div className="flex">
                    <span className="text-slate-600 w-6">7</span>
                    <p className="pl-8"><span className="text-purple-400">return</span> insight.impact</p>
                 </div>

                 <div className="mt-6 p-4 bg-slate-950/50 rounded-lg border border-slate-800/80 backdrop-blur-sm">
                    <div className="flex justify-between text-xs mb-2 font-sans text-slate-400">
                      <span>Model Performance</span>
                      <span className="text-primary-400 font-bold">92.4% F1 Score</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden">
                      <div className="bg-gradient-to-r from-primary-500 to-blue-500 h-2 rounded-full w-[92%] shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
                    </div>
                    <div className="mt-3 flex justify-between text-xs font-sans">
                        <span className="flex items-center gap-1 text-green-400"><Cpu size={10} /> Latency: 80ms</span>
                        <span className="flex items-center gap-1 text-blue-400"><Database size={10} /> 15TB+ Data</span>
                    </div>
                 </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/30 relative">
        <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm -z-10"></div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Professional Summary</h2>
            <div className="h-1 w-20 bg-primary-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="bg-slate-800/40 rounded-3xl p-8 md:p-12 border border-slate-700/50 backdrop-blur-md shadow-xl">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed text-center max-w-4xl mx-auto">
              {RESUME_DATA.personal.summary}
            </p>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
               <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-primary-500/30 transition-colors">
                 <div className="text-4xl font-bold text-primary-400 mb-2">4+</div>
                 <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Years Experience</div>
               </div>
               <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-blue-500/30 transition-colors">
                 <div className="text-4xl font-bold text-blue-400 mb-2">$1.2M+</div>
                 <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Revenue Impact</div>
               </div>
               <div className="p-6 bg-slate-900/50 rounded-2xl border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                 <div className="text-4xl font-bold text-purple-400 mb-2">6%</div>
                 <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">Accuracy Boost</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
               <h2 className="text-3xl font-bold text-slate-100 flex items-center gap-3">
                <Code2 className="text-primary-400" size={32} /> Technical Skills
              </h2>
              <p className="text-slate-400 mt-2">Comprehensive expertise across Data Science and Engineering.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Radar Chart Area */}
            <div className="lg:col-span-4 bg-slate-800/20 rounded-2xl p-6 border border-slate-700/50 flex flex-col items-center justify-center min-h-[350px] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 to-blue-500"></div>
              <h3 className="text-lg font-semibold text-slate-200 mb-4 absolute top-6 left-6">Skill Proficiency</h3>
              <SkillChart />
            </div>
            
            {/* Skills Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
              {RESUME_DATA.skills.map((category, idx) => (
                <div key={idx} className="bg-slate-800/20 rounded-xl p-5 border border-slate-700/50 hover:bg-slate-800/40 hover:border-primary-500/30 transition-all duration-300 group h-full">
                  <h3 className="text-base font-semibold text-slate-100 mb-4 flex items-center gap-2 border-b border-slate-700/50 pb-2">
                    <span className="w-2 h-2 rounded-full bg-primary-500 group-hover:shadow-[0_0_8px_rgba(20,184,166,0.8)] transition-shadow"></span>
                    {category.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="px-2.5 py-1.5 text-xs font-medium rounded-md bg-slate-900/50 text-slate-300 border border-slate-700/50 group-hover:border-primary-500/20 transition-colors">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Impactful Projects</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Showcasing end-to-end solutions from problem statement to quantifiable impact.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RESUME_DATA.projects.map((project, index) => (
              <div key={index} className="group relative bg-slate-800/40 rounded-2xl border border-slate-700/50 overflow-hidden hover:border-primary-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary-900/10 flex flex-col h-full">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-purple-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-xs font-bold text-primary-400 uppercase tracking-wider bg-primary-900/20 px-2 py-1 rounded border border-primary-500/20">
                      {project.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">{project.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>

                  <div className="space-y-4 flex-grow">
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                      <div className="flex items-center gap-2 mb-1 text-slate-400 text-xs font-semibold uppercase">
                        <Target size={12} className="text-red-400" /> Problem
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
                    </div>
                    
                    <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50">
                      <div className="flex items-center gap-2 mb-1 text-slate-400 text-xs font-semibold uppercase">
                        <Code2 size={12} className="text-blue-400" /> Methodologies
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
                    </div>

                    <div className="bg-slate-900/50 p-3 rounded-lg border border-slate-800/50 bg-primary-900/5 border-primary-500/10">
                      <div className="flex items-center gap-2 mb-1 text-primary-400 text-xs font-semibold uppercase">
                        <Award size={12} /> Impact
                      </div>
                      <p className="text-sm text-slate-200 font-medium leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <div className="pt-5 mt-5 border-t border-slate-700/50">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded bg-slate-900/80 text-slate-400 border border-slate-700/80">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider rounded bg-slate-900/80 text-slate-500 border border-slate-700/80">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-100 mb-12 flex items-center gap-3">
            <LayoutDashboard className="text-primary-400" /> Professional Experience
          </h2>
          <div className="space-y-12 relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-0 top-4 bottom-4 w-px bg-slate-800"></div>

            {RESUME_DATA.experience.map((exp, index) => (
              <div key={index} className="relative pl-12 md:pl-16 group">
                {/* Timeline Dot */}
                <div className="absolute left-[10px] md:left-[-6px] top-2 w-3 h-3 rounded-full bg-slate-900 border-2 border-slate-600 group-hover:border-primary-500 group-hover:bg-primary-500 transition-all z-10 shadow-[0_0_0_4px_rgba(15,23,42,1)]"></div>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary-400 transition-colors">{exp.role}</h3>
                    <div className="text-base text-slate-400">{exp.company}</div>
                  </div>
                  <div className="text-xs font-mono text-slate-500 bg-slate-800/30 px-3 py-1.5 rounded-lg border border-slate-700/30 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>
                
                <div className="p-6 rounded-xl border border-transparent hover:bg-slate-800/20 hover:border-slate-700/50 transition-all duration-300">
                  <ul className="space-y-3">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                        <ChevronRight size={14} className="mt-1 text-slate-600 group-hover:text-primary-500 transition-colors flex-shrink-0" />
                        <span>{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Achievements */}
      <section className="py-24 bg-slate-900/30 border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                <Cloud className="text-primary-400" /> Education
              </h2>
              <div className="space-y-6">
                {RESUME_DATA.education.map((edu, idx) => (
                  <div key={idx} className="bg-slate-800/40 p-6 rounded-xl border border-slate-700/50 hover:border-primary-500/30 transition-colors">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-slate-200">{edu.university}</h3>
                      <span className="text-xs text-slate-500 font-mono bg-slate-900 px-2 py-1 rounded">{edu.gpa} GPA</span>
                    </div>
                    <p className="text-primary-400 text-sm mb-3 font-medium">{edu.degree}</p>
                    <div className="flex justify-between text-sm text-slate-500 border-t border-slate-700/50 pt-3">
                      <span className="flex items-center gap-1"><MapPin size={12} /> {edu.location}</span>
                      <span>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-slate-100 mb-8 flex items-center gap-3">
                <Award className="text-primary-400" /> Honors
              </h2>
              <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 p-8 rounded-xl border border-slate-700/50 h-full relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl group-hover:bg-yellow-500/20 transition-colors"></div>
                <div className="space-y-8 relative z-10">
                  {RESUME_DATA.achievements.map((ach, idx) => {
                    // Attempt to split by colon to separate Title from Description
                    const parts = ach.split(/:\s(.+)/);
                    const titlePart = parts[0];
                    const descPart = parts[1] || ach;
                    const isSingleString = parts.length < 2;

                    return (
                      <div key={idx} className="flex flex-col">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-xs font-bold mb-3 w-fit border border-yellow-500/20">
                          <span className="text-lg">🏆</span> RECOGNITION
                        </div>
                        <h3 className="text-lg font-bold text-slate-100 mb-2">{titlePart}</h3>
                        <p className="text-slate-300 text-sm leading-relaxed italic border-l-4 border-yellow-500/50 pl-4">
                          "{isSingleString ? ach : descPart}"
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer id="contact" className="py-12 border-t border-slate-800 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-primary-500 to-transparent opacity-30"></div>
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-slate-200 mb-6">Ready to build something amazing?</h3>
          <div className="flex justify-center gap-6 mb-8 flex-wrap">
            <a href={`mailto:${RESUME_DATA.personal.email}`} className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2">
              <Mail size={18} /> Email
            </a>
             <a href={`https://${RESUME_DATA.personal.linkedin}`} className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-2">
              <Linkedin size={18} /> LinkedIn
            </a>
             <a href={`https://${RESUME_DATA.personal.github}`} className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
              <Github size={18} /> GitHub
            </a>
            <a href="/Sandeepteja_Sundara_Resume.pdf" download="Sandeepteja_Sundara_Resume.pdf" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center gap-2">
              <Download size={18} /> Resume
            </a>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Sandeepteja Sundara. Designed with <span className="text-primary-500">♥</span> and AI.
          </p>
        </div>
      </footer>

      {/* Chat Widget */}
      <ChatWidget />
    </div>
  );
};

export default App;
