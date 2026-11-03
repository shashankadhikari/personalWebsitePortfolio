import { defineConfig } from "astro/config";

// The old /about and /work pages are now sections of the home page.
export default defineConfig({
  redirects: {
    "/about": "/#about",
    "/work": "/#work",
  },
});
