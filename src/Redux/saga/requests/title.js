import { SET_POST } from '../../config/title';

export const requestGetPost = async () => {
  const res = await fetch('http://localhost:3000/posts');

  const data = await res.json();
  return data;
};
