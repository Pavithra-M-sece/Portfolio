<<<<<<< HEAD
# My React Portfolio (Vite)

This project is a small React portfolio site using inline JS styles (no external CSS files). It also includes a simple chatbot integration component that can embed a Chatbase agent using your bot id.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Chatbot integration

- The app includes `src/components/Chatbot.jsx`. It uses your Chatbase bot id by default: `pSK1NaRELKkwDeGRbebpT`.
- The component renders an iframe with a default src of `https://www.chatbase.co/embed/<botId>`.
- If Chatbase provides a different embed URL or a vendor script, replace the `embedUrl` prop when using `<Chatbot />`, or edit the `Chatbot.jsx` file to load the script they provide.

Chatbot usage notes

- The app includes `src/components/Chatbot.jsx`. It uses your Chatbase bot id by default: `pSK1NaRELKkwDeGRbebpT`.
# Portfolio

# My React Portfolio (Vite)

This project is a small React portfolio site using inline JS styles (no external CSS files). It also includes a simple chatbot integration component that can embed a Chatbase agent using your bot id.

Getting started

1. Install dependencies:

```bash
npm install
```

2. Run dev server:

```bash
npm run dev
```

Chatbot integration

- The app includes `src/components/Chatbot.jsx`. It uses your Chatbase bot id by default: `pSK1NaRELKkwDeGRbebpT`.
- The component renders an iframe with a default src of `https://www.chatbase.co/embed/<botId>`.
- If Chatbase provides a different embed URL or a vendor script, replace the `embedUrl` prop when using `<Chatbot />`, or edit the `Chatbot.jsx` file to load the script they provide.

Chatbot usage notes

- The app includes `src/components/Chatbot.jsx`. It uses your Chatbase bot id by default: `pSK1NaRELKkwDeGRbebpT`.
- Integration options:
	- `embedScriptUrl` + `embedScriptAttrs`: recommended. Provide the vendor script URL and attributes (for example `{'data-bot-id': '...'}'). The component will load the script dynamically.
	- `embedHtml`: raw widget HTML string (dangerous; only use trusted markup).
	- `embedUrl`: iframe fallback (may be blocked by the provider's X-Frame-Options/CSP).

Example usages (in `App.jsx`):

```jsx
// Load provider script and pass data attributes
<Chatbot embedScriptUrl={'https://www.chatbase.co/widget.js'} embedScriptAttrs={{'data-bot-id': 'pSK1NaRELKkwDeGRbebpT'}} />

// Or use iframe fallback
<Chatbot embedUrl={'https://www.chatbase.co/embed/pSK1NaRELKkwDeGRbebpT'} />
```

If the widget still asks you to login in the browser, it means the Chatbase widget you're trying to use is not published as a public widget — please publish the bot or generate a public embed snippet from Chatbase dashboard and provide that script/URL so the widget can be embedded without a session.

Profile photo

- Place your profile photo at `my-react-app/public/profile.jpg` (same folder as `index.html`). The homepage will load `/profile.jpg` automatically. If you want a different filename, change the `profileSrc` in `src/pages/Home.jsx`.
- You can also preview a photo without placing it in `public/` using the Upload control on the homepage; the upload preview is transient (keeps only in memory). To make the image permanent on the site, put the file at `public/profile.jpg`.

If you want me to fetch Chatbase's exact script snippet and wire it using your bot id, confirm and I will attempt to locate it and insert the script loader with the correct attributes.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:
