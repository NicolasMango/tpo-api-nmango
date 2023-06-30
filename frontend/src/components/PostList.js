import React, { Component } from 'react';
import Post from './Post';

class PostList extends Component {

  render() {
    return (
      <React.Fragment>
        <Post />
      </React.Fragment>
    );
  }
}

export default PostList;