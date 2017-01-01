import find from 'lodash/find';
import indexOf from 'lodash/indexOf';

const initialState = {
  posts: [],
  editor: {
    title: '',
    content: {}
  }
};

function writeToLocal(data) {
  const stringified = JSON.stringify(data);
  localStorage.setItem('data', stringified);
}

function readFromLocal() {
  const parsed = JSON.parse(localStorage.getItem('data'));
  return parsed;
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_DATA': {
      return action.payload;
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
      const newState = {
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
      writeToLocal(newState);
      return newState;
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
      const { id, comment } = action.payload;
      const posts = [...state.posts];
      const post = find(posts, { id });
      const postIndex = indexOf(posts, post);
      post.comments.push(comment);
      posts.splice(postIndex, 1, post);
      const newState = {
        ...state,
        posts
      };
      writeToLocal(newState);
      return newState;
    }

    default:
      return state;
  }
}

export function fetchData() {
  return dispatch => {
    dispatch({ type: 'FETCH_DATA', payload: readFromLocal() });
  };
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

export function newComment(id, content, name) {
  return dispatch => {
    const newCommentObject = {
      id,
      comment: {
        name,
        content,
        time: new Date().getTime(),
      }
    };
    dispatch({ type: 'NEW_COMMENT', payload: newCommentObject });
  };
}
