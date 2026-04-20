export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc'
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Nuxt OSDD'
  },
  header: {
    title: 'Nuxt OSDD',
    to: '/',
    logo: {
      alt: 'Xefi',
      light: '/xefi-light.svg',
      dark: '/xefi-dark.svg'
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-npm',
      'to': 'https://www.npmjs.com/package/nuxt-osdd',
      'target': '_blank',
      'aria-label': 'nuxt-osdd on npm'
    },
    {
      'icon': 'simple-icons:github',
      'to': 'https://github.com/xefi/nuxt-osdd',
      'target': '_blank',
      'aria-label': 'nuxt-osdd on GitHub'
    }
    ]
  },
  footer: {
    credits: `nuxt-osdd documentation • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-npm',
      'to': 'https://www.npmjs.com/package/nuxt-osdd',
      'target': '_blank',
      'aria-label': 'nuxt-osdd on npm'
    }, {
      'icon': 'i-lucide-book-open',
      'to': '/getting-started/installation',
      'aria-label': 'Installation guide'
    }]
  }
})
