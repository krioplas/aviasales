/* eslint-disable no-await-in-loop */
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
const listTickedSuccess = (tickets, stop) => ({
  type: 'LIST_TICKED_SUCCESS',
  payload: {
    tickets,
    stop,
  },
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

export const listTicked = () => async (dispatch) => {
  dispatch(listTickedStarted());
  const whileSuccess = async () => {
    let start;
    await apiService()
      .then((res) => {
        dispatch(listTickedSuccess(res.tickets, res.stop));
        start = !res.stop;
      })
      .catch((err) => {
        start = err.message.includes('500');
        if (!start) {
          dispatch(listTickedFailure(err.message));
        }
      });
    return start;
  };

  let status = true;
  while (status) {
    status = await whileSuccess();
  }
};
