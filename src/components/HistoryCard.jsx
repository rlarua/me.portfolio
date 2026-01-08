import React, { useState } from 'react';
import { Code2 } from 'lucide-react';

/**
 * HistoryCard 컴포넌트
 * 프로젝트 히스토리를 3D 카드 형태로 보여주는 컴포넌트입니다.
 * 데스크톱에서는 호버 시, 모바일에서는 클릭/탭 시 뒤집히는 효과가 적용됩니다.
 * 
 * @param {Object} project - 프로젝트 정보 객체
 */
const HistoryCard = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false); // 카드 뒤집힘 상태 관리

  // 데스크톱 호버 핸들러 - 모바일(1024px 미만)에서는 동작하지 않음
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024) {
      setIsFlipped(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024) {
      setIsFlipped(false);
    }
  };
  
  // 모바일 탭 핸들러 - 모바일 환경에서만 동작
  const handleClick = () => {
    // 터치 디바이스 또는 작은 화면인지 확인
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
          transform: isFlipped ? 'rotateX(180deg)' : 'rotateX(0deg)', // 상태에 따라 180도 회전
          gridTemplateAreas: '"card"' 
        }}
      >
        {/* 카드 앞면 (Front of Card) */}
        <div 
          className="backface-hidden bg-white p-5 md:p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-sunset-gold/30 transition-all duration-500 overflow-hidden"
          style={{ gridArea: 'card' }}
        >
          {/* 카드 강조 라인 (왼쪽) */}
          <div className="absolute top-0 left-0 w-1.5 h-full bg-slate-100 transition-colors duration-500 group-hover:bg-sunset-gold"></div>
          
          <div className="flex gap-4 items-start h-full">
            {/* 프로젝트 아이콘 */}
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-sunset-gold/10 group-hover:text-sunset-gold transition-all duration-500 flex-shrink-0">
              {project.icon}
            </div>
            <div className="space-y-3 flex-1">
              <div className="space-y-1">
                <div className="flex justify-between items-start gap-2">
                  <div className="space-y-1">
                    {/* 클라이언트/회사명 */}
                    <span className="text-sm md:text-sm font-bold text-sunset-gold uppercase tracking-[0.2em] block">{project.client}</span>
                    {/* 프로젝트 제목 */}
                    <h4 className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-sunset-gold transition-colors leading-tight">{project.title}</h4>
                  </div>
                  {/* 근무 기간 */}
                  {project.period && (
                    <div className="text-[10px] md:text-xs text-slate-400 font-bold whitespace-nowrap bg-slate-50 px-2 py-1 rounded-lg border border-slate-100">{project.period}</div>
                  )}
                </div>
              </div>
              {/* 프로젝트 설명 */}
              <p className="text-base text-slate-600 leading-[1.6] font-normal">
                {project.desc}
              </p>
            </div>
          </div>
        </div>

        {/* 카드 뒷면 (Back of Card - Tech Details) */}
        <div 
          className="backface-hidden bg-gradient-to-br from-slate-900 to-charcoal-black p-5 md:p-6 rounded-xl border border-sunset-gold/30 shadow-xl flex flex-col justify-center"
          style={{ 
            transform: 'rotateX(180deg)',
            gridArea: 'card' 
          }}
        >
          {/* 기술 스택 헤더 */}
          <div className="flex items-center gap-2 mb-3">
            <Code2 className="w-4 h-4 text-sunset-gold" />
            <span className="text-xs font-bold text-sunset-gold uppercase tracking-wider">Tech Stack</span>
          </div>
          {/* 기술 스택 목록 */}
          <p className="text-sm text-slate-300 font-medium leading-relaxed">
            {project.tech}
          </p>
          {/* 하단 안내 문구 (모바일/데스크톱 분기) */}
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

export default HistoryCard;
