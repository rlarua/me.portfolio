import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

/**
 * TechStackModal 컴포넌트
 * 
 * 특정 기술 스택의 상세 정보를 모달로 표시합니다.
 * 선택된 기술 스킬에 대한 스킬 목록과 해당 스킬을 사용한 프로젝트를 보여줍니다.
 * 
 * @param {boolean} isOpen - 모달 열림/닫힘 상태
 * @param {Function} onClose - 모달 닫기 핸들러
 * @param {string} stackName - 기술 스킬 이름
 * @param {string[]} skills - 관련 스킬 목록
 * @param {string[]} projects - 해당 기술을 사용한 프로젝트 목록
 */
const TechStackModal = ({ isOpen, onClose, stackName, skills, projects }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-[2rem]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            {stackName}
          </DialogTitle>
          <DialogDescription className="sr-only">
            {stackName} 기술 스택 상세 정보
          </DialogDescription>
        </DialogHeader>

        <div className="min-h-[100px]">
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, idx) => (
              <Badge
                key={idx}
                variant="default"
                className="bg-slate-800 text-white hover:bg-slate-700 px-3 py-1.5 text-sm font-medium rounded-full"
              >
                {skill}
              </Badge>
            ))}
          </div>

          {projects && projects.length > 0 && (
            <div className="pt-8 mt-2">
              <h4 className="text-sm font-bold text-slate-500 tracking-wider mb-3">
                Used Projects
              </h4>
              <div className="flex flex-wrap gap-2">
                {projects.map((project, idx) => (
                  <Badge
                    key={idx}
                    variant="secondary"
                    className="bg-slate-100 text-slate-600 hover:bg-slate-200 px-3 py-1.5 text-xs font-medium rounded-full"
                  >
                    {project}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TechStackModal;
