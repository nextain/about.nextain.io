# about.nextain.io

Nextain 공식 홈페이지. Glassmorphism 다크 테마 랜딩 페이지.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **i18n**: next-intl (ko/en)

## Project Structure

```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx     # Global layout with i18n
│       └── page.tsx       # Main landing page
├── messages/
│   ├── ko.json            # Korean dictionary
│   └── en.json            # English dictionary
public/
└── assets/                # Logos and Wallpapers
```

## Key Commands

```bash
npm install              # Install deps
npm run dev              # Dev server (port 3000)
npm run build            # Production build
```

## Conventions

- **Response language**: Korean
- **Commit**: English, `<type>(<scope>): <description>`

## License

Copyright 2026 Nextain Inc. All rights reserved.
