import { takeLatest } from 'redux-saga/effects';
import { handleGetPost } from './handlers/title';
import { GET_POST } from '../config/title';

export function* watcherSaga() {
  yield takeLatest(GET_POST, handleGetPost);
}
