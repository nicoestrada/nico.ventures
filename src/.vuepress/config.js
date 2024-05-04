const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Nico Estrada',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: 'Personal website, portfolio, and archive of Nico Estrada.',

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#08113b' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      // {
      //   text: 'Notepad',
      //   link: '/notepad/'
      // },
      {
        text: 'Archive',
        link: '/archive/'
      },
      {
        text: 'Projects',
        link: '/projects/'
      },
      {
        text: 'X',
        link: 'https://x.com/stradamoney'
      },
      {
        text: 'GitHub',
        link: 'https://github.com/nicoestrada'
      }
    ],
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
