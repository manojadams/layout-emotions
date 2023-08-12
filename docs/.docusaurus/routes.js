import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '92f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '57e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '769'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'ae1'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b06'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '22e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'cad'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '355'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '80e'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'ec5'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'ae8'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '8c3'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', 'b3c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'a80'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', 'f59'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', '868'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', 'dd5'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', 'bb3'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '9ec'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '1f3'),
    routes: [
      {
        path: '/docs/basics/breakpoints',
        component: ComponentCreator('/docs/basics/breakpoints', '2c3'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/docs/basics/columns',
        component: ComponentCreator('/docs/basics/columns', '8f5'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/docs/category/basics',
        component: ComponentCreator('/docs/category/basics', 'b25'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'c19'),
        exact: true,
        sidebar: "getStartedSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'c2f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
