import './Filter.scss';
import { connect } from 'react-redux';

import { activeChecked } from '../../redux/action/action';

function Filter({ isAction, result }) {
  const input = result.filter.map((el) => (
    <div className='filter-checkbox' key={el.id}>
      <input
        type='checkbox'
        className='custom-checkbox'
        id={el.id}
        onChange={() => {
          isAction(el.id); // передаем действие с типом
        }}
        checked={el.checked}
      />

      <label htmlFor={el.id}>{el.name}</label>
    </div>
  ));
  return (
    <div className='filter'>
      <div className='filter-header'>Количество пересадок</div>
      <form className='filter-form'>{input}</form>
    </div>
  );
}
const mapStateToProps = (state) => ({ result: state });
const mapDispatchToProps = (dispatch) => ({
  isAction: (data) => dispatch(activeChecked(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
