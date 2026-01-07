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
  X
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
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

  const projects = [
    {
      id: 1,
      title: "설비지능화 Platform",
      client: "삼성SDI / InterX",
      period: "2023.09 - 2023.12",
      tags: ["C#", "ASP.NET Core", "MQTT", "InfluxDB"],
      description: "TSDB 기반의 실시간 설비 데이터 수집 및 분석 플랫폼. 시간당 4만건 이상의 이벤트를 처리하는 Global-Local 분산 아키텍처 설계.",
      category: "enterprise"
    },
    {
      id: 2,
      title: "ISH Platform",
      client: "InterX",
      period: "2024.10 - 2025.03",
      tags: ["React.js", ".NET Core", "Docker", "PostgreSQL"],
      description: "ISO/IEC 표준 기반 메타데이터 레지스트리 구축. 이기종 시스템 간 데이터 상호운용성을 위한 시맨틱 정보 관리 인프라 확립.",
      category: "enterprise"
    },
    {
      id: 3,
      title: "Gudak 6",
      client: "스크루바",
      period: "2021.03 - 2021.05",
      tags: ["Swift", "OpenGL", "Firebase"],
      description: "글로벌 히트 필름 카메라 앱 리빌딩. AI 필터 카메라 기능 제안 및 iOS 클라이언트 전체 개발 주도.",
      category: "mobile"
    },
    {
      id: 4,
      title: "AI_SVR Module",
      client: "한국도로공사",
      period: "2022.03 - 2022.05",
      tags: ["Python", "TensorFlow", "Shared Memory"],
      description: "고정식 축중기 시스템용 적재불량 판별 AI 모듈. 레거시 환경과의 고속 연동을 위해 Shared Memory 구조 설계.",
      category: "ai"
    },
    {
      id: 5,
      title: "B9 반려동물 플랫폼",
      client: "MBC PLUS",
      period: "2017.04 - 2017.10",
      tags: ["Java", "Swift", "RTMP", "HLS"],
      description: "숏폼 및 실시간 스트리밍 기반 반려동물 특화 플랫폼. 아키텍처 설계 및 iOS/Android 앱 개발 총괄.",
      category: "mobile"
    },
    {
      id: 6,
      title: "NIR Data Gathering",
      client: "대상(주)",
      period: "2024.04 - 2024.05",
      tags: ["C# WPF", "Modbus RTU", "PostgreSQL"],
      description: "바이오 공정 NIR 분석 데이터 자동화 수집 시스템. 수기 관리 프로세스를 자동화하여 데이터 신뢰도 확보.",
      category: "enterprise"
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-charcoal-black font-sans selection:bg-sunset-gold/20">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-charcoal-black rounded-lg flex items-center justify-center text-white font-bold">M</div>
              <span className="text-xl font-bold tracking-tight text-slate-800 uppercase">{profile.name}</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-sunset-gold transition-colors">
                  {item}
                </a>
              ))}
              <button className="bg-charcoal-black text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-800 transition-all">
                Hire Me
              </button>
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
              <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tight">
                {profile.motto}
              </h1>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl leading-relaxed">
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
      <section id="skills" className="py-20 bg-charcoal-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Technology Stack</h2>
            <p className="text-slate-400">하드웨어 제어부터 분산 서버, AI 파이프라인까지의 통합 역량</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      <section id="projects" className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Featured Projects</h2>
              <p className="text-slate-600">실제 비즈니스 문제를 해결한 주요 프로젝트 사례들입니다.</p>
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
                  {tab === 'all' ? '전체' : tab === 'enterprise' ? '엔터프라이즈' : tab === 'mobile' ? '모바일' : 'AI'}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group bg-white rounded-3xl border border-slate-200 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="p-8 space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="text-xs font-bold text-sunset-gold uppercase tracking-wider">{project.client}</span>
                      <h3 className="text-xl font-bold text-slate-900">{project.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed min-h-[4rem]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-slate-50 border border-slate-100 rounded text-[10px] font-bold text-slate-500 uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                    <span className="text-xs text-slate-400 font-medium">{project.period}</span>
                    <button onClick={() => setSelectedProject(project)} className="text-sm font-bold text-sunset-gold flex items-center gap-1 group-hover:gap-2 transition-all">
                      상세보기 <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSelectedProject(null)}></div>
          <div className="relative bg-white rounded-2xl max-w-2xl w-full p-8 mx-4">
            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2">
              <X />
            </button>
            <div className="space-y-3">
              <div className="text-xs font-bold text-sunset-gold uppercase tracking-wider">{selectedProject.client}</div>
              <h3 className="text-2xl font-bold text-slate-900">{selectedProject.title}</h3>
              <div className="text-sm text-slate-500">{selectedProject.period}</div>
              <p className="mt-4 text-slate-700">{selectedProject.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {selectedProject.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-charcoal-black/5 border border-charcoal-black/10 rounded text-[12px] font-semibold text-slate-600">{tag}</span>
                ))}
              </div>
              <div className="mt-6 flex justify-end">
                <button onClick={() => setSelectedProject(null)} className="px-4 py-2 bg-charcoal-black text-white rounded-lg">닫기</button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Expertise Section */}
      <section className="py-20 bg-charcoal-black text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                Full-Cycle Owner-Ship<br />통합 구현 역량
              </h2>
              <div className="space-y-6">
                {[
                  { title: "Scale & Reliability", desc: "24/7 무중단 시스템 설계 및 99.9% 가동률 달성" },
                  { title: "Delivery & Speed", desc: "3개월 내 고도화 플랫폼 구축 및 타이트한 일정 준수" },
                  { title: "Data & Monitoring", desc: "TSDB 기반 대용량 데이터 처리 및 응답속도 최적화" }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-sunset-gold/20 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-blue-100" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">{item.title}</h4>
                      <p className="text-blue-100 opacity-80">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
               <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm font-bold text-sunset-gold">
                    <Zap className="w-4 h-4" /> EXPERIENCE FOCUS
                  </div>
                  <p className="text-lg leading-relaxed italic">
                    "운영 현장의 난제를 해결하기 위해 데이터를 분석하고, 최적화된 아키텍처를 설계하여 신뢰할 수 있는 시스템을 만드는 것에 가치를 둡니다."
                  </p>
                  <div className="pt-6 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <div className="text-2xl font-bold">15+</div>
                      <div className="text-xs text-blue-200">Years of Experience</div>
                    </div>
                    <div className="p-4 bg-white/5 rounded-2xl">
                      <div className="text-2xl font-bold">30+</div>
                      <div className="text-xs text-blue-200">Projects Delivered</div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center space-y-8">
            {/* Main CTA */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900">
                Let's work together.
              </h2>
              <p className="text-lg text-slate-600 max-w-xl mx-auto">
                프로젝트 제안이나 기술적 논의는 언제든 환영합니다.
              </p>
            </div>

            {/* Large Social Icons */}
            <div className="flex justify-center gap-6 pt-4">
              <a 
                href="#" 
                className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-sunset-gold hover:bg-sunset-gold/5 transition-all group"
              >
                <Github className="w-7 h-7 text-slate-600 group-hover:text-sunset-gold transition-colors" />
              </a>
              <a 
                href="#" 
                className="w-16 h-16 rounded-full border-2 border-slate-200 flex items-center justify-center hover:border-sunset-gold hover:bg-sunset-gold/5 transition-all group"
              >
                <Mail className="w-7 h-7 text-slate-600 group-hover:text-sunset-gold transition-colors" />
              </a>
            </div>

            {/* Divider */}
            <div className="pt-12">
              <div className="h-px bg-slate-200 w-full"></div>
            </div>

            {/* Copyright */}
            <div className="text-slate-400 text-sm">
              © 2026 {profile.name}. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;