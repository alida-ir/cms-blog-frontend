import React, { Component } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogItem from './pages/BlogItem';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:slug" element={<BlogItem />}/>
            <Route element={<NotFound />}/>
        </Routes>
      </>
    );
  }
}

export default App;