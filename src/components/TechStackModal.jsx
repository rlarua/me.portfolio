// React 핵심 라이브러리와 useEffect 훅 import
import React, { useEffect } from 'react';
// lucide-react에서 닫기 아이콘(X) import
import { X } from 'lucide-react';
// framer-motion에서 애니메이션 관련 컴포넌트 import
import { motion, AnimatePresence } from 'framer-motion';

/**
 * TechStackModal 컴포넌트
 * @param {boolean} isOpen - 모달 열림/닫힘 상태
 * @param {function} onClose - 모달 닫기 함수
 * @param {string} stackName - 기술 스택 이름 (모달 제목)
 * @param {array} skills - 스킬 목록 배열
 * @param {array} projects - 해당 기술을 사용한 프로젝트 목록 (선택적)
 */
const TechStackModal = ({ isOpen, onClose, stackName, skills, projects }) => {
  // 모달이 열릴 때 ESC 키 이벤트와 스크롤 방지 처리
  useEffect(() => {
    // ESC 키를 눌렀을 때 모달 닫기
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    // 모달이 열려있을 때만 이벤트 리스너 등록 및 배경 스크롤 방지
    if (isOpen) {
      window.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden'; // 배경 스크롤 방지
    }
    
    // 컴포넌트 언마운트 또는 모달 닫힐 때 정리 작업
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset'; // 스크롤 복원
    };
  }, [isOpen, onClose]);

  return (
    // AnimatePresence: 컴포넌트가 DOM에서 제거될 때도 애니메이션 적용
    <AnimatePresence>
      {isOpen && (
        // 모달 최외곽 컨테이너: 화면 전체를 덮고 중앙 정렬
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* 배경 오버레이 (Backdrop) */}
          <motion.div 
            initial={{ opacity: 0 }} // 초기 상태: 투명
            animate={{ opacity: 1 }} // 애니메이션 상태: 불투명
            exit={{ opacity: 0 }} // 종료 상태: 투명
            onClick={onClose} // 배경 클릭 시 모달 닫기
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          {/* 모달 본체 컨테이너 */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }} // 초기: 투명, 약간 작게, 아래에서
            animate={{ opacity: 1, scale: 1, y: 0 }} // 애니메이션: 불투명, 원래 크기, 원래 위치
            exit={{ opacity: 0, scale: 0.95, y: 20 }} // 종료: 투명, 약간 작게, 아래로
            className="relative w-full max-w-md min-w-[320px] min-h-[200px] bg-white rounded-[2rem] shadow-2xl overflow-hidden"
          >
            {/* 헤더 영역 */}
            <div className="flex items-center justify-between p-6 border-b border-slate-100 h-[72px]">
              {/* 모달 제목 (기술 스택 이름) */}
              <h3 className="text-xl font-bold text-slate-900">{stackName}</h3>
              {/* 닫기 버튼 */}
              <button 
                onClick={onClose}
                className="p-2 hover:bg-slate-50 rounded-full transition-colors group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
              </button>
            </div>

            {/* 콘텐츠 영역 */}
            <div className="p-6 min-h-[100px]">
              {/* 스킬 목록 섹션 */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, idx) => (
                  // 각 스킬을 pill 형태의 배지로 표시
                  <span key={idx} className="px-3 py-1.5 bg-slate-800 text-white text-sm font-medium rounded-full">
                    {skill}
                  </span>
                ))}
              </div>

              {/* 프로젝트 목록 섹션 - 프로젝트가 있을 때만 표시 */}
              {projects && projects.length > 0 && (
                <div className="pt-8 mt-2">
                  {/* 프로젝트 섹션 제목 */}
                  <h4 className="text-sm font-bold text-slate-500 tracking-wider mb-3">
                    Used Projects
                  </h4>
                  {/* 프로젝트 목록 */}
                  <div className="flex flex-wrap gap-2">
                    {projects.map((project, idx) => (
                      // 각 프로젝트를 pill 형태의 배지로 표시 (밝은 배경)
                      <span key={idx} className="px-3 py-1.5 bg-slate-100 text-slate-600 text-xs font-medium rounded-full">
                        {project}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default TechStackModal;
