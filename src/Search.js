/* eslint-disable react/jsx-filename-extension */
/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';

import { byID } from './Redux/config/title';
import Post from './Post';

function Search(data) {
  const [filter, setFilter] = useState('');
  const [searchBy, setSearchBy] = useState('start');
  const allJobs = data.data;
  const filteredPosts = useMemo(() =>
    searchBy === 'start'
      ? allJobs.filter((post) => post.title.startsWith(filter), [filter])
      : allJobs.filter((post) => post.title.includes(filter), [filter])
  );

  const dispatch = useDispatch();

  return (
    <div className="searched">
      <fieldset>
        <div className="Search-By">
          <h3>How would you like to search: </h3>
          <input
            type="radio"
            className="radio"
            name="SearchFilter"
            value="starting"
            id="starting"
            checked={searchBy === 'start'}
            onChange={() => setSearchBy('start')}
          />
          <label htmlFor="starting">Start of Title</label>
          <input
            type="radio"
            className="radio"
            name="SearchFilter"
            value="entirety"
            id="entirety"
            checked={searchBy === 'entirety'}
            onChange={() => setSearchBy('entirety')}
          />
          <label htmlFor="entirety">Entire Title</label>
        </div>
      </fieldset>
      <div className="result-container">
        <div className="search-container">
          <input
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Search posts"
          />
          <div className="suggestion-box">
            {filter &&
              filteredPosts.map((suggestion) => (
                <div className="suggestion" key={suggestion.id}>
                  {' '}
                  <button onClick={() => dispatch(byID(suggestion.id))}>
                    {suggestion.title}
                  </button>
                </div>
              ))}
          </div>
        </div>

        <div className="postsContainer">
          {filteredPosts.length !== 0 ? (
            filteredPosts.map((post) => (
              <div className="posts" key={post.id}>
                <Post post={post} />
              </div>
            ))
          ) : (
            <h1>No Title's Matching</h1>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
