import { FETCH_MOVIES, FETCH_MOVIE } from '../actionTypes';

const initialState = {
  all: [],
  current: { starring: []}
};

export default function(state = initialState, action) {
  switch(action.type) {
    case FETCH_MOVIES: {
      const { movies } = action.payload;
      return { ...state, all: movies };
    }
    case FETCH_MOVIE: {
      const { index } = action.payload;
      return { ...state, current: state.all[index - 1] };
    }
    default:
      return state;
  }
}