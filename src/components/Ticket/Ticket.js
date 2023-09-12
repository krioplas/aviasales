import { format } from 'date-fns';

import stlTicket from './Ticket.module.scss';

function Ticket(props) {
  const { carrier, segments, price } = props.ticket;
  return (
    <div className={stlTicket.ticket}>
      <div className={stlTicket.ticket_header}>
        <span className={stlTicket.ticket_header_price}>{`${price} P`}</span>
        <img src={`https://pics.avs.io/99/36/${carrier}.png`} alt='' />
      </div>
      <TicketInfo segments={segments} />
    </div>
  );
}

function TicketInfo(props) {
  let id = 1;
  function declensionStops(count) {
    if (count === 1) {
      return 'пересадка';
    }
    if (count >= 2 && count <= 4) {
      return 'пересадки';
    }
    return 'пересадок';
  }
  function timeFlight(time) {
    const minutes = time % 60;
    const hours = (time - minutes) / 60;
    return `${hours}ч ${minutes}м`;
  }
  function formatTime(time, timeFly) {
    const start = new Date(time);
    const end = new Date(Date.parse(time) + timeFly * 60000);
    return `${format(start, 'HH:mm')} - ${format(end, 'HH:mm')}`;
  }
  const { segments } = props;
  return segments.map((el) => {
    id += 1;
    return (
      <div
        className={`${stlTicket.ticket_info} ${stlTicket.ticket_info__marg}`}
        key={id}
      >
        <div className={stlTicket.ticket_info_airports}>
          <span className={stlTicket.ticket_info_airports_head}>
            {`${el.origin}-${el.destination}`}
          </span>
          <span className={stlTicket.ticket_info_airports_content}>
            {formatTime(el.date, el.duration)}
          </span>
        </div>
        <div className={stlTicket.ticket_info_airports}>
          <span className={stlTicket.ticket_info_airports_head}>В ПУТИ</span>
          <span className={stlTicket.ticket_info_airports_content}>
            {timeFlight(el.duration)}
          </span>
        </div>
        <div className={stlTicket.ticket_info_airports}>
          <span className={stlTicket.ticket_info_airports_head}>
            {el.stops.length === 0
              ? 'Без пересадок'
              : `${el.stops.length} ${declensionStops(el.stops.length)}`}
          </span>
          <span className={stlTicket.ticket_info_airports_content}>
            {el.stops.join(', ')}
          </span>
        </div>
      </div>
    );
  });
}

export default Ticket;
