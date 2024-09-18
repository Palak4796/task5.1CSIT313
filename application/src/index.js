// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'; 
import PostPage from './components/PostPage';

ReactDOM.render(
  <React.StrictMode>
    <PostPage />
  </React.StrictMode>,
  document.getElementById('root')
);
