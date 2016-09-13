import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Login from './components/Login'
import Register from './components/Register'
import './index.css';

import { Router, Route, IndexRoute, hashHistory } from "react-router";

const app = document.getElementById('root');

ReactDOM.render(
	<Router history={ hashHistory }>
		<Route path="/" component={ App }></Route>
		<Route path="/login" component={ Login }></Route>
		<Route path="/register" component={ Register }></Route>
		<Route path="/what-is-habit@" component={ Login }></Route>
	</Router>, 
app);