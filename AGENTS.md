# AGENTS

Guidance for AI coding agents working in this repository.

## Scope
- Keep changes minimal and localized.
- Preserve existing Vue 3 Options API patterns unless a task explicitly requires refactoring.

## Setup And Commands
- Use Yarn v1 for dependency and script operations.
- Install dependencies: yarn install
- Start dev server: yarn dev
- Build production bundle: yarn build
- Preview production build: yarn serve
- Lint and autofix: yarn lint

References:
- README command docs: [README.md](README.md)
- Scripts and package manager pin: [package.json](package.json)

## Architecture Pointers
- App shell and global style imports: [src/App.vue](src/App.vue)
- Main feature view: [src/views/Scoresheet.vue](src/views/Scoresheet.vue)
- Reusable UI components: [src/components](src/components)
- State and persistence logic: [src/store.js](src/store.js)
- i18n messages and locale setup: [src/i18n.js](src/i18n.js)
- Build and PWA config: [vite.config.js](vite.config.js)

## Conventions
- Use 2-space indentation and follow existing lint rules.
- Keep component files in PascalCase and style classes in kebab-case/BEM-like form.
- Keep translation keys and locale dictionaries aligned when adding UI text.

## Known Pitfalls
- Use yarn (v1), not npm.
- SCSS is on modern module syntax. Prefer @use and @forward, avoid reintroducing @import.
- For Sass color transforms, prefer sass:color helpers such as color.adjust instead of deprecated lighten/darken/desaturate.
- If changing styles, run yarn build to catch Sass and asset resolution issues.

## Commit Convention (Required)
- Use an emoji prefix and a short present-tense summary.
- Keep commit subject concise (about 50-72 chars), sentence case, no trailing period.
- Start with an appropriate emoji from this list: 🐛 for bug fixes, 💄 for UI/styling changes, 📝 for documentation, ✨ for new features, 🔥 for removing code, ⬆️ for dependency upgrades, 🔨 for refactoring, ⚰️ for deprecations, 🚨 for linting fixes, 🌐 for translations.

Common examples:
- 🐛 Fix score reset for 7-player games
- ⬆️ Update Vite and plugin dependencies
- 💄 Improve table spacing on mobile
- 📝 Update setup notes for Yarn workflow

## Validation Checklist Before Finishing
- Run yarn build after code changes.
- Run yarn lint when editing JS or Vue files.
- If locale text changed, verify all relevant languages in [src/i18n.js](src/i18n.js).
