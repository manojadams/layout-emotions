import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/layout-emotions/markdown-page',
    component: ComponentCreator('/layout-emotions/markdown-page', '585'),
    exact: true
  },
  {
    path: '/layout-emotions/docs',
    component: ComponentCreator('/layout-emotions/docs', '278'),
    routes: [
      {
        path: '/layout-emotions/docs/basics/breakpoints',
        component: ComponentCreator('/layout-emotions/docs/basics/breakpoints', 'aed'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/layout-emotions/docs/basics/columns-using-classname',
        component: ComponentCreator('/layout-emotions/docs/basics/columns-using-classname', '938'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/layout-emotions/docs/basics/columns-using-component',
        component: ComponentCreator('/layout-emotions/docs/basics/columns-using-component', 'b53'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/layout-emotions/docs/category/basics',
        component: ComponentCreator('/layout-emotions/docs/category/basics', 'f5e'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/layout-emotions/docs/getting-started',
        component: ComponentCreator('/layout-emotions/docs/getting-started', '597'),
        exact: true,
        sidebar: "getStartedSidebar"
      },
      {
        path: '/layout-emotions/docs/intro',
        component: ComponentCreator('/layout-emotions/docs/intro', 'e12'),
        exact: true,
        sidebar: "getStartedSidebar"
      }
    ]
  },
  {
    path: '/layout-emotions/',
    component: ComponentCreator('/layout-emotions/', '202'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
