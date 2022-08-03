import reducer, {
  setPost, byID, byTitle, addChange, EditPost,
} from '../src/Redux/config/title';

describe(' Posts Reducer', () => {
  let state;
  beforeEach(() => {
    state = {
      posts: [{ title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto', id: 1 }],
      isLoading: true,
      edit: {
        title: '',
        body: '',
        id: '',
      },
    };
  });
  test('should return the initial state', () => {
    expect(reducer(undefined, { type: undefined })).toEqual(
      {
        posts: [],
        isLoading: true,
        edit: {
          title: '',
          body: '',
          id: '',
        },
      },
    );
  });

  
  test('should handle setting data from API', () => {
    const previousState = [{
      title: 'Here is the',
      body: 'Dummy Data',
      id: '1',
    }];

    expect(reducer(previousState, setPost(previousState)).posts).toEqual([
      {
        title: 'Here is the',
        body: 'Dummy Data',
        id: '1',
      },
    ]);
  });

  test('Should Edit the Data', () => {
    const titleEdit = { text: 'Run the tests', section: 'title' };
    const previousState = {
      posts: [],
      isLoading: false,
      edit: {
        title: 'Here we Go',
        body: 'Ok lets see',
        id: '1',
      },
    };
    expect(reducer(previousState, EditPost(titleEdit))).toEqual({
      posts: [],
      isLoading: false,
      edit: {
        title: 'Run the tests',
        body: 'Ok lets see',
        id: '1',
      },
    });

    const bodyEdit = { text: 'They are a go', section: 'body' };

    expect(reducer(previousState, EditPost(bodyEdit))).toEqual({
      posts: [],
      isLoading: false,
      edit: {
        title: 'Here we Go',
        body: 'They are a go',
        id: '1',
      },
    });
  });

  test('Should Change the Data', () => {
   
    const previousState = {
      posts: [state.posts[0]],
      isLoading: false,
      edit: {
        body: 'Ok lets see',
        id: 1,
        title: 'Here we Go',
      },
    };
    expect(reducer(previousState, addChange())).toEqual({
      posts: [{
        body: 'Ok lets see',
        id: 1,
        title: 'Here we Go',
      }],
      isLoading: false,
      edit: {
        title: '',
        body: '',
        id: '',
      },
    });
  });

  test('Should Find post by id', () => {
    const previousState = {
      posts: [state.posts[0], {
        title: 'Here we Go',
        body: 'Ok lets see',
        id: 2,
      }],
      isLoading: false,
      edit: {
        body: '',
        id: 0,
        title: '',
      },
    };
    expect(reducer(previousState, byID(2))).toEqual({
      posts: [
        state.posts[0], {
          title: 'Here we Go',
          body: 'Ok lets see',
          id: 2,
        }],
      isLoading: false,
      edit: {
        title: 'Here we Go',
        body: 'Ok lets see',
        id: 2,
      },
    });
  });

  test('Should Find post by Title', () => {
    const previousState = {
      posts: [state.posts[0], {
        title: 'Here we Go',
        body: 'Ok lets see',
        id: 2,
      }],
      isLoading: false,
      edit: {
        body: '',
        id: 0,
        title: '',
      },
    };
    expect(reducer(previousState, byTitle({text:'Here we Go'}))).toEqual({
      posts: [
        state.posts[0], {
          title: 'Here we Go',
          body: 'Ok lets see',
          id: 2,
        }],
      isLoading: false,
      edit: {
        title: 'Here we Go',
        body: 'Ok lets see',
        id: 2,
      },
    });
  });
  
});
