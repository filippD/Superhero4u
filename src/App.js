import React from 'react';

import './App.css';

import Homepage from './pages/Homepage/Homepage.component';
import Checkout from './pages/Checkout/Checkout.component';
import Shop from './pages/Shop/Shop.component';
import MyPage from './pages/MyPage/MyPage.component';
import Header from './components/Header/Header.component';

import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
    	<Header />
    	<Switch>
    		<Route exact path='/' component={Homepage} />
    		<Route exact path='/checkout' component={Checkout} />
    		<Route exact path='/mypage' component={MyPage} />
    		<Route path='/shop' component={Shop} />
		</Switch>
    </div>
  );
};

export default App;
