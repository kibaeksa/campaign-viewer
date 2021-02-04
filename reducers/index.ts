import { HYDRATE } from 'next-redux-wrapper';
import { AnyAction, combineReducers } from 'redux';

import post from './post/reducer';
import { PostState } from './post';

export type State = {
  post: PostState;
};

const rootReducer = ( state: State, action: AnyAction ): State => {
  switch ( action.type ) {
    case HYDRATE:
      console.log('HYDRATE',action);
      return action.payload;
    default: {
      const combineReducer = combineReducers<{
        post: PostState,
      }>({
        post,
      });
      return combineReducer( state, action );
    }
  }
};

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
