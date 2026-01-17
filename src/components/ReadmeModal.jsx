import React from 'react';
import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import readmeContent from '../../README.md?raw';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

/**
 * ReadmeModal 컴포넌트
 * 
 * README.md 파일의 내용을 마크다운 형태로 렌더링하여 모달로 표시합니다.
 * AI Orchestration 개발 스토리를 보여주며, Framer Motion 애니메이션을 적용합니다.
 * 
 * @param {boolean} isOpen - 모달 열림/닫힘 상태
 * @param {Function} onClose - 모달 닫기 핸들러
 */
const ReadmeModal = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] p-0 gap-0 rounded-[2rem] overflow-hidden flex flex-col">
        <DialogHeader className="p-6 bg-white space-y-0 rounded-t-[2rem] flex-shrink-0">
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
          <DialogTitle className="text-xl font-bold text-slate-900 tracking-tight">
            Development Story
          </DialogTitle>
          <DialogDescription className="sr-only">
            Portfolio development story and documentation details
          </DialogDescription>
          <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
            AI Orchestration
          </p>

            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide">
          <div className="p-4 md:p-12 max-w-full">
            <div className="markdown-content break-words max-w-full">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw]}
                components={{
                  h1: ({ node, ...props }) => <h1 className="text-3xl font-black text-slate-900 mb-8 tracking-tight" {...props} />,
                  h2: ({ node, ...props }) => <h2 className="text-2xl font-black text-slate-900 mt-12 mb-6 pb-3 border-b border-slate-100 tracking-tight" {...props} />,
                  h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-slate-900 mt-8 mb-4 tracking-tight" {...props} />,
                  p: ({ node, ...props }) => <p className="text-slate-600 leading-relaxed mb-6" {...props} />,
                  blockquote: ({ node, ...props }) => (
                    <blockquote className="border-l-4 border-blue-500 bg-blue-50/30 py-4 px-6 my-8 rounded-r-2xl italic text-slate-700" {...props} />
                  ),
                  code: ({ node, inline, ...props }) => (
                    inline
                      ? <code className="bg-slate-100 text-sunset-gold px-1.5 py-0.5 rounded font-bold text-sm" {...props} />
                      : <code className="block bg-slate-900 text-slate-300 p-3 md:p-6 rounded-2xl overflow-x-auto text-xs md:text-sm leading-relaxed my-6 font-mono" {...props} />
                  ),
                  ul: ({ node, ...props }) => <ul className="list-disc list-outside ml-6 mb-8 space-y-3 text-slate-600" {...props} />,
                  ol: ({ node, ...props }) => <ol className="list-decimal list-outside ml-6 mb-8 space-y-3 text-slate-600" {...props} />,
                  li: ({ node, ...props }) => <li className="pl-2" {...props} />,
                  a: ({ node, ...props }) => <a className="text-blue-600 font-bold hover:underline transition-all" target="_blank" rel="noopener noreferrer" {...props} />,
                  table: ({ node, ...props }) => (
                    <div className="overflow-x-auto my-10 rounded-2xl border border-slate-100 shadow-sm">
                      <table className="w-full text-left border-collapse" {...props} />
                    </div>
                  ),
                  thead: ({ node, ...props }) => <thead className="bg-slate-50 border-b border-slate-100" {...props} />,
                  th: ({ node, ...props }) => <th className="p-4 text-sm font-black text-slate-900 uppercase tracking-wider" {...props} />,
                  td: ({ node, ...props }) => <td className="p-4 text-sm text-slate-600 border-b border-slate-50" {...props} />,
                  hr: ({ node, ...props }) => <hr className="my-12 border-slate-100" {...props} />
                }}
              >
                {readmeContent}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ReadmeModal;
