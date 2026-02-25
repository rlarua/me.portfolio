---
trigger: always_on
description: me.portfolio 통합 컨벤션 인덱스
agentInstruction: |
  Read this index first, then apply the referenced domain convention files.
---

# Project Convention Index

📌 컨벤션을 유지보수하기 쉽도록 영역별 파일로 분리했습니다.

## Referenced Files

- `.agentteams/rules/convention-core.md` - 공통 핵심 규칙
- `.agentteams/rules/convention-react-components.md` - React 컴포넌트/상태/데이터 처리
- `.agentteams/rules/convention-style-motion.md` - 스타일링/반응형/애니메이션
- `.agentteams/rules/convention-quality-workflow.md` - 검증/문서화/전달 품질

## Usage

1. Start with `convention-core.md`.
2. Apply one or more domain files based on the task.
3. Finish with `convention-quality-workflow.md` checks before delivery.