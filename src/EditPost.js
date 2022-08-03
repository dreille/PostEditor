import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { EditPost, addChange, byTitle } from './Redux/config/title';

function editPost() {
  const [post, setPost] = useState('');
  const dispatch = useDispatch();
  const id = useSelector((state) => state.posts.edit);

  const handleonChange = (val) => {
    setPost(val);
  };
  return (
    <div className="editContainer">
      <div>
        <h1> Edit Post</h1>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addChange(id.id));
          }}
        >
          <div>
            <div className="postTitle">
              <label className="title">
                <h2>Title:</h2>
              </label>
              <input
                className="title-box"
                type="text"
                value={id.title}
                onChange={(e) => {
                  handleonChange(e.target.value);
                  dispatch(
                    EditPost({
                      text: e.target.value,
                      id: id.id,
                      section: 'title',
                    })
                  );
                }}
                onKeyUp={(e) =>
                  e.key === 'Enter' &&
                  dispatch(
                    byTitle({
                      text: post,
                    })
                  )
                }
              />
            </div>
          </div>
          <div>
            <div className="postBody">
              <label className="Body">
                <h2>Body:</h2>
              </label>
              <textarea
                className="body-box"
                value={id.body}
                onChange={(e) =>
                  dispatch(
                    EditPost({ text: e.target.value, id, section: 'body' })
                  )
                }
              >
                <strong>{id.body}</strong>
              </textarea>
            </div>
          </div>
          <div className="edit-button-container">
            <button className="edit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default editPost;
