import { defineConfig } from "vite";
import tailwindcssPostcss from "@tailwindcss/postcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        list: "src/pages/todo/list.html",
        regist: "src/pages/todo/regist.html",
        info: "src/pages/todo/info.html",
      },
    },
  },
  appType: "mpa",
  css: {
    postcss: {
      plugins: [tailwindcssPostcss(), autoprefixer()],
    },
  },
});
