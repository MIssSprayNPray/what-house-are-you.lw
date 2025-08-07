# React Component Usage (CRA / Vite / Next.js Pages Router)

1. Install dependency:
   ```bash
   npm i framer-motion
   ```

2. Ensure Tailwind CSS is set up in your project (or add the Tailwind CDN to your HTML template for a quick try).

3. Drop `HouseQuiz.jsx` somewhere like `src/components/HouseQuiz.jsx` and import it where you want:

   ```jsx
   import HouseQuiz from "./components/HouseQuiz";

   export default function App() {
     return <HouseQuiz />;
   }
   ```
