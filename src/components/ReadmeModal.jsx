// React 및 Hooks
import React, { useEffect } from 'react';
// 아이콘 컴포넌트
import { X, Sparkles } from 'lucide-react';
// 애니메이션 라이브러리
import { motion, AnimatePresence } from 'framer-motion';
// 마크다운 렌더링 라이브러리 및 플러그인
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
// README 파일 내용 (raw 텍스트)
import readmeContent from '../../README.md?raw';

// ReadmeModal: 개발 스토리(README.md)를 보여주는 모달 컴포넌트
const ReadmeModal = ({ isOpen, onClose }) => {
  // 모달이 열리면 스크롤을 막고, ESC 키로 닫을 수 있게 이벤트 리스너 등록
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
          {/* 배경 (Backdrop): 클릭 시 닫힘 */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
          />
          
          {/* 모달 컨테이너 (Modal Container) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[900px] max-h-[90vh] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
          >
            {/* 헤더 (Header) */}
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
                className="p-2 hover:bg-slate-50 rounded-full transition-colors group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tech-cyan"
                aria-label="Close modal"
              >
                <X className="w-6 h-6 text-slate-400 group-hover:text-slate-900" />
              </button>
            </div>

            {/* 콘텐츠 영역 (Content Area) */}
            <div className="flex-1 overflow-y-auto p-8 md:p-12 custom-scrollbar">
              <div className="markdown-content">
                <ReactMarkdown 
                  remarkPlugins={[remarkGfm]} 
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    // 각종 마크다운 요소를 커스텀 스타일로 렌더링
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

            {/* 푸터 (Footer): 필요 시 사용 */}
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

export default ReadmeModal;
