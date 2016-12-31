import filter from 'lodash/filter';

const initialState = {
  posts: [
    // {
    //   id: 1,
    //   title: 'Some blog title',
    //   time: new Date().getTime(),
    //   content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iure vitae, soluta.</p>',
    //   comments: [
    //     {
    //       time: new Date().getTime(),
    //       content: 'What a nice article!'
    //     }
    //   ]
    // },
    // {
    //   id: 2,
    //   title: 'Hello World!',
    //   time: new Date().getTime(),
    //   content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iure vitae, soluta.</p>',
    //   comments: [
    //     {
    //       time: new Date().getTime(),
    //       content: 'What a nice article!'
    //     }
    //   ]
    // }
  ],
  editor: {
    title: '',
    content: {}
  }
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return;
    }

    case 'FETCH_POSTS_DONE': {
      return;
    }

    case 'CREATING_TITLE': {
      return {
        ...state,
        editor: {
          ...state.editor,
          title: action.payload
        }
      };
    }

    case 'CREATING_POST': {
      return {
        ...state,
        editor: {
          ...state.editor,
          content: action.payload
        }
      };
    }

    case 'NEW_POST': {
      return {
        ...state,
        posts: [
          ...state.posts,
          {
            id: state.posts.length.toString(),
            title: state.editor.title,
            time: new Date().getTime(),
            content: state.editor.content,
            comments: []
          }
        ]
      };
    }

    case 'CLEAR_EDITOR': {
      return {
        ...state,
        editor: {
          title: '',
          content: {}
        }
      };
    }

    case 'NEW_COMMENT': {
      const post = find(state.posts, { id: action.payload.id });
      return {
        ...state,

      };
    }

    default:
      return state;
  }
}

export function typePost(data, type) {
  return dispatch => {
    if (type === 'title') {
      dispatch({ type: 'CREATING_TITLE', payload: data });
      return;
    }
    dispatch({ type: 'CREATING_POST', payload: data });
  };
}

export function newPost() {
  return dispatch => {
    dispatch({ type: 'NEW_POST', payload: 'NEW_POST' });
    dispatch({ type: 'CLEAR_EDITOR' });
  };
}
