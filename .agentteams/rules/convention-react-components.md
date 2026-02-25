---
trigger: model_decision
description: React 컴포넌트/상태/데이터 처리 규칙
agentInstruction: |
  Reference this file when editing App-level flows, feature components, or reusable UI wrappers.
---

# React Component Convention

## Component Authoring

- Prefer functional components and keep `export default` at the file end.
- Keep large files segmented by intent (state, effects, data transform, render blocks).
- Use clear conditional rendering (`condition ? A : B`, short-circuit sections).

## UI Primitive Pattern

- In `src/components/ui/*`, keep `React.forwardRef` + `displayName` pattern.
- Merge class names through `cn()` from `src/lib/utils.js`.

## State and Effects

- Manage local UI state with `useState` close to usage.
- Compute derived collections near render (`filtered*`, mapped data views).
- Always clean up event listeners and side effects in `useEffect` cleanup.

## Data Mapping

- Keep source-of-truth JSON in `src/data/*.json`.
- Transform JSON to UI-ready structure in component scope right before rendering.
- Keep mapping helpers deterministic and side-effect free.