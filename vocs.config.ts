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
          text: 'The Viewport',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'Built-In Components',
          link: '/core-concepts/building-a-flow',
        },
      ],
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        {
          text: 'Nodes',
          link: '/core-concepts/overview',
        },
        {
          text: 'Sockets',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'Connections',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'Background Grid',
          link: '/core-concepts/building-a-flow',
        },
      ],
    },
    {
      text: 'Examples',
      collapsed: false,
      items: [
        {
          text: 'Slideshow App',
          link: '/core-concepts/overview',
        },
        {
          text: 'Readonly',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'Vertical Flow',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'Reroute',
          link: '/core-concepts/building-a-flow',
        },
      ],
    },
    {
      text: 'API Reference',
      link: '/api-reference',
    },
  ],
})
