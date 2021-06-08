import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import NavBar from './NavBar';
import HomePage from '../pages/HomePage';

export default function App() {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<div>
					<Route path="/" exact component={HomePage} />
				</div>
			</BrowserRouter>
		</div>
	);
}
