import { call, put } from 'redux-saga/effects';
import { setPost } from '../../config/title';
import { requestGetPost } from '../requests/title';

export function* handleGetPost(action) {
  try {
    const response = yield call(requestGetPost);
    const { data } = response;
    yield put(setPost(data));
  } catch (error) {
    console.error(error);
  }
}
