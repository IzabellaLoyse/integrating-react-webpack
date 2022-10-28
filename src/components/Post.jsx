import React from 'react';
import './post.css';

class Post extends React.Component {
  render() {
    return (
      <section className="post">
        <h2 className="post__title">React com Webpack </h2>

        <img
          src="https://source.unsplash.com/1600x900/?beach"
          alt=""
          className="post__image"
        />
      </section>
    );
  }
}

export default Post;
