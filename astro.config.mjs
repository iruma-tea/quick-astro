import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  prefetch: true,
  // prefetch: {
  //   prefetchAll: true,
  //   defaultStrategy: "viewport",
  // },
  integrations: [tailwind(), react()],
});
