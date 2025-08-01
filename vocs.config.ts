import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Luke Flow Diagram',
  description: 'The best flutter flow diagram library',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Core Concepts',
      collapsed: false,
      items: [
        {
          text: 'Overview',
          link: '/core-concepts/overview',
        },
        {
          text: 'Building a flow',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'The Canvas',
          link: '/core-concepts/the-canvas',
        },
        {
          text: 'TODO: Built-In Components',
          link: '/core-concepts/building-a-flow',
        },
      ],
    },
    {
      text: 'Customizations',
      collapsed: false,
      items: [
        {
          text: 'Nodes',
          link: '/customizations/nodes',
        },
        {
          text: 'Sockets',
          link: '/customizations/sockets',
        },
        {
          text: 'Connection Edges',
          link: '/customizations/connections',
        },
        {
          text: 'Background Grid',
          link: '/customizations/background-grid',
        },
      ],
    },
    {
      text: 'Examples',
      collapsed: true,
      items: [
        {
          text: 'TODO: Slideshow App',
          link: '/examples/slideshow-app',
        },
        {
          text: 'TODO: Readonly',
          link: '/examples/readonly',
        },
        {
          text: 'TODO: Vertical Flow',
          link: '/examples/vertical-flow',
        },
        {
          text: 'TODO: Reroute',
          link: '/examples/reroute',
        },
      ],
    },
    {
      text: 'API Reference',
      link: 'https://pub.dev/documentation/luke_flow_diagram/latest',
    },
    {
      text: 'Demo',
      link: '/demo',
    },
  ],
})
