---
name: design-system-rockticket-app
description: Creates implementation-ready design-system guidance derived from local Figma styles in "RockTicket App".
---

<!-- TYPEUI_SH_MANAGED_START -->

# RockTicket App

## Mission
Document and operationalize the RockTicket App style foundations extracted from Figma so teams can build consistent interfaces quickly.

## Brand
- Product/brand: RockTicket App
- Audience: Designers and engineers building this product
- Product surface: mobile web

## Style Foundations
- Visual style: systematic, token-driven, structured, radius Global/radius/sm/Global/radius/none/Global/radius/md/Global/radius/xl
- Typography scale: Headings/H1, Headings/H2, Headings/H3, Headings/H4, Headings/H5, Title/h1, Title/h2, Title/h3, Title/h4, Body/16 px/Regular, Body/16 px/Ligth, Body/14 px/Regular, Body/14 px/Ligth, Body/12 px/Regular
- Color palette: Primary/900, Primary/700, Primary/500, Primary/300, Primary/100, Secundary/3, Secundary/2, Secundary/1, Secundary/900, Secundary/600, Secundary/300, Secundary/100, Neutrals/900, Neutrals/800
- Spacing scale: Global/layout/container/padding-desktop, Global/spacing/8, Global/spacing/6, Global/spacing/5, Global/spacing/3, Global/spacing/0, Global/layout/container/padding-mobile, Global/spacing/12, Global/spacing/4, Global/spacing/1, Global/spacing/16, Global/spacing/2, Global/spacing/10
- Radius/shadow/motion tokens: duration-fast 120ms, duration-base 200ms, ease-standard

## Component Families
- buttons
- inputs
- forms
- navigation
- overlays
- feedback
- data display

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use extracted color tokens before introducing one-off values: Primary/900
- Primary/700
- Primary/500
- Primary/300
- Primary/100
- Secundary/3.
- Use these typography styles consistently: Headings/H1
- Headings/H2
- Headings/H3
- Headings/H4
- Headings/H5
- Title/h1.
- Define all interaction states for interactive components: default
- hover
- focus-visible
- active
- disabled
- and loading.

## Rules: Don't
- Do not duplicate existing style tokens with one-off naming.
- Do not remove focus-visible indicators or keyboard support.
- Do not hard-code raw values where local styles or variables already exist.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy
4. variants
5. and interactions.
6. Add accessibility acceptance criteria.
7. Add anti-patterns and migration notes.
8. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule uses "must".
- Every recommendation uses "should".
- Every accessibility rule is testable in implementation.
- Prefer system consistency over local visual exceptions.

## Acceptance Checklist
- Frontmatter exists with valid `name` and `description`.
- Guidance is under 500 lines for `skill.md` when possible.
- Accessibility and interaction states are explicitly documented.
- Rules are concrete, testable, and non-ambiguous.
- Output can be reused in other repositories with only variable replacement.
