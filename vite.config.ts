import { defineConfig } from "vite";
import path from "path";
import vue from "@vitejs/plugin-vue";
import hljs from 'highlight.js'
import Markdown from "vite-plugin-md"; // 添加这行
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueDevTools from "vite-plugin-vue-devtools"; //
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__dirname, "src")}/`,
      "@": `${path.resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue({
        include: [/\.vue$/, /\.md$/], // 允许 Vue 插件处理 .md 文件
    }),
    Markdown({
       markdownItOptions: {
        html: true,
        linkify: true,
        typographer: true,
        highlight: function (str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return '<pre class="hljs"><code>' +
                     hljs.highlight(str, { language: lang, ignoreIllegals: true }).value +
                     '</code></pre>';
            } catch (__) {}
          }

          return '<pre class="hljs"><code>' + hljs.highlightAuto(str).value + '</code></pre>';
        }
      },
    }), // 添加这个插件
    VueDevTools(),
    AutoImport({
      include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
      imports: ["vue", "vue-router", "@vueuse/core"],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/constDictionary", "src/composables", "src/stores"],
      vueTemplate: true,
    }),
    Components({
      dirs: ["src/components", "src/**/components"],
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
  ],
});
