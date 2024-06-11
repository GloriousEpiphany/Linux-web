import { defineConfig } from 'vitepress'
import katex from 'katex';
import 'katex/dist/katex.min.css';
// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    // 使用自定义的 Markdown 解析器
    config: (md) => {
      // 使用 KaTeX 解析数学公式
      md.use(require('markdown-it-katex'));
    }
  },
  base: "/Linux-web/",
  title: "学习资料共享网站",
  description: "A Blog Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Group Members', link: '/group-members' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          { text: 'home', link: '/index' },
          { text: 'Group Members', link: '/group-members' }
        ]
      }
    ],

  }
})
