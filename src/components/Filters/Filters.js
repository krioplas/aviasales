import { useDispatch, useSelector } from 'react-redux';

import { activeChecked } from '../../redux/action/action';

import stlFilter from './Filter.module.scss';

function Filter() {
  const dispatch = useDispatch();

  const filter = useSelector((state) => state.filterReducers.filter);
  const input = filter.map((el) => (
    <div className={stlFilter.filter_checkbox} key={el.id}>
      <input
        type='checkbox'
        className={stlFilter.custom_checkbox}
        id={el.id}
        onChange={() => {
          dispatch(activeChecked(el.id)); // передаем действие с типом
        }}
        checked={el.checked}
      />

      <label htmlFor={el.id}>{el.name}</label>
    </div>
  ));
  return (
    <div className={stlFilter.filter}>
      <div className={stlFilter.filter_header}>Количество пересадок</div>
      <form className={stlFilter.filter_form}>{input}</form>
    </div>
  );
}

export default Filter;
