# Nextain Homepage (about.nextain.io)

Defining the Infrastructure for the AGI Era. 

This repository contains the source code for [about.nextain.io](https://about.nextain.io), the official company homepage of Nextain Inc.

## Overview
Nextain provides the "Anchor in Fragmentation" for the AI era. We offer the following core infrastructures:
- **Naia OS**: Your own AI lives here. A 100% local, fully sovereign OS environment for autonomous agents based on Bazzite.
- **Naia Business ADK**: Agent Technology for Enterprise AX Migration. Transforming legacy code into modern, AI-collaborative foundations with security-first validation.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Internationalization (i18n)**: `next-intl` (Korean / English)

## Project Structure
```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx     # Global layout with i18n
│       └── page.tsx       # Main landing page component
├── messages/
│   ├── ko.json            # Korean dictionary
│   └── en.json            # English dictionary
public/
└── assets/                # Logos and Wallpapers
```

## Getting Started

First, install the dependencies:
```bash
npm install
```

Then, run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Design Philosophy
We focus on a premium "glassmorphism" aesthetic with a dark theme. The page incorporates subtle micro-animations to enhance user experience while keeping performance optimal.

## License
© 2026 Nextain Inc. All rights reserved.
