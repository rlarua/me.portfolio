---
trigger: always_on
description: me.portfolio 공통 핵심 규칙
agentInstruction: |
  Apply these core conventions to every code change in this repository.
---

# Core Convention

## Stack and Paths

- Use React + Vite + JavaScript/JSX conventions already present in this repository.
- Prefer path aliases (`@/components/*`, `@/lib/*`) over deep relative imports.
- Keep source layout stable: `components`, `components/ui`, `lib`, `data`.

## Naming

- Use PascalCase for component names and component file names.
- Use camelCase for variables/functions and descriptive state names (`is*`, `*Id`, `active*`).
- Use `handle*` naming for UI event handlers.

## Imports

- Keep import order: external libs -> data/config -> local components -> local utils.
- Do not leave unused imports or variables.

## Accessibility

- Add `aria-label` for icon-only controls.
- Keep keyboard focus styles (`focus-visible:*`) on interactive controls.
- For dialogs, include title/description (or `sr-only` description).

## Minimum Verification

- Run `npm run lint` and `npm run build` after meaningful code changes.