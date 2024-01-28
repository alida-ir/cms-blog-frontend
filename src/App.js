import React, { Component } from 'react';
import { Route, Router, Routes } from 'react-router-dom';
import Blog from './pages/Blog';
import BlogItem from './pages/BlogItem';
import Home from './pages/Home';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return (
      <>
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route path="/blog" element={<Blog />}/>
            <Route path="/blog/:slug" element={<BlogItem />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route element={<NotFound />}  path='*' exact={true} />
        </Routes>
      </>
    );
  }
}

export default App;