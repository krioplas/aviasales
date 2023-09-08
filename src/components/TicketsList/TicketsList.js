import './TicketsList.scss';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Loader from '../Loader/loader';
import Ticket from '../Ticket/Ticket';
import DescriptionAlerts from '../Alert/alert';
import { listTicked } from '../../redux/action/action';

function TicketsList({ onListTicked, result }) {
  let ticket;
  useEffect(() => {
    onListTicked();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let checkedFilter = result.filter.filter((el) => el.checked);
  checkedFilter = checkedFilter.map((el) => el.filterNum);
  let newState;
  if (checkedFilter.length === 0) {
    newState = [];
  } else {
    newState = result.tickets.map((el) => {
      const inside = el.segments[0].stops.length;
      let newEl;
      if (checkedFilter.includes(inside)) {
        newEl = el;
        return newEl;
      }
      return newEl;
    });
    newState = newState.filter((item) => item !== undefined);
  }
  result.buttons.map((el) => {
    if (el.id === 1 && el.active) {
      newState.sort((a, b) => a.price - b.price);
    }
    if (el.id === 2 && el.active) {
      newState.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
    }
    return newState;
  });
  newState = newState.slice(0, result.countTickets);
  if (result.loading) {
    ticket = <Loader />;
  } else if (result.error !== null) {
    ticket = <DescriptionAlerts data={result.error} />;
  } else {
    ticket = newState.map((el) => <Ticket ticket={el} key={uuidv4()} />);
  }

  return (
    <div className='allTicket'>
      {checkedFilter.length === 0
        ? 'Рейсов, подходящих под заданные фильтры, не найдено'
        : ticket}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  onListTicked: () => {
    dispatch(listTicked());
  },
});
const mapStateToProps = (state) => ({ result: state });
export default connect(mapStateToProps, mapDispatchToProps)(TicketsList);
