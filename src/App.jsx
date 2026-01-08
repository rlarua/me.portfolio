// React 및 Hooks
import React, { useState, useEffect } from 'react';
// 아이콘 라이브러리 (lucide-react) - UI에 사용되는 다양한 아이콘들
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
// 애니메이션 라이브러리 (Framer Motion)
import { motion, AnimatePresence } from 'framer-motion';
// 데이터 파일 임포트
import projectsData from './data/projects.json';
import projectHistoryData from './data/projectHistory.json';
import techStacksData from './data/techStacks.json';
// 모달 및 UI 컴포넌트
import TechStackModal from './components/TechStackModal';
import ReadmeModal from './components/ReadmeModal';
import HistoryCard from './components/HistoryCard';
import ProjectCard from './components/ProjectCard';
import TechStackItem from './components/TechStackItem';

// App: 메인 애플리케이션 컴포넌트
const App = () => {
  // --- 상태 관리 (State Management) ---
  const [isMenuOpen, setIsMenuOpen] = useState(false); // 모바일 메뉴 열림/닫힘 상태
  const [activeTab, setActiveTab] = useState('all'); // 프로젝트 필터링 탭 상태 (all, enterprise, mobile, ai)
  const [selectedStack, setSelectedStack] = useState(null); // 선택된 기술 스택 (모달 표시용)
  const [isHistoryVisible, setIsHistoryVisible] = useState(false); // 전체 프로젝트 이력 표시 여부
  const [isReadmeOpen, setIsReadmeOpen] = useState(false); // 개발 스토리(README) 모달 열림/닫힘

  // --- 이펙트 (Effects) ---
  // ESC 키로 모바일 메뉴 닫기 기능
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // --- 데이터 정의 (Data Definitions) ---
  // 기본 프로필 정보
  const profile = {
    name: "김명겸",
    title: "Full-Cycle Product Engineer",
    motto: "기술을 연결해 '제품의 완결성'을 만듭니다.",
    description: "Hardware 엔지니어로 시작해 Mobile, Platform, AI로 영역을 확장하며, '어떤 기술이든 배워서 문제를 해결한다'는 신념으로 일해왔습니다.",
  };

  // 주요 성과 통계 데이터
  const stats = [
    { label: "서비스 가용성", value: "99.9%", desc: "고가용성(HA) 아키텍처 설계" },
    { label: "플랫폼 구축", value: "3개월+", desc: "기술 스택 선정부터 MVP 런칭" },
    { label: "데이터 처리 최적화", value: "400만+", desc: "대규모 실시간 데이터 스트리밍 설계" },
    { label: "AI 정확도", value: "99.2%", desc: "딥러닝 기반 이미지 분석 및 패턴 인식" },
  ];

  // 아이콘 매핑 유틸리티 함수
  // 문자열로 된 아이콘 타입을 실제 컴포넌트로 변환
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
    return iconMap[iconType] || <Code2 className="w-4 h-4" />; // 기본값: Code2 아이콘
  };

  // techStacks.json 데이터를 처리하여 아이콘과 카운트 정보를 포함한 객체 배열로 변환
  const techStacks = techStacksData.map(category => ({
    category: category.category,
    icon: getIcon(category.icon),
    stacks: category.stack.map(stack => ({
      name: stack.name,
      skills: stack.skills,
      projects: stack.projects,
      count: stack.skills.length
    }))
  }));

  const projects = projectsData;

  // 활성 탭에 따른 프로젝트 필터링 로직
  const filteredProjects = activeTab === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  // 프로젝트 이력 데이터 처리 (아이콘 매핑 적용)
  const projectHistory = projectHistoryData.map(phase => ({
    ...phase,
    projects: phase.projects.map(project => ({
      ...project,
      icon: getIcon(project.iconType)
    }))
  }));

  // 전체 프로젝트 총 개수 계산 (이력 섹션 표시용)
  const totalProjectCount = projectHistory.reduce((total, phase) => total + phase.projects.length, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-charcoal-black font-sans selection:bg-sunset-gold/20">
      {/* --- 네비게이션 (Navigation) --- */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* 로고 및 이름 영역 */}
            <div className="flex items-center gap-3 group cursor-default">
              {/* 로고 아바타 */}
              <div className="w-10 h-10 bg-charcoal-black rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-md group-hover:bg-sunset-gold group-hover:scale-105 transition-all duration-300">
                M
              </div>
              {/* 이름 및 직함 */}
              <div className="flex flex-col">
                <span className="text-xl md:text-xl font-black tracking-tight text-slate-900 uppercase group-hover:text-sunset-gold transition-colors duration-300 leading-none mb-0.5">
                  {profile.name}
                </span>
                <span className="text-xs md:text-sm font-semibold text-slate-500 tracking-wide group-hover:text-slate-800 transition-colors duration-300">
                  {profile.title}
                </span>
              </div>
            </div>
            
            {/* 데스크톱 네비게이션 메뉴 (모바일에서는 숨김) */}
            <div className="hidden md:flex items-center gap-8">
              {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-medium text-slate-600 hover:text-sunset-gold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan rounded">
                  {item}
                </a>
              ))}
            </div>

            {/* 모바일 네비게이션 토글 버튼 (데스크톱에서는 숨김) */}
            <button className="md:hidden p-2 rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        
        {/* 모바일 드롭다운 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 p-4 space-y-4">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="block text-base font-medium text-slate-600"
                onClick={() => setIsMenuOpen(false)} // 메뉴 클릭 시 닫기
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* --- 히어로 섹션 (Hero Section) --- */}
      <section id="about" className="pt-32 pb-20 px-6 md:px-4">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center text-center space-y-6 md:space-y-10">
            {/* 히어로 헤더 컨테이너: 경력 년수 + 메인 타이틀 */}
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* 왼쪽: 경력 년수 강조 (Left: Experience Highlight) */}
              <motion.div 
                className="experience-highlight flex-shrink-0 text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="number text-[4rem] md:text-[5rem] font-bold leading-none bg-gradient-to-r from-orange-500 to-sunset-gold bg-clip-text text-transparent">
                  18+
                </div>
                <div className="label text-sm font-medium tracking-[0.1em] text-slate-600 -mt-2 uppercase">
                  YEARS
                </div>
              </motion.div>
              
              {/* 오른쪽: 메인 타이틀 블록 (Title Block) */}
              <motion.div 
                className="title-block text-center flex flex-col items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="flex flex-col items-center gap-3">
                  <h1 className="text-4xl md:text-5xl font-extrabold leading-[1.2] tracking-tight text-slate-900 uppercase">
                    FULL-CYCLE<br />PRODUCT ENGINEER
                  </h1>
                  
                  {/* AI-Orchestrated 배지: 클릭 시 README 모달 오픈 */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#00E5FF] text-[#1A1A1A] font-bold rounded-full shadow-lg shadow-[#00E5FF]/20 cursor-pointer group transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_4px_15px_rgba(0,229,255,0.3)]"
                    onClick={() => setIsReadmeOpen(true)}
                  >
                    <div className="relative">
                      <Sparkles className="w-3.5 h-3.5 text-[#1A1A1A] fill-[#1A1A1A]" />
                      {/* 배경 애니메이션 효과 */}
                      <motion.div 
                        className="absolute inset-0 bg-white rounded-full blur-sm -z-10 opacity-30"
                        animate={{ opacity: [0.1, 0.4, 0.1], scale: [1, 1.4, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                    </div>
                    <span className="text-[10px] uppercase tracking-wider">AI-Orchestrated</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>

            {/* 히어로 설명 (Hero Description) - 모토 */}
            <motion.p 
              className="hero-description text-3xl md:text-4xl font-bold text-slate-800 max-w-3xl leading-[1.3]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {profile.motto}
            </motion.p>
            
            {/* 세부 설명 */}
            <motion.p 
                className="text-lg md:text-xl text-slate-500 max-w-3xl leading-[1.7]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                {profile.description}
            </motion.p>

            {/* 통계 카드 그리드 - 데스크톱 4열, 모바일 2열 */}
            <motion.div 
              className="w-full pt-4 md:pt-8"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, idx) => (
                  <motion.div 
                    key={idx} 
                    className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 + idx * 0.1 }} // 순차적 등장 애니메이션
                  >
                    <div className="text-3xl font-bold text-sunset-gold mb-1">{stat.value}</div>
                    <div className="text-sm font-bold text-slate-800 mb-1">{stat.label}</div>
                    <div className="text-xs text-slate-500">{stat.desc}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 기술 스택 섹션 (Tech Stack Section) --- */}
      <section id="skills" className="py-16 md:py-20 bg-charcoal-black text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold leading-[1.3]">Technology Stack</h2>
            <p className="text-slate-400">하드웨어 제어부터 분산 서버, AI 파이프라인까지의 통합 역량</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {techStacks.map((stack, idx) => (
              <div key={idx} className="p-8 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-all group">
                <div className="w-12 h-12 bg-tech-cyan/10 rounded-xl flex items-center justify-center text-tech-cyan mb-6 group-hover:bg-tech-cyan group-hover:text-charcoal-black transition-all">
                  {stack.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 leading-[1.4]">{stack.category}</h3>
                <div className="flex flex-wrap gap-2.5 md:gap-2">
                  {stack.stacks.map((subStack, subIdx) => (
                    // 각 기술 항목 (TechStackItem)
                    <TechStackItem 
                      key={subIdx} 
                      subStack={subStack} 
                      onClick={() => setSelectedStack({ 
                        name: subStack.name, 
                        skills: subStack.skills,
                        projects: subStack.projects 
                      })}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 주요 프로젝트 섹션 (Featured Projects Section) --- */}
      <section id="projects" className="py-16 md:py-24 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* 섹션 헤더 및 필터 탭 */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-[1.3]">Featured Projects</h2>
              <p className="text-slate-600">
                실제 비즈니스 문제를 해결한 주요 프로젝트 사례들입니다.
                {/* <span className="text-sm text-slate-500">상세 내용을 확인하고 싶으시면 포트폴리오를 요청하세요.</span> */}
              </p>
            </div>
            
            {/* 프로젝트 카테고리 필터 버튼 */}
            <div className="flex p-1 bg-slate-100 rounded-xl">
              {['all', 'enterprise', 'mobile', 'ai'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg capitalize transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan ${
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

          {/* 프로젝트 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* --- 프로젝트 이력 토글 버튼 (History Toggle Button) --- */}
      <div className="py-16 px-4 bg-gradient-to-b from-slate-50 to-white flex flex-col items-center gap-4">
        <div className="text-center space-y-2 mb-2">
          <p className="text-sm text-slate-500 font-medium">더 많은 프로젝트가 궁금하신가요?</p>
        </div>
        
        {/* 토글 버튼: 전체 이력 표시/숨김 */}
        <button
          onClick={() => setIsHistoryVisible(!isHistoryVisible)}
          className="group flex items-center gap-3 px-8 py-4 bg-charcoal-black hover:bg-sunset-gold border-2 border-charcoal-black hover:border-sunset-gold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-gold"
          aria-expanded={isHistoryVisible}
        >
          <span className="text-lg font-bold text-white">
            {isHistoryVisible ? '전체 이력 숨기기' : `전체 프로젝트 보기 (${totalProjectCount}+)`}
          </span>
          <ChevronRight className={`w-5 h-5 text-white transition-transform duration-300 ${
            isHistoryVisible ? 'rotate-90' : 'rotate-0'
          }`} />
        </button>
      </div>

      {/* --- 전체 프로젝트 이력 타임라인 (Complete Project History Timeline) --- */}
      <div className={`transition-all duration-700 ease-in-out transform ${
        isHistoryVisible 
          ? 'opacity-100 translate-y-0 max-h-[10000px]' 
          : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'
      }`}>
      {isHistoryVisible && (
      <section className="py-24 px-4 bg-white relative overflow-hidden animate-in fade-in slide-in-from-top-4 duration-700">
        {/* 추상적 배경 장식 (Abstract Background) */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-sunset-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-tech-cyan/5 blur-[120px] rounded-full"></div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-[1.3]">Complete Project History</h2>
            <div className="w-20 h-1.5 bg-sunset-gold mx-auto rounded-full"></div>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">2007년부터 현재까지의 전체 프로젝트 이력을 연대순으로 정리했습니다.</p>
          </div>

          <div className="relative">
            {/* 중앙 수직 타임라인 (Vertical Line) */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sunset-gold/50 via-slate-200 to-tech-cyan/50 hidden sm:block"></div>

            {projectHistory.map((phase, phaseIdx) => (
              <div key={phaseIdx} className="mb-24 last:mb-0">
                {/* 단계 헤더 (마일스톤) */}
                <div className="flex flex-col md:flex-row items-center md:items-center mb-16 relative gap-6">
                  {/* 모바일용 구분선 */}
                  <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent md:hidden"></div>
                  
                  {/* 중앙 아이콘 배지 */}
                  <div className="relative md:absolute md:left-8 md:-translate-x-1/2 z-20 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-sunset-gold to-amber-500 shadow-2xl flex-shrink-0">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* 마일스톤 날짜 및 제목 */}
                  <div className="relative z-20 bg-white md:bg-transparent px-8 md:pl-24 md:px-0 py-2 text-center md:text-left">
                    <div className="text-[10px] font-black text-sunset-gold tracking-[0.3em] uppercase mb-1">{phase.period}</div>
                    <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">{phase.milestone}</h3>
                  </div>
                </div>

                {/* 해당 단계의 프로젝트 목록 */}
                <div className="space-y-8">
                  {phase.projects.map((project, idx) => (
                    <div key={idx} className="relative flex flex-col md:flex-row items-center">
                      {/* 타임라인 노드 점 */}
                      <div className="absolute left-4 md:left-8 top-10 w-3 h-3 bg-white border-2 border-slate-400 rounded-full transform -translate-x-1/2 z-20 hidden sm:block"></div>
                      
                      {/* 히스토리 카드 컴포넌트 */}
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

      {/* --- 전문성 섹션 (Expertise Section) --- */}
      <section className="py-16 md:py-24 bg-charcoal-black text-white relative overflow-hidden">
        {/* 미세 패턴 배경 (Grid Pattern) */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* 왼쪽: 설명 텍스트 */}
            <div className="space-y-10">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sunset-gold text-xs font-bold tracking-widest uppercase">
                  <Zap className="w-3.5 h-3.5 fill-sunset-gold/20" /> Engineering Philosophy
                </div>
                <h2 className="text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                  Full-Cycle <span className="text-sunset-gold">Ownership</span><br />타협 없는 제품 완성
                </h2>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "Scale & Reliability", desc: "24/7 무중단 시스템 설계 및 99.9% 가동률 달성" },
                  { title: "Delivery & Speed", desc: "3개월 내 고도화 플랫폼 구축 및 타이트한 일정 준수" },
                  { title: "Data & Monitoring", desc: "TSDB 기반 대용량 데이터 처리 및 응답속도 최적화" },
                  // { 
                  //   title: "AI & Human Synergy", 
                  //   desc: "AI 에이전트를 활용한 초고속 아키텍처 설계 및 구현 (300%+ 생산성)",
                  //   isSpecial: true 
                  // }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex gap-6 group p-4 rounded-xl transition-all duration-300 ${
                      item.isSpecial ? 'border-none shadow-lg shadow-tech-cyan/20' : 'hover:bg-white/5'
                    } cursor-pointer`}
                    style={item.isSpecial ? { background: 'linear-gradient(135deg, #00E5FF 0%, #00C9FF 100%)' } : {}}
                    onClick={item.isSpecial ? () => setIsReadmeOpen(true) : undefined}
                  >
                    <div className={`mt-1 flex-shrink-0 w-8 h-8 rounded-xl flex items-center justify-center transition-all duration-300 ${
                      item.isSpecial 
                        ? 'bg-white/20 text-charcoal-black shadow-sm backdrop-blur-md' 
                        : 'bg-white/5 border border-white/10 text-sunset-gold group-hover:bg-sunset-gold group-hover:border-sunset-gold group-hover:text-charcoal-black'
                    }`}>
                      {item.isSpecial ? <Sparkles className="w-5 h-5 fill-charcoal-black/40" /> : <CheckCircle2 className="w-5 h-5" />}
                    </div>
                    <div>
                      <h4 className={`font-bold text-xl mb-1 ${item.isSpecial ? 'text-charcoal-black' : 'text-white'}`}>{item.title}</h4>
                      <p className={`leading-relaxed font-medium ${item.isSpecial ? 'text-charcoal-black/80' : 'text-slate-400'}`}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 오른쪽: 하이라이트 박스 */}
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
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-4xl font-black text-sunset-gold">18+</div>
                      <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Years Exp.</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-xl border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-4xl font-black text-tech-cyan">{totalProjectCount}+</div>
                      <div className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-wider">Projects</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 푸터 및 연락처 (Footer / Contact) --- */}
      <footer id="contact" className="bg-white pt-32 pb-16 relative">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-12">
            <div className="space-y-6">
              <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter leading-[1.2]">
                Let's <span className="text-sunset-gold">build</span> something great.
              </h2>
              <p className="text-xl text-slate-600 max-w-xl mx-auto font-medium">
                경력기술서 및 포트폴리오(PDF)가 필요하시면 연락 부탁드립니다.
              </p>
            </div>

            {/* 소셜 링크 및 이메일 */}
            <div className="flex justify-center gap-8 pt-4">
              <a 
                href="https://github.com/rlarua" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-sunset-gold/50 hover:bg-sunset-gold/5 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-gold"
                aria-label="GitHub Profile"
              >
                <Github className="w-8 h-8 text-slate-600 group-hover:text-sunset-gold transition-colors" />
              </a>
              <a 
                href="mailto:rlarua@outlook.com" 
                className="w-20 h-20 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center hover:border-sunset-gold/50 hover:bg-sunset-gold/5 transition-all duration-300 group shadow-sm hover:shadow-xl hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunset-gold"
                aria-label="Email Contact"
              >
                <Mail className="w-8 h-8 text-slate-600 group-hover:text-sunset-gold transition-colors" />
              </a>
            </div>

            {/* 하단 카피라이트 및 AI Orchestration 배지 */}
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

      {/* 모달 컴포넌트 렌더링 */}
      <ReadmeModal isOpen={isReadmeOpen} onClose={() => setIsReadmeOpen(false)} />
      <TechStackModal 
        isOpen={!!selectedStack} 
        onClose={() => setSelectedStack(null)} 
        stackName={selectedStack?.name || ''} 
        skills={selectedStack?.skills || []} 
        projects={selectedStack?.projects || []}
      />
    </div>
  );
};

export default App;