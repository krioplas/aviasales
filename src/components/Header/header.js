import logo from '../../assets/logo.svg';

import stlHeader from './header.module.scss';

function Header() {
  return (
    <div className={stlHeader.header}>
      <img src={logo} alt='LOGO' />
    </div>
  );
}

export default Header;
