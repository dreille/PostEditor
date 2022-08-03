import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from './Redux/config/title';
import Search from './Search';
import EditPost from './EditPost';

import './styles.css';

function App() {
  const dispatch = useDispatch();

  function getData() {
    dispatch(getPost());
  }
  useEffect(() => {
    getData();
  }, []);

  const user = useSelector((state) => state.posts.posts);

  return (
    <div className="App">
      <h1> Posts</h1>
      <div className="container">
        <div className="searchRes">
          {user.length !== 0 ? <Search data={user} /> : ''}
        </div>
        <div className="editZone">
          <EditPost />
        </div>
      </div>
    </div>
  );
}

export default App;
