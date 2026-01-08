import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

/**
 * ProjectCard 컴포넌트
 * 주요 프로젝트 정보를 카드 형태로 보여주는 컴포넌트입니다.
 * 태그와 핵심 성과(Key Results)를 확장/축소하여 보여주는 기능이 포함되어 있습니다.
 * 
 * @param {Object} project - 프로젝트 정보 객체
 */
const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false); // 카드 확장 상태

  // 데스크톱 호버 핸들러 - 모바일(768px 미만)에서는 동작하지 않음
  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      setIsExpanded(false);
    }
  };
  
  // 모바일 탭 핸들러 - 카드 전체 클릭 시 확장 토글
  const handleCardClick = () => {
    if (window.innerWidth < 768) {
      setIsExpanded(!isExpanded);
    }
  };
  
  // "더 보기" 버튼 핸들러 - 모바일과 데스크톱 모두 동작
  const handleShowMoreClick = (e) => {
    e.stopPropagation(); // 카드 클릭 이벤트 방지
    setIsExpanded(!isExpanded);
  };

  // 표시할 핵심 성과 데이터 처리
  const topResult = project.keyResults && project.keyResults.length > 0 ? project.keyResults[0] : null; // 첫 번째 성과
  const remainingResults = project.keyResults && project.keyResults.length > 1 ? project.keyResults.slice(1) : []; // 나머지 성과들

  // 태그 표시 로직 (기본 3개 표시, 나머지는 숨김)
  const visibleTagCount = 3;
  const hiddenTagCount = project.tags.length > visibleTagCount ? project.tags.length - visibleTagCount : 0;

  return (
    <div 
      className="group w-full max-w-full"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[320px] md:min-h-[350px] cursor-pointer md:cursor-default"
        onClick={handleCardClick}
      >
        <div className="p-7 md:p-9 flex flex-col h-full">
          {/* 헤더 섹션 */}
          <div className="flex justify-between items-start mb-3">
            <div className="space-y-1">
              <span className="text-sm font-medium text-sunset-gold uppercase tracking-wider">{project.client}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-[1.4]">{project.title}</h3>
            </div>
          </div>
          
          {/* 프로젝트 설명 - 최대 3줄 표시 */}
          <p className="text-slate-600 text-base leading-[1.6] line-clamp-3 mb-4">
            {project.description}
          </p>

          {/* 확장 가능한 콘텐츠  레이너 - 태그와 성과를 포함 */}
          <div className={`mb-4 transition-all duration-300 ${
            isExpanded ? 'max-h-[600px]' : 'max-h-[120px]' // 확장 시 높이 증가
          } overflow-hidden`}>
            {/* 태그 섹션 */}
            <div className="flex flex-wrap gap-1.5 mb-3">
              {project.tags.map((tag, index) => (
                <span 
                  key={tag} 
                  className={`px-2.5 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-[11px] font-bold text-slate-500 uppercase whitespace-nowrap transition-opacity duration-300 ${
                    !isExpanded && index >= visibleTagCount ? 'hidden' : 'opacity-100' // 확장되지 않았을 때 일부 태그 숨김
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* 핵심 성과(Key Results) 섹션 */}
            {topResult && (
              <div className="pt-3 border-t border-slate-100">
                {/* 최상위 성과 (항상 표시될 수 있음) */}
                <div className="flex gap-2 items-start mb-2">
                  <CheckCircle2 className="w-4 h-4 text-sunset-gold flex-shrink-0 mt-0.5" />
                  <p className={`text-sm text-slate-700 font-medium leading-relaxed ${
                    isExpanded ? '' : 'line-clamp-2'
                  }`}>
                    {topResult}
                  </p>
                </div>

                {/* 나머지 성과 (확장 시에만 표시) */}
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

          {/* 푸터 - 항상 하단 고정 */}
          <div className="pt-3 border-t border-slate-100 mt-auto">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm text-slate-700 font-bold">{project.period}</span>
              {/* 더 보기/접기 버튼 (조건부 렌더링) */}
              {(remainingResults.length > 0 || hiddenTagCount > 0) && (
                <span 
                  className="text-[11px] text-sunset-gold font-bold whitespace-nowrap cursor-pointer"
                  onClick={handleShowMoreClick}
                >
                  {isExpanded ? 'Collapse' : 'Expand'}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
