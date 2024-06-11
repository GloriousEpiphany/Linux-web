import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
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
