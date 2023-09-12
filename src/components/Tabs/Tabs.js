import { useDispatch, useSelector } from 'react-redux';

import { activeTabs } from '../../redux/action/action';

import stlTabs from './Tabs.module.scss';

function Tabs() {
  const dispatch = useDispatch();

  const buttons = useSelector((state) => state.filterReducers.buttons);

  const button = buttons.map((el) => (
    <button
      type='button'
      className={
        el.active
          ? `${stlTabs.tabs_btn} ${stlTabs.tabs_btn__active}`
          : stlTabs.tabs_btn
      }
      key={el.id}
      onClick={() => {
        dispatch(activeTabs(el.id));
      }}
    >
      {el.name}
    </button>
  ));
  return <div className={stlTabs.tabs}>{button}</div>;
}

export default Tabs;
