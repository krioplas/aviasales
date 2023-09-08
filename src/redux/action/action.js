import apiService from '../../service/apiService';

export const activeChecked = (data) => ({
  type: 'CHECK',
  payload: data,
});

export const activeTabs = (data) => ({
  type: 'ON_TABS',
  payload: data,
});
export const addTicket = () => ({
  type: 'ADD_LIST_TICKED',
});
const listTickedSuccess = (payload) => ({
  type: 'LIST_TICKED_SUCCESS',
  payload,
});
const listTickedStarted = () => ({
  type: 'LIST_TICKED_STARTED',
});

const listTickedFailure = (error) => ({
  type: 'LIST_TICKED_FAILURE',
  payload: {
    error,
  },
});

export const listTicked = () => (dispatch) => {
  dispatch(listTickedStarted());
  apiService()
    .then((res) => {
      dispatch(listTickedSuccess(res.tickets));
    })
    .catch((err) => {
      dispatch(listTickedFailure(err.message));
    });
};
