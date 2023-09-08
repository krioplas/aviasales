const initialState = {
  filter: [
    { id: 1, name: 'Все', checked: true, filterNum: 4 },
    { id: 2, name: 'Без пересадок', checked: true, filterNum: 0 },
    { id: 3, name: '1 пересадка', checked: true, filterNum: 1 },
    { id: 4, name: '2 пересадки', checked: true, filterNum: 2 },
    { id: 5, name: '3 пересадки', checked: true, filterNum: 3 },
  ],
  buttons: [
    { id: 1, name: 'Самый дешевый', active: false },
    { id: 2, name: 'Самый быстрый', active: false },
  ],
  tickets: [],
  countTickets: 5,
  loading: false,
  error: null,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case 'CHECK': {
      const checkId = action.payload;
      const checkAll = state.filter.every((el) => el.checked);
      let newFilter = state.filter.map((el) => {
        el.checked = checkId === 1 ? false : el.checked;
        el.checked = !checkAll && checkId === 1 ? true : el.checked;
        el.checked =
          el.id === checkId && el.id !== 1 ? !el.checked : el.checked;
        el.checked =
          checkAll && el.id === 1 && checkId !== 1 ? false : el.checked;
        return el;
      });
      const checkedNoAll = state.filter.slice(1).every((el) => el.checked);
      if (checkedNoAll) {
        newFilter = state.filter.map((el) => {
          el.checked = el.id === 1 ? true : el.checked;
          return el;
        });
      }
      return { ...state, filter: newFilter };
    }

    case 'ON_TABS': {
      const sortState = state.tickets;
      const checkId = action.payload;

      const activeButton = state.buttons.map((el) => {
        el.active = checkId === el.id ? !el.active : el.active;
        el.active = el.active && checkId !== el.id ? false : el.active;
        return el;
      });

      return { ...state, buttons: activeButton, tickets: sortState };
    }
    case 'ADD_LIST_TICKED':
      return {
        ...state,
        countTickets: state.countTickets + 5,
      };
    case 'LIST_TICKED_STARTED':
      return {
        ...state,
        loading: true,
      };

    case 'LIST_TICKED_SUCCESS': {
      return {
        ...state,
        loading: false,
        error: null,
        tickets: action.payload,
      };
    }
    case 'LIST_TICKED_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
};
export default reducers;
