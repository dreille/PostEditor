import { createSlice } from '@reduxjs/toolkit';

export const GET_POST = 'GET_POST';
export const SET_POST = 'SET_POST';
export const EDIT_POST = 'EDIT_POST';
export const BY_ID = 'BY_ID';

export const getPost = () => ({
  type: GET_POST,
});

const initialState = {
  posts: [],
  isLoading: true,
  edit: {
    title: '',
    body: '',
    id: '',
  },
};
export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPost: (state, action) => {
      const posts = action.payload;
      return {
        ...state,
        posts,
        isLoading: false,
        edit: state.edit,
      };
    },
    EditPost: (state, action) => {
      const { posts, edit } = JSON.parse(JSON.stringify(state));
      const selectedPost = edit;
      if (action.payload.section === 'title') {
        selectedPost.title = action.payload.text;
      } else {
        selectedPost.body = action.payload.text;
      }
      return {
        ...state,
        posts,
        isLoading: false,
        edit: selectedPost,
      };
    },
    addChange: (state, action) => {
      const { posts, edit } = JSON.parse(JSON.stringify(state));
      const postIndex = posts.findIndex((post) => post.id === edit.id);
      posts[postIndex] = edit;
      return {
        ...state,
        posts,
        isLoading: false,
        edit: {
          title: '',
          body: '',
          id: '',
        },
      };
    },
    byID: (state, action) => {
      const posts = JSON.parse(JSON.stringify(state.posts));
      const postIndex = posts.findIndex((post) => post.id === action.payload);
      const newPost = {
        title: posts[postIndex].title,
        body: posts[postIndex].body,
        id: posts[postIndex].id,
      };
      return {
        ...state,
        posts,
        isLoading: false,
        edit: newPost,
      };
    },
    byTitle: (state, action) => {
      const { posts, edit } = JSON.parse(JSON.stringify(state));
      const postIndex = posts.findIndex(
        (post) => post.title === action.payload.text
      );

      if (postIndex === -1) {
        return {
          ...state,
          posts,
          isLoading: false,
          edit,
        };
      }
      const newPost = {
        title: posts[postIndex].title,
        body: posts[postIndex].body,
        id: posts[postIndex].id,
      };
      return {
        ...state,
        posts,
        isLoading: false,
        edit: newPost,
      };
    },
  },
});

export const { setPost, byID, EditPost, addChange, byTitle } =
  postsSlice.actions;
export default postsSlice.reducer;
