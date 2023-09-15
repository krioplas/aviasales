const initialState = {
  tickets: [],
  error: false,
  loading: false,
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_TICKED_STARTED':
      return {
        ...state,
        loading: true,
      };

    case 'LIST_TICKED_SUCCESS': {
      return {
        ...state,
        tickets: state.tickets.concat(action.payload.tickets),
        loading: !action.payload.stop,
      };
    }
    case 'LIST_TICKED_FAILURE':
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default apiReducer;
