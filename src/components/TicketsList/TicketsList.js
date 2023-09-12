import './TicketsList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Ticket from '../Ticket/Ticket';
import DescriptionAlerts from '../Alert/alert';
import { listTicked } from '../../redux/action/action';
import utilFilter from '../../utils/utilFilter';
import utilSort from '../../utils/utilSort';

function TicketsList() {
  const dispatch = useDispatch();

  const countApi = useSelector((state) => state.apiReducer.countApi);

  const filter = useSelector((state) => state.filterReducers.filter);
  const tickets = useSelector((state) => state.apiReducer.tickets);
  const buttons = useSelector((state) => state.filterReducers.buttons);
  const countTickets = useSelector(
    (state) => state.filterReducers.countTickets,
  );
  const error = useSelector((state) => state.apiReducer.error);

  useEffect(() => {
    dispatch(listTicked());
  }, [dispatch, countApi]);
  let ticket;
  const filterTicket = utilFilter(filter, tickets);

  const sortTicket = utilSort(buttons, filterTicket.newState);

  const listTicket = sortTicket.slice(0, countTickets);
  if (error) {
    ticket = <DescriptionAlerts />;
  }
  ticket = listTicket.map((el) => (
    <Ticket ticket={el} key={el.segments[0].date} />
  ));

  return (
    <div className='allTicket'>
      {filterTicket.checkedFilter.length === 0
        ? 'Рейсов, подходящих под заданные фильтры, не найдено'
        : ticket}
    </div>
  );
}

export default TicketsList;
