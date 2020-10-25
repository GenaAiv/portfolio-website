import React from 'react';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import Navi from './components/Navi.jsx';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

const App = () => {
	return (
		<div>
			<Navi />
			<Router>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/projects" component={Projects} />
					<Route path="/contact" component={Contact} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
