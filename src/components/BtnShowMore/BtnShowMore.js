import { useDispatch } from 'react-redux';

import { addTicket } from '../../redux/action/action';

import stlBtnShowMore from './BtnShowMore.module.scss';

function BtnShowMore() {
  const dispatch = useDispatch();

  return (
    <div>
      <button
        type='button'
        className={stlBtnShowMore.btnShowMore}
        onClick={() => {
          dispatch(addTicket());
        }}
      >
        Показать еще 5 билетов!
      </button>
    </div>
  );
}

export default BtnShowMore;
