import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Mail, 
  ExternalLink, 
  Code2, 
  Cpu, 
  Database, 
  Globe, 
  Layout, 
  Zap,
  Server,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  Menu,
  X,
  Heart,
  Sparkles
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import projectsData from './data/projects.json';
import projectHistoryData from './data/projectHistory.json';
import readmeContent from '../README.md?raw';

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Desktop hover handlers
  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);
  
  // Mobile tap handler
  const handleClick = () => {
    if (window.innerWidth < 768) {
      setIsExpanded(!isExpanded);
    }
  };

  // Get top key result to display
  const topResult = project.keyResults && project.keyResults.length > 0 ? project.keyResults[0] : null;
  const remainingResults = project.keyResults && project.keyResults.length > 1 ? project.keyResults.slice(1) : [];

  // Calculate hidden tags count for inline display
  const visibleTagCount = 3;
  const hiddenTagCount = project.tags.length > visibleTagCount ? project.tags.length - visibleTagCount : 0;

  return (
    <div 
      className="group cursor-pointer md:cursor-default w-full max-w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[320px] md:min-h-[350px]">
        <div className="p-6 md:p-8 flex flex-col h-full">
          {/* Header */}
          <div className="flex justify-between items-start mb-3">
            <div className="space-y-1">
              <span className="text-xs font-bold text-sunset-gold uppercase tracking-wider">{project.client}</span>
              <h3 className="text-lg md:text-xl font-bold text-slate-900">{project.title}</h3>
            </div>
          </div>
          
          {/* Description - Flexible growth */}
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* Unified Expandable Content - Single container for tags and key results */}
          <div className={`mb-4 transition-all duration-300 ${
            isExpanded ? 'max-h-[600px]' : 'max-h-[120px]'
          } overflow-hidden`}>
            {/* Tags Section */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, index) => (
                <span 
                  key={tag} 
                  className={`px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded text-[11px] font-bold text-slate-500 uppercase whitespace-nowrap transition-opacity duration-300 ${
                    !isExpanded && index >= visibleTagCount ? 'hidden' : 'opacity-100'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Key Results Section */}
            {topResult && (
              <div className="pt-3 border-t border-slate-100">
                {/* Top Key Result */}
                <div className="flex gap-2 items-start mb-2">
                  <CheckCircle2 className="w-4 h-4 text-sunset-gold flex-shrink-0 mt-0.5" />
                  <p className={`text-sm text-slate-700 font-medium leading-relaxed ${
                    isExpanded ? '' : 'line-clamp-2'
                  }`}>
                    {topResult}
                  </p>
                </div>

                {/* Remaining Key Results */}
                {remainingResults.length > 0 && remainingResults.map((result, idx) => (
                  <div 
                    key={idx} 
                    className={`flex gap-2 items-start mb-2 transition-all duration-300 ${
                      isExpanded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 hidden'
                    }`}
                  >
                    <CheckCircle2 className="w-4 h-4 text-sunset-gold flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">
                      {result}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer - Always at bottom */}
          <div className="pt-3 border-t border-slate-100 mt-auto">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm text-slate-700 font-bold">{project.period}</span>
              {(remainingResults.length > 0 || hiddenTagCount > 0) && (
                <span className="text-[11px] text-sunset-gold font-bold whitespace-nowrap">
                  {isExpanded ? '−' : '+'}{remainingResults.length + hiddenTagCount} more
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HistoryCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Desktop hover handlers
  const handleMouseEnter = () => setIsFlipped(true);
  const handleMouseLeave = () => setIsFlipped(false);
  
  // Mobile tap handler
  const handleClick = () => {
    // Check if it's a touch device or small screen
    if (window.innerWidth < 1024) {
      setIsFlipped(!isFlipped);
    }
  };

  return (
    <div 
      className="w-full md:ml-20 perspective-1000 group"
      style={{ perspective: '1000px' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div 
        className="relative w-full transition-transform duration-700 preserve-3d grid"
        style={{ 
          transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)',
          gridTemplateAreas: '"card"' 
        }}
      >
        {/* Front of Card */}
        <div 
          className="backface-hidden bg-white p-5 md:p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sunset-gold/30 transition-all duration-500 overflow-hidden"
          style={{ gridArea: 'card' }}
        >
          {/* Card Accent */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 transition-colors duration-500 group-hover:bg-sunset-gold"></div>
          
          <div className="flex gap-4 items-start h-full">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-sunset-gold/10 group-hover:text-sunset-gold transition-all duration-500 flex-shrink-0">
              {project.icon}
            </div>
            <div className="space-y-3 flex-1">
              <div className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    <span className="text-[10px] md:text-[11px] font-black text-sunset-gold uppercase tracking-[0.2em] block">{project.client}</span>
                    <h4 className="text-base md:text-lg font-bold text-slate-900 group-hover:text-sunset-gold transition-colors leading-tight">{project.title}</h4>
                  </div>
                  {project.period && (
                    <div className="text-[10px] md:text-xs text-slate-400 font-bold whitespace-nowrap bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">{project.period}</div>
                  )}
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {project.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Back of Card (Tech Details) */}
        <div 
          className="backface-hidden bg-gradient-to-br from-slate-900 to-charcoal-black p-5 md:p-6 rounded-2xl border border-sunset-gold/30 shadow-xl flex flex-col justify-center"
          style={{ 
            transform: 'rotateX(180deg)',
            gridArea: 'card' 
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-4 h-4 text-sunset-gold" />
            <span className="text-xs font-bold text-sunset-gold uppercase tracking-wider">Tech Stack</span>
          </div>
          <p className="text-sm text-slate-300 font-medium leading-relaxed">
            {project.tech}
          </p>
          <div className="mt-4 pt-3 border-t border-white/10 text-right">
             <span className="text-[10px] text-slate-500 italic">
               {window.innerWidth < 1024 ? 'Tap to return' : 'Hover out to close'}
             </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const ReadmeModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          {/* Modal Container */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-charcoal-black rounded-xl flex items-center justify-center text-white">
                  <motion.div
                    animate={{ rotate: [0, 15, -15, 0], opacity: [1, 0.8, 1] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                  >
                    <Sparkles size={20} fill="currentColor" className="text-amber-400" />
                  </motion.div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">Development Story</h3>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">AI Orchestration</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-50 rounded-full transition-colors group"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
              </button>
            </div>

            {/* Content Area */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]} 
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    h1: ({node, ...props}) => <h1 className="text-3xl font-black text-slate-900 mb-8 tracking-tight" {...props} />,
                    h2: ({node, ...props}) => <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6 pb-3 border-b border-slate-100 tracking-tight" {...props} />,
                    h3: ({node, ...props}) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 tracking-tight" {...props} />,
                    p: ({node, ...props}) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
                    blockquote: ({node, ...props}) => (
                      <blockquote className="border-l-4 border-blue-500 bg-blue-50/30 py-4 px-6 my-8 rounded-r-2xl italic text-slate-700" {...props} />
                    ),
                    code: ({node, inline, ...props}) => (
                      inline 
                        ? <code className="bg-slate-100 text-sunset-gold px-1.5 py-0.5 rounded font-bold text-sm" {...props} />
                        : <code className="block bg-slate-900 text-slate-300 p-6 rounded-2xl overflow-x-auto text-sm leading-relaxed my-6 font-mono" {...props} />
                    ),
                    ul: ({node, ...props}) => <ul className="list-disc list-outside ml-6 mb-8 space-y-3 text-slate-600" {...props} />,
                    ol: ({node, ...props}) => <ol className="list-decimal list-outside ml-6 mb-8 space-y-3 text-slate-600" {...props} />,
                    li: ({node, ...props}) => <li className="pl-2" {...props} />,
                    a: ({node, ...props}) => <a className="text-blue-600 font-bold hover:underline transition-all" target="_blank" rel="noopener noreferrer" {...props} />,
                    table: ({node, ...props}) => (
                      <div className="overflow-x-auto my-10 rounded-2xl border border-slate-100 shadow-sm">
                        <table className="w-full text-left border-collapse" {...props} />
                      </div>
                    ),
                    thead: ({node, ...props}) => <thead className="bg-slate-50 border-b border-slate-100" {...props} />,
                    th: ({node, ...props}) => <th className="p-4 text-sm font-black text-slate-900 uppercase tracking-wider" {...props} />,
                    td: ({node, ...props}) => <td className="p-4 text-sm text-slate-600 border-b border-slate-50" {...props} />,
                    hr: ({node, ...props}) => <hr className="my-12 border-slate-100" {...props} />
                  }}
                >
                  {readmeContent}
                </ReactMarkdown>
              </div>
            </div>

            {/* Footer */}
            {/* <div className="p-6 border-t border-slate-100 bg-slate-50/50 flex justify-end">
              <button 
                onClick={onClose}
                className="px-8 py-3 bg-charcoal-black text-white rounded-xl font-bold hover:bg-sunset-gold transition-all duration-300 shadow-lg"
              >
                Close
              </button>
            </div> */}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);
  const [isReadmeOpen, setIsReadmeOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const profile = {
    name: "김명겸",
    title: "Full-Cycle Product Engineer",
    motto: "기술을 연결해 '제품의 완결성'을 만듭니다.",
    description: "Hardware 엔지니어로 시작해 Mobile, Platform, AI로 영역을 확장하며, '어떤 기술이든 배워서 문제를 해결한다'는 신념으로 일해왔습니다.",
  };

  const stats = [
    { label: "가동률 달성", value: "99.9%", desc: "24/7 무중단 시스템 설계" },
    { label: "구축 기간", value: "3개월", desc: "타이트한 일정 내 플랫폼 완성" },
    { label: "이벤트 처리", value: "4만+", desc: "TSDB 기반 실시간 처리/시간" },
    { label: "AI 정확도", value: "99.2%", desc: "Xception 기반 차종 분류" },
  ];

  const techStacks = [
    { category: "Native & App", skills: ["Swift", "Kotlin", "C# WPF"], icon: <Smartphone className="w-5 h-5" /> },
    { category: "Distributed Server", skills: ["ASP.NET Core", "Java", "Node.js"], icon: <Server className="w-5 h-5" /> },
    { category: "Data & AI", skills: ["Python", "TensorFlow", "InfluxDB"], icon: <Database className="w-5 h-5" /> },
    { category: "Infrastructure", skills: ["Azure", "AWS", "Docker", "MQTT"], icon: <Globe className="w-5 h-5" /> },
  ];

  // Icon mapping utility
  const getIcon = (iconType) => {
    const iconMap = {
      Layout: <Layout className="w-4 h-4" />,
      Server: <Server className="w-4 h-4" />,
      Database: <Database className="w-4 h-4" />,
      Smartphone: <Smartphone className="w-4 h-4" />,
      Cpu: <Cpu className="w-4 h-4" />,
      Zap: <Zap className="w-4 h-4" />,
      Globe: <Globe className="w-4 h-4" />
    };
    return iconMap[iconType] || <Code2 className="w-4 h-4" />;
  };

  const projects = projectsData;

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // Map icon types from JSON to JSX components
  const projectHistory = projectHistoryData.map(phase => ({
    ...phase,
    projects: phase.projects.map(project => ({
      ...project,
      icon: getIcon(project.iconType)
    }))
  }));

  return (
    <div className="min-h-screen bg-slate-50 text-charcoal-black font-sans selection:bg-sunset-gold/20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3 group cursor-default">
              <div className="w-10 h-10 bg-charcoal-black rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-sunset-gold group-hover:scale-105 transition-all duration-300">
                M
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-xl font-black tracking-tight text-slate-900 uppercase group-hover:text-sunset-gold transition-colors duration-300 leading-none mb-0.5">
                  {profile.name}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-500 tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                  {profile.title}
                </span>
              </div>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-sunset-gold transition-colors">
                  {item}
                </a>
              ))}
            </div>

            {/* Mobile Nav Toggle */}
            <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-base font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-sunset-gold/10 text-sunset-gold rounded-full text-sm font-semibold tracking-wide uppercase">
                {profile.title}
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-slate-900 leading-[1.3] sm:leading-[1.1] tracking-tight">
                {profile.motto}
              </h1>
              <p className="text-sm sm:text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
                {profile.description}
              </p>
              {/* <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                <button className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all flex items-center gap-2">
                  <Mail className="w-4 h-4" /> 연락하기
                </button>
                <button className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-xl font-semibold hover:bg-slate-50 transition-all flex items-center gap-2">
                   포트폴리오 PDF <ExternalLink className="w-4 h-4" />
                </button>
              </div> */}
            </div>
            <div className="flex-1 relative">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                    <div className="text-3xl font-bold text-sunset-gold mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-500">{stat.desc}</div>
                  </div>
                ))}
              </div>
              {/* Decorative background element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-sunset-gold/10 blur-3xl opacity-50 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="skills" className="py-16 md:py-20 bg-charcoal-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Technology Stack</h2>
            <p className="text-slate-400">하드웨어 제어부터 분산 서버, AI 파이프라인까지의 통합 역량</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {techStacks.map((stack, idx) => (
              <div key={idx} className="p-8 bg-slate-800/50 rounded-3xl border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-tech-cyan/10 rounded-2xl flex items-center justify-center text-tech-cyan mb-6 group-hover:bg-tech-cyan group-hover:text-charcoal-black transition-all">
                  {stack.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{stack.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {stack.skills.map(skill => (
                    <span key={skill} className="px-3 py-1 bg-slate-700 rounded-lg text-sm text-slate-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-600">
                실제 비즈니스 문제를 해결한 주요 프로젝트 사례들입니다.<br />
                <span className="text-sm text-slate-500">상세 내용을 확인하고 싶으시면 포트폴리오를 요청하세요.</span>
              </p>
            </div>
            
            <div className="flex p-1 bg-slate-100 rounded-xl">
              {['all', 'enterprise', 'mobile', 'ai'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg capitalize transition-all ${
                    activeTab === tab 
                      ? 'bg-white text-sunset-gold shadow-sm' 
                      : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab === 'all' ? 'ALL' : tab === 'enterprise' ? 'Enterprise' : tab === 'mobile' ? 'Cross Platform' : 'AI & Data'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>


      {/* Toggle Button for Project History */}
      <div className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center gap-4">
        <div className="text-center space-y-2 mb-2">
          <p className="text-sm text-slate-500 font-medium">더 많은 프로젝트가 궁금하신가요?</p>
        </div>
        <button
          onClick={() => setIsHistoryVisible(!isHistoryVisible)}
          className="group flex items-center gap-3 px-8 py-4 bg-charcoal-black hover:bg-sunset-gold border-2 border-charcoal-black hover:border-sunset-gold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <span className="text-lg font-bold text-white">
            {isHistoryVisible ? '전체 이력 숨기기' : '전체 프로젝트 보기 (30+)'}
          </span>
          <ChevronRight className={`w-5 h-5 text-white transition-transform duration-300 ${
            isHistoryVisible ? 'rotate-90' : 'rotate-0'
          }`} />
        </button>
      </div>

      {/* Complete Project History Timeline */}
      <div className={`transition-all duration-700 ease-in-out transform ${
        isHistoryVisible 
          ? 'opacity-100 translate-y-0 max-h-[10000px]' 
          : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
      }`}>
      {isHistoryVisible && (
      <section className="py-24 px-4 bg-white relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-sunset-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-tech-cyan/5 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">Complete Project History</h2>
            <div className="w-20 h-1.5 bg-sunset-gold mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">2007년부터 현재까지의 전체 프로젝트 이력을 연대순으로 정리했습니다.</p>
          </div>

          <div className="relative">
            {/* Main Vertical Timeline Line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunset-gold/50 via-slate-200 to-tech-cyan/50 hidden sm:block"></div>

            {projectHistory.map((phase, phaseIdx) => (
              <div key={phaseIdx} className="mb-24 last:mb-0">
                {/* Phase Header */}
                <div className="flex flex-col md:flex-row items-center md:items-center mb-16 relative gap-6">
                  {/* Decorative Line (Mobile Only) */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:hidden"></div>
                  
                  {/* Icon Badge - Centered on line md:left-8 */}
                  <div className="relative md:absolute md:left-8 md:-translate-x-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sunset-gold to-amber-500 shadow-2xl flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Milestone Title & Period */}
                  <div className="relative z-20 bg-white md:bg-transparent px-8 md:pl-24 md:px-0 py-2 text-center md:text-left">
                    <div className="text-[10px] font-black text-sunset-gold tracking-[0.3em] uppercase mb-1">{phase.period}</div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">{phase.milestone}</h3>
                  </div>
                </div>

                {/* Projects in Phase */}
                <div className="space-y-8">
                  {phase.projects.map((project, idx) => (
                    <div key={idx} className="relative flex flex-col md:flex-row items-center">
                      {/* Timeline Node on the line */}
                      <div className="absolute left-4 md:left-8 top-10 w-3 h-3 bg-white border-2 border-slate-400 rounded-full transform -translate-x-1/2 z-20 hidden sm:block"></div>
                      
                      {/* Content Card */}
                      <HistoryCard project={project} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      </div>

      {/* Expertise Section */}
      <section className="py-16 md:py-24 bg-charcoal-black text-white relative overflow-hidden">
        {/* Grid Pattern Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sunset-gold text-xs font-bold tracking-widest uppercase">
                  <Zap className="w-3.5 h-3.5 fill-sunset-gold/20" /> Engineering Philosophy
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                  Full-Cycle <span className="text-sunset-gold">Ownership</span><br />품질을 위한 집요함
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Scale & Reliability", desc: "24/7 무중단 시스템 설계 및 99.9% 가동률 달성" },
                  { title: "Delivery & Speed", desc: "3개월 내 고도화 플랫폼 구축 및 타이트한 일정 준수" },
                  { title: "Data & Monitoring", desc: "TSDB 기반 대용량 데이터 처리 및 응답속도 최적화" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-sunset-gold group-hover:border-sunset-gold transition-all duration-300">
                      <CheckCircle2 className="w-5 h-5 text-sunset-gold group-hover:text-charcoal-black" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl mb-1">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sunset-gold to-tech-cyan rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-[2.5rem] p-10 md:p-14 border border-white/10 overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Cpu className="w-32 h-32" />
                </div>
                
                <div className="relative space-y-8">
                  <div className="flex items-center gap-3 text-sm font-black text-sunset-gold tracking-widest uppercase">
                    <span className="w-8 h-px bg-sunset-gold"></span> EXPERIENCE FOCUS
                  </div>
                  <p className="text-2xl md:text-3xl leading-snug font-bold italic text-slate-100">
                    "운영 현장의 난제를 해결하기 위해 데이터를 분석하고, 최적화된 아키텍처를 설계하여 <span className="text-sunset-gold">신뢰할 수 있는 시스템</span>을 만드는 것에 가치를 둡니다."
                  </p>
                  <div className="pt-8 grid grid-cols-2 gap-6">
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-4xl font-black text-sunset-gold">18+</div>
                      <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Years Exp.</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-3xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-4xl font-black text-tech-cyan">30+</div>
                      <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Footer / Contact */}
      <footer id="contact" className="bg-white pt-32 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
                Let's <span className="text-sunset-gold">build</span> something great.
              </h2>
              <p className="text-xl text-slate-600 max-w-xl mx-auto font-medium">
                프로젝트 제안이나 기술적 논의는 언제든 환영합니다.
              </p>
            </div>

            <div className="flex justify-center gap-8 pt-4">
              <a 
                href="https://github.com/rlarua" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-sunset-gold/50 hover:bg-sunset-gold/5 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <Github className="w-8 h-8 text-slate-600 group-hover:text-sunset-gold transition-colors" />
              </a>
              <a 
                href="mailto:rlarua@outlook.com" 
                className="w-20 h-20 rounded-3xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-sunset-gold/50 hover:bg-sunset-gold/5 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1"
              >
                <Mail className="w-8 h-8 text-slate-600 group-hover:text-sunset-gold transition-colors" />
              </a>
            </div>

            {/* Bottom Section */}
            <div className="pt-20 space-y-8">
              <div className="h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent w-full"></div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <span>© 2026 {profile.name}</span>
                
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  onClick={() => setIsReadmeOpen(true)}
                  className="flex items-center gap-3 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors duration-300 cursor-pointer group"
                >
                  <span className="normal-case tracking-normal">Built with</span>
                  
                  {/* 하트 아이콘: 두근거리는 애니메이션 */}
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-red-500"
                  >
                    <Heart size={16} fill="currentColor" />
                  </motion.span>

                  <span className="normal-case tracking-normal">&</span>

                  {/* 반짝이 아이콘: 회전 및 반짝임 애니메이션 */}
                  <motion.span
                    animate={{ 
                      rotate: [0, 15, -15, 0],
                      opacity: [1, 0.5, 1] 
                    }}
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="text-amber-400"
                  >
                    <Sparkles size={16} fill="currentColor" />
                  </motion.span>

                  <span className="ml-1 tracking-tight uppercase text-[10px] bg-slate-100 px-3 py-1 rounded-full border border-slate-200 text-slate-600 font-black group-hover:border-sunset-gold/30 group-hover:bg-sunset-gold/5 transition-colors">
                    AI Orchestration
                  </span>
                </motion.div>

                <span>South Korea</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ReadmeModal isOpen={isReadmeOpen} onClose={() => setIsReadmeOpen(false)} />
    </div>
  );
};

export default App;