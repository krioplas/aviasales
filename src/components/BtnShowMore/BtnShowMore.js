import { connect } from 'react-redux';

import { addTicket } from '../../redux/action/action';
import './BtnShowMore.scss';

function BtnShowMore({ onAddTicket }) {
  // const value = useSelector((state) => state.ticket.ticket);
  // const dispatch = useDispatch();
  // const sob = () => dispatch(addTicket());

  return (
    <div>
      <button
        type='button'
        className='btnShowMore'
        onClick={() => {
          onAddTicket();
        }}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  onAddTicket: () => {
    dispatch(addTicket());
  },
});

export default connect(null, mapDispatchToProps)(BtnShowMore);
