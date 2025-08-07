# House Quiz — Integration Pack

Pick the folder that matches your setup:

- `nextjs-app-router/` → Drop into a Next.js project using the **App Router** (`app/` directory). Tailwind required.
- `react-component/` → A reusable React component (`HouseQuiz.jsx`) you can import anywhere. Tailwind required.
- `embed-standalone/` → An `index.html` that just works. Open it locally or upload it anywhere; it loads Tailwind/React from CDNs.

If you’re on **WordPress / Squarespace / Wix**, the quickest route is usually to host the `embed-standalone/index.html` somewhere (or on your own site) and then iframe it:

```html
<iframe src="https://yourdomain.com/path/to/index.html" style="width:100%;height:800px;border:0;border-radius:16px;overflow:hidden"></iframe>
```

## Dependencies
- Tailwind CSS for styling (Next/React variants). The standalone embed includes Tailwind via a CDN.
- `framer-motion` for animations (installed via npm for app builds; CDN for the standalone).

## Questions?
Tell me your exact stack (Next.js, CRA, Vite, WordPress, etc.) and I’ll tailor the files further.
