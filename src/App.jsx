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
  const [isHistoryVisible, setIsHistoryVisible] = useState(false);

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

  const projectHistory = [
    {
      period: "2022 ~ 2025",
      milestone: "Enterprise AI & Platform",
      projects: [
        { title: "ISH Platform", client: "InterX", period: "2024.11~2025.02", desc: "제조 현장 도메인 지식 기반 Semantic 메타데이터 관리 시스템 개발", icon: <Layout className="w-4 h-4" /> },
        { title: "NIR Data Gathering", client: "대상(Daesang)", period: "2024.04~2024.05", desc: "바이오 공정 내 NIR 분석 데이터 자동화 측정 및 수집 시스템", icon: <Server className="w-4 h-4" /> },
        { title: "설비지능화 Platform", client: "삼성SDI, InterX", period: "2023.09~2023.12", desc: "TSDB 기반 대용량 데이터 설계 및 운영 플랫폼 구축", icon: <Database className="w-4 h-4" /> },
        { title: "GreenCar iOS", client: "그린카", desc: "그린카 차세대 앱 개발 및 유지보수 (MAU 2.2M)", icon: <Smartphone className="w-4 h-4" /> },
        { title: "지역보건의료시스템", client: "한국사회보장원", desc: "공공 보건 및 건강관리 시스템 개발", icon: <Server className="w-4 h-4" /> },
        { title: "AI_SVR Module", client: "한국도로공사(TDC 코리아)", period: "2022.03~2022.05", desc: "AI 기반 적재불량 판별 모듈 개발", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      period: "2019 ~ 2021",
      milestone: "Consumer Product Full-Stack",
      projects: [
        { title: "Gudak 6", client: "스크루바, 와캔", period: "2021.03~2021.05", desc: "인공지능 기반 필터 비활성 카메라 서비스 개발", icon: <Cpu className="w-4 h-4" /> },
        { title: "SIXCUT", client: "와캔(Waken)", desc: "랜덤 콜라주 카메라 서비스 개발", icon: <Smartphone className="w-4 h-4" /> },
        { title: "PrinShare 고도화", client: "스크루바(Screw Bar)", desc: "서비스 성능 최적화 및 정부 지원 과제 수행", icon: <Zap className="w-4 h-4" /> },
        { title: "PrinShare", client: "스크루바(Screw Bar)", period: "2019.01~2019.05", desc: "이미지 분석 및 입고 인화 서비스, Redis 기반 캐시 레이어 설계", icon: <Database className="w-4 h-4" /> },
        { title: "Artalleys", client: "Artalleys", desc: "미술품 커머스 플랫폼 구축", icon: <Globe className="w-4 h-4" /> },
        { title: "열전발전 시스템", client: "포스코, LG화학", desc: "고효율 친환경 열전발전 제어 시스템 개발", icon: <Cpu className="w-4 h-4" /> }
      ]
    },
    {
      period: "2015 ~ 2018",
      milestone: "Global Startup CTO",
      projects: [
        { title: "B9", client: "MBC PLUS", period: "2018.06~2018.12", desc: "반려동물 전용 미디어 플랫폼 구축 및 MBC 제휴 운영", icon: <Layout className="w-4 h-4" /> },
        { title: "Love.ly", client: "Applr", desc: "글로벌 실시간 스트리밍 플랫폼 구축", icon: <Server className="w-4 h-4" /> },
        { title: "GUDAK", client: "스크루바(Screw Bar)", desc: "필름 카메라 시뮬레이션 애플리케이션 개발", icon: <Smartphone className="w-4 h-4" /> },
        { title: "72CAST", client: "BMW, Mediacorp", desc: "라이브 커머스 MVP 개발", icon: <Zap className="w-4 h-4" /> },
        { title: "BAUBOX", client: "Applr", desc: "반려동물 용품 정기구독 서비스 개발", icon: <Globe className="w-4 h-4" /> }
      ]
    },
    {
      period: "2007 ~ 2014",
      milestone: "Public Infrastructure Engineering",
      projects: [
        { title: "SK One Pos", client: "SK M&S", desc: "주유소 결제 및 운영 시스템 개발", icon: <Smartphone className="w-4 h-4" /> },
        { title: "고정식 축중기 Platform", client: "한국도로공사", period: "2012.02~2013.06", desc: "축중기 현장 운영을 위한 계측·판정·관제 소프트웨어 구축", icon: <Server className="w-4 h-4" /> },
        { title: "SI Automation", client: "CyberLogitec", desc: "해양 물류 자동화 시스템 구축", icon: <Zap className="w-4 h-4" /> },
        { title: "대방 건설 ERP", client: "대방건설", desc: "사내 자원 관리 시스템(ERP) 개발", icon: <Database className="w-4 h-4" /> },
        { title: "서울대 주차관제 시스템", client: "서울대학교", desc: "주차 차단기 제어 및 관제 시스템 구축", icon: <Layout className="w-4 h-4" /> },
        { title: "이동식 축중기 인디게이터", client: "한국도로공사", desc: "과적 단속을 위한 이동식 축중기 중량 표시기 개발", icon: <Cpu className="w-4 h-4" /> }
      ]
    }
  ];

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

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Duration</span>
                      <span className="text-sm text-slate-700 font-bold">{project.period}</span>
                    </div>
                  </div>
                </div>
              </div>
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
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunset-gold/50 via-slate-200 to-tech-cyan/50 transform md:-translate-x-1/2 hidden sm:block"></div>

            {projectHistory.map((phase, phaseIdx) => (
              <div key={phaseIdx} className="mb-24 last:mb-0">
                {/* Phase Header */}
                <div className="flex flex-col items-center mb-16 relative">
                  {/* Decorative Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="relative z-20 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sunset-gold to-amber-500 shadow-2xl mb-6">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Milestone Title */}
                  <div className="relative z-20 bg-white px-8 py-2 text-center">
                    <h3 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-2">{phase.milestone}</h3>
                    <div className="text-xs font-bold text-slate-400 tracking-[0.3em] uppercase">{phase.period}</div>
                  </div>
                </div>

                {/* Projects in Phase */}
                <div className="space-y-10">
                  {phase.projects.map((project, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <div key={idx} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                        {/* Timeline Node on the line */}
                        <div className="absolute left-4 md:left-1/2 top-10 w-3 h-3 bg-white border-2 border-slate-400 rounded-full transform md:-translate-x-1/2 z-20 hidden sm:block"></div>
                        
                        {/* Content Card */}
                        <div className={`w-full md:w-[45%] group`}>
                          <div className="bg-white p-4 md:p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sunset-gold/30 transition-all duration-500 relative overflow-hidden group">
                            {/* Card Accent */}
                            <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 group-hover:bg-sunset-gold transition-colors duration-500"></div>
                            
                            <div className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-sunset-gold/10 group-hover:text-sunset-gold transition-all duration-500 flex-shrink-0">
                                {project.icon}
                              </div>
                              <div className="space-y-2 flex-1">
                                <div className="space-y-0.5">
                                  <span className="text-[9px] font-black text-sunset-gold uppercase tracking-[0.2em]">{project.client}</span>
                                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-sunset-gold transition-colors leading-tight">{project.title}</h4>
                                  {project.period && (
                                    <div className="text-[11px] text-slate-400 font-semibold">{project.period}</div>
                                  )}
                                </div>
                                <p className="text-xs text-slate-600 leading-relaxed font-medium">
                                  {project.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Spacer for the other side */}
                        <div className="hidden md:block md:w-[45%]"></div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      )}
      </div>

      {/* Expertise Section */}
      <section className="py-24 bg-charcoal-black text-white relative overflow-hidden">
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
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm font-bold uppercase tracking-widest">
                <span>© 2026 {profile.name}</span>
                <span className="text-sunset-gold">Crafted with Passion & AI</span>
                <span>South Korea</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;