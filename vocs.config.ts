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
      text: 'Customization',
      collapsed: false,
      items: [
        {
          text: 'TODO: Nodes',
          link: '/core-concepts/overview',
        },
        {
          text: 'TODO: Sockets',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'TODO: Connections',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'TODO: Background Grid',
          link: '/core-concepts/building-a-flow',
        },
      ],
    },
    {
      text: 'Examples',
      collapsed: false,
      items: [
        {
          text: 'TODO: Slideshow App',
          link: '/core-concepts/overview',
        },
        {
          text: 'TODO: Readonly',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'TODO: Vertical Flow',
          link: '/core-concepts/building-a-flow',
        },
        {
          text: 'TODO: Reroute',
          link: '/core-concepts/building-a-flow',
        },
      ],
    },
    {
      text: 'TODO: API Reference',
      link: '/api-reference',
    },
    {
      text: 'Demo',
      link: '/demo',
    },
  ],
})
