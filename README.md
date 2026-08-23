# NoteHub Application

A responsive multi-page web application built with Next.js (App Router), TypeScript, and TanStack Query that allows users to manage personal notes, search by keywords, paginate through records, create notes with validation, and view detailed note pages.

## 🚀 Live Demo

[View Live App on Vercel](https://your-vercel-deployment-link.vercel.app/)

## 🛠️ Tech Stack & Tools

- **Next.js 15+ (App Router)** — React framework for server rendering and routing
- **React 19** — UI library
- **@tanstack/react-query** — Server-state management, SSR hydration, and data caching
- **TypeScript** — Static typing
- **Axios** — Promise-based HTTP client for API requests
- **Formik & Yup** — Form handling and schema-based validation
- **React Paginate** — Component for pagination navigation
- **React Hot Toast** — Notifications for user feedback and error alerts
- **Use-Debounce** — Debounced search input handler
- **CSS Modules** — Scoped component styling

## ✨ Features

- **Multi-page Routing & SSR**: Built using Next.js App Router (`/`, `/notes`, `/notes/[id]`).
- **Server Prefetch & Hydration**: Prefetches initial note queries on the server via `prefetchQuery` and `HydrationBoundary` for fast initial loads without loading spinners.
- **Search & Debounce**: Real-time keyword search with debounced query updates.
- **Pagination**: Server-side page navigation with `keepPreviousData` from TanStack Query.
- **Form Validation & Creation**: Modal form with Formik and Yup schema validation for title, content, and category tags.
- **Dynamic Note Details**: Dedicated dynamic page (`/notes/[id]`) for viewing full note metadata and content.
- **State Management & Invalidation**: Automatic cache invalidation upon creating or deleting notes.
- **Error & Loading States**: Native Next.js `loading.tsx` and `error.tsx` handlers for graceful fallback states.
- **Secure Environment Variables**: Handles API authentication via `NEXT_PUBLIC_NOTEHUB_TOKEN`.

## 📂 Project Structure

```text
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── page.module.css
│   ├── page.tsx
│   └── notes/
│       ├── error.tsx
│       ├── Notes.client.tsx
│       ├── page.module.css
│       ├── page.tsx
│       └── [id]/
│           ├── page.tsx
│           ├── NoteDetails.client.tsx
│           ├── NoteDetails.module.css
│           └── error.tsx
├── components/
│   ├── ErrorMessage/
│   │   ├── ErrorMessage.tsx
│   │   └── ErrorMessage.module.css
│   ├── Footer/
│   │   ├── Footer.tsx
│   │   └── Footer.module.css
│   ├── Header/
│   │   ├── Header.tsx
│   │   └── Header.module.css
│   ├── Modal/
│   │   ├── Modal.tsx
│   │   └── Modal.module.css
│   ├── NoteForm/
│   │   ├── NoteForm.tsx
│   │   └── NoteForm.module.css
│   ├── NoteList/
│   │   ├── NoteList.tsx
│   │   └── NoteList.module.css
│   ├── Pagination/
│   │   ├── Pagination.tsx
│   │   └── Pagination.module.css
│   ├── SearchBox/
│   │   ├── SearchBox.tsx
│   │   └── SearchBox.module.css
│   └── TanStackProvider/
│       └── TanStackProvider.tsx
├── hooks/
│   └── useNotes.ts
├── lib/
│   └── api.ts
├── types/
│   └── note.ts
├── .env.local
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
├── README.md
└── tsconfig.json
```

## 💻 Getting Started Locally

1. Clone the repository:

    ```bash
    git clone [https://github.com/yulikafsd/06-notehub-nextjs.git](https://github.com/yulikafsd/06-notehub-nextjs.git)
    ```

2. Navigate to the project directory:

    ```bash
    cd 06-notehub-nextjs
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:
   Create a .env file in the root directory and add your TMDB API Token:

    ```text
     VITE_TMDB_TOKEN=your_tmdb_bearer_token_here
    ```

5. Start the development server:
    ```Bash
    npm run dev
    ```
