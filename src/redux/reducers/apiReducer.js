const initialState = {
  tickets: [],
  stop: null,
  error: null,
  countApi: 1,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_TICKED_STARTED':
      return {
        ...state,
        loading: state.tickets.length === 0,
      };

    case 'LIST_TICKED_SUCCESS': {
      state.tickets.push(...action.payload);
      return {
        ...state,
        stop: action.stop,
        countApi: action.stop ? state.countApi : state.countApi + 1,
      };
    }
    case 'LIST_TICKED_FAILURE':
      return {
        ...state,
        error: action.payload.error !== '500',
        countApi: state.countApi + 1,
      };
    default:
      return state;
  }
};
export default apiReducer;
