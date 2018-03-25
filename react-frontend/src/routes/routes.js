import React from 'react';
import Login from '../components/login/Login.js';
import Register from '../components/login/Register.js';

const routes = {
  childRoutes: [
    {
      path: '/login',
      component: Login
    },

    {
      path: '/regist',
      component: Register
    }
  ]
};

export default routes;
