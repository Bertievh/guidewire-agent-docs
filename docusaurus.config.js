/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'SMA Technologies Help',
  tagline: 'Guidewire Agent,
  url: 'https://help.smatechnologies.com',
  baseUrl: '/opcon/agents/guidewire/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'smatechnologies',
  projectName: 'guidewire-agent-docs',
  themeConfig: {
    navbar: {
      title: 'Help',
      logo: {
        alt: 'SMA Technologies Help Logo',
        src: 'img/logo.svg',
        href: 'https://help.smatechnologies.com',
      },
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} SMA Technologies.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          breadcrumbs: false,
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/smatechnologies/guidewire-agent-docs/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-7XYMFXX81Y',
        },
      },
    ],
  ],
  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'), 
      {
      }
    ],
  ],
};
