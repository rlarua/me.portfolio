---
trigger: model_decision
description: Tailwind/디자인 토큰/애니메이션 규칙
agentInstruction: |
  Reference this file when changing layout, visual style, responsiveness, and Framer Motion behaviors.
---

# Style and Motion Convention

## Styling System

- Use Tailwind utility-first classes as default.
- Reuse tokens defined in `src/index.css` (`--color-sunset-gold`, `--color-tech-cyan`, `--color-charcoal-black`).
- Prefer extending reusable UI primitives over repeating long raw class strings.

## Responsive Rules

- Build mobile-first and extend with `sm`, `md`, `lg` breakpoints.
- Keep interaction parity by separating desktop hover behavior and mobile tap behavior when needed.

## Interaction and A11y Styling

- Pair `hover:*` with `focus-visible:*` for keyboard accessibility.
- Keep transitions explicit (`transition-*`, `duration-*`) and scoped to changed properties.

## Motion Rules

- Use Framer Motion with explicit `initial`, `animate`, `exit`, `transition`.
- Use `AnimatePresence` for conditional section mount/unmount transitions.
- Keep animation timing coherent with existing tone (roughly `0.25s` to `0.8s`, ease-in-out centered).