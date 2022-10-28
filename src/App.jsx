import React from 'react';
import Header from './components/Header.jsx';
import Post from './components/Post.jsx';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <section>
        <Header />
        <Post />
      </section>
    );
  }
}

export default App;
