import React from 'react';

// console.log('get env', process.env);

const API = process.env.NODE_ENV === 'development'
  ? process.env.API
  : 'https://www.itrackcon.com/api/official-site';

export default API;