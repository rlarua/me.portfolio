import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

/**
 * ProjectCard 컴포넌트
 * 
 * 주요 프로젝트를 카드 형태로 표시합니다.
 * 데스크톱에서는 호버 시, 모바일에서는 클릭 시 확장/축소됩니다.
 * 
 * @param {Object} project - 프로젝트 정보 (client, title, description, tags, keyResults, period)
 * @param {boolean} isExpanded - 카드 확장 상태
 * @param {Function} onExpand - 확장 상태 변경 핸들러
 */
const ProjectCard = ({ project, isExpanded, onExpand }) => {

  const handleMouseEnter = () => {
    if (window.innerWidth >= 768) {
      onExpand(true);
    }
  };
  
  const handleMouseLeave = () => {
    if (window.innerWidth >= 768) {
      onExpand(false);
    }
  };
  
  const handleCardClick = () => {
    if (window.innerWidth < 768) {
      onExpand(!isExpanded);
    }
  };
  
  const handleShowMoreClick = (e) => {
    e.stopPropagation();
    onExpand(!isExpanded);
  };

  const topResult = project.keyResults && project.keyResults.length > 0 ? project.keyResults[0] : null;
  const remainingResults = project.keyResults && project.keyResults.length > 1 ? project.keyResults.slice(1) : [];

  const visibleTagCount = 3;
  const hiddenTagCount = project.tags.length > visibleTagCount ? project.tags.length - visibleTagCount : 0;

  return (
    <div 
      className="group w-full max-w-full self-start"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Card 
        className="bg-white border-slate-200 shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden min-h-[320px] md:min-h-[350px] cursor-pointer md:cursor-default flex flex-col"
        onClick={handleCardClick}
      >
        <CardHeader className="p-7 md:p-9 pb-3">
          <div className="flex justify-between items-start mb-3">
            <div className="space-y-1">
              <span className="text-sm font-medium text-sunset-gold uppercase tracking-wider">{project.client}</span>
              <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-[1.4]">{project.title}</h3>
            </div>
          </div>
          
          <p className="text-slate-600 text-base leading-[1.7] line-clamp-3">
            {project.description}
          </p>
        </CardHeader>

        <CardContent className={`px-7 md:px-9 pb-4 transition-[max-height,opacity] duration-500 ease-in-out ${
          isExpanded ? 'max-h-[600px]' : 'max-h-[120px]'
        } overflow-hidden`}>
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.tags.map((tag, index) => (
              <Badge 
                key={tag} 
                variant="secondary"
                className={`bg-slate-50 border border-slate-100 text-slate-500 hover:bg-slate-100 text-[11px] font-bold uppercase whitespace-nowrap ${
                  !isExpanded && index >= visibleTagCount ? 'hidden' : ''
                }`}
              >
                {tag}
              </Badge>
            ))}
          </div>

          {topResult && (
            <div className="pt-3 border-t border-slate-100">
              <div className="flex gap-2 items-start mb-2">
                <CheckCircle2 className="w-4 h-4 text-sunset-gold flex-shrink-0 mt-0.5" />
                <p className={`text-sm text-slate-700 font-medium leading-relaxed ${
                  isExpanded ? '' : 'line-clamp-2'
                }`}>
                  {topResult}
                </p>
              </div>

              {remainingResults.length > 0 && remainingResults.map((result, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-2 items-start mb-2 transition-opacity duration-400 ${
                    isExpanded ? 'opacity-100' : 'opacity-0 hidden'
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
        </CardContent>

        <CardFooter className="px-7 md:px-9 pb-7 md:pb-9 pt-3 border-t border-slate-100">
          <div className="flex flex-wrap items-center justify-between gap-2 w-full">
            <span className="text-sm text-slate-700 font-bold">{project.period}</span>
            {(remainingResults.length > 0 || hiddenTagCount > 0) && (
              <span 
                className="text-[11px] text-sunset-gold font-bold whitespace-nowrap cursor-pointer inline-flex items-center gap-1 px-2.5 py-1 rounded-full border border-sunset-gold/40 bg-sunset-gold/10 hover:bg-sunset-gold/20 transition-colors"
                onClick={handleShowMoreClick}
              >
                {isExpanded ? 'Collapse' : 'Expand'}
              </span>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProjectCard;
