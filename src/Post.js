import React from 'react';
import { useDispatch } from 'react-redux';

import { byID } from './Redux/config/title';

function Post({ post }) {
  const dispatch = useDispatch();

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div className="post" key={post.id}>
      <button onClick={() => dispatch(byID(post.id))}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </button>
    </div>
  );
}

export default Post;
