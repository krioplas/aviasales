import './Tabs.scss';
import { connect } from 'react-redux';

import { activeTabs } from '../../redux/action/action';

function Tabs({ isActiveTabs, result }) {
  const button = result.buttons.map((el) => (
    <button
      type='button'
      className={el.active ? 'tabs-btn tabs-btn__active' : 'tabs-btn'}
      key={el.id}
      onClick={() => {
        isActiveTabs(el.id);
      }}
    >
      {el.name}
    </button>
  ));
  return <div className='tabs'>{button}</div>;
}
const mapStateToProps = (state) => ({ result: state });
const mapDispatchToProps = (dispatch) => ({
  isActiveTabs: (data) => dispatch(activeTabs(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Tabs);
