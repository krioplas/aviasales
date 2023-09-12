import React from 'react';

import Header from '../Header/header';
import Tabs from '../Tabs/Tabs';
import Filter from '../Filters/Filters';
import BtnShowMore from '../BtnShowMore/BtnShowMore';
import TicketsList from '../TicketsList/TicketsList';
import Progress from '../Progress/Progress';

import stlApp from './App.module.scss';

function App() {
  return (
    <div className={stlApp.App}>
      <Header />
      <div className={stlApp.content}>
        <Filter />
        <div className={stlApp.content_ticket}>
          <Tabs />
          <Progress />
          <TicketsList />
          <BtnShowMore />
        </div>
      </div>
    </div>
  );
}

export default App;
