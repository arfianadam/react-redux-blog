const initialState = {
  posts: [
    {
      id: 1,
      title: 'Some blog title',
      time: new Date().getTime(),
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iure vitae, soluta.</p>',
      comments: [
        {
          time: new Date().getTime(),
          content: 'What a nice article!'
        }
      ]
    },
    {
      id: 2,
      title: 'Hello World!',
      time: new Date().getTime(),
      content: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus iure vitae, soluta.</p>',
      comments: [
        {
          time: new Date().getTime(),
          content: 'What a nice article!'
        }
      ]
    }
  ]
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_POSTS': {
      return;
    }

    case 'FETCH_POSTS_DONE': {
      return;
    }

    case 'CREATING_POST': {
      return {
        ...state,
        posts: [
          ...state.posts,
          action.payload
        ]
      };
    }

    default:
      return state;
  }
}
