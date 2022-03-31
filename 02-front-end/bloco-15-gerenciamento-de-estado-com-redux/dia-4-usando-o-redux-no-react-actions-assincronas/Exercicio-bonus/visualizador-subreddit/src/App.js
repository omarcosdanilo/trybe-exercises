import React, { Component } from 'react';
import InputSubreddit from './components/InputSubreddit';
import PostsList from './components/PostsList';
import SelectedCategory from './components/SelectedCategory';

class App extends Component {
  
  render() { 
    return (
      <>
        <SelectedCategory />
        <InputSubreddit />
        <PostsList />
      </>
    );
  }
}
 
export default App;