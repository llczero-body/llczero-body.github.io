import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [vue(),
  AutoImport({
    include: [/\.[jt]sx?$/, /\.vue$/, /\.vue\?vue/, /\.md$/],
    imports: [
      'vue',
      'vue-i18n',
      '@vueuse/core',
      {
        'vue-router/auto': ['useLink'],
      },
    ],
    dts: 'src/auto-imports.d.ts',
    dirs: [
      'src/composables',
      'src/stores',
    ],
    vueTemplate: true,
  }),
  Components({
    // allow auto load markdown components under `./src/components/`
    extensions: ['vue', 'md'],
    // allow auto import and register components used in markdown
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    dts: 'src/components.d.ts',
  }),
  VueI18n({
    runtimeOnly: true,
    compositionOnly: true,
    fullInstall: true,
    include: [path.resolve(__dirname, 'locales/**')],
  }),
  ],
})
