import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

const TechStackModal = ({ isOpen, onClose, stackName, skills, projects }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-[2rem]">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-slate-900">
            {stackName}
          </DialogTitle>
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
