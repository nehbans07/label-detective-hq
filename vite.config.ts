import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use repository name as base path for GitHub Pages, empty for Lovable
  const isGitHubPages = process.env.GITHUB_PAGES === 'true';
  
  return {
    // For GitHub Pages: use repo name as base (update 'label-detective-hq' to your repo name)
    // For Lovable: use root path
    base: isGitHubPages ? '/label-detective-hq/' : '/',
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
