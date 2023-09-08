import React from 'react';

import Header from '../Header/header';
import Tabs from '../Tabs/Tabs';
import Filter from '../Filters/Filters';
import BtnShowMore from '../BtnShowMore/BtnShowMore';
import TicketsList from '../TicketsList/TicketsList';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='content'>
        <Filter />
        <div className='content-ticket'>
          <Tabs />
          <TicketsList />
          <BtnShowMore />
        </div>
      </div>
    </div>
  );
}

export default App;
