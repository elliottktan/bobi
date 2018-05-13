import React from 'react';
import Login from '../components/login/loginComponent.js';

const routes = {
  childRoutes: [
    {
      path: '/login',
      component: Login
    },
  ]
};

export default routes;
