import React from 'react';

/**
 * TechStackItem 컴포넌트
 * 기술 스택의 세부 항목(스킬)을 보여주는 배지(Badge) 형태의 컴포넌트입니다.
 * 클릭 시 해당 스킬에 대한 상세 정보를 보여주는 기능을 수행할 수 있습니다.
 * 
 * @param {Object} subStack - 기술 스택 상세 정보 (이름, 카운트 등)
 * @param {Function} onClick - 클릭 이벤트 핸들러
 */
const TechStackItem = ({ subStack, onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan rounded-full" type="button">
      <span className="inline-flex items-center gap-0.5 bg-slate-700/80 rounded-full 
                       hover:bg-slate-600 
                       transition-colors duration-200">
        {/* 스킬 이름 영역 - 모바일 최적화된 패딩 적용 */}
        <span className="pl-2.5 pr-1 py-1 text-slate-200 text-sm font-medium">
          {subStack.name}
        </span>
        {/* 프로젝트 개수 배지 영역 - 반투명 브랜드 컬러 적용 */}
        <span className="px-1.5 py-0.5 bg-tech-cyan/20 text-slate-200 text-xs font-semibold 
                         rounded-xl min-w-[18px] text-center mr-0.5">
          +{subStack.count}
        </span>
      </span>
    </button>
  );
};

export default TechStackItem;
