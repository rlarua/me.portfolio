---
trigger: model_decision
description: 품질/검증/문서화 작업 규칙
agentInstruction: |
  Reference this file when completing implementation and before final delivery.
---

# Quality and Workflow Convention

## Validation Baseline

- Run `npm run lint` for static checks.
- Run `npm run build` for production build validation.
- If failures are pre-existing, distinguish them clearly from newly introduced issues.

## Scope Control

- Keep changes limited to requested scope.
- Do not perform unrelated refactors while implementing feature requests.

## Documentation and Comments

- Use comments for non-obvious intent only.
- Avoid noise comments that restate obvious code.
- For large sections, use concise section headers to keep reading flow clear.

## Delivery Checklist

- Confirm naming/import/style consistency with existing project patterns.
- Confirm accessibility markers are present where required.
- Confirm lint/build status and report exact command outcomes.