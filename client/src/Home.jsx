import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import './Home.scss';
import About from './About';
import Skills from './components/Skills';

const imgMyimageexample = require('./assets/dev.png');

const homeStyle = {
	height: '100vh',
	width: '100vw',
	display: 'flex',
};
const Home = () => {
	return (
		<div>
			<Container
				id="header"
				className="header"
				style={homeStyle}
				className={'d-flex align-items-center bd-highlight mb-3 appear'}
			>
				<div className="circle appear"></div>
				<Row>
					<Col lg={6} sm={12} md={6} order={1}>
						<div className="home-info">
							<h1>
								Gena<strong>AIVAZIAN</strong>
							</h1>
							<h2 className="">
								Junior <strong>Developer</strong>
							</h2>
							<Button variant="primary" size="lg">
								<a href="./#/contact" className="btn-get-started">
									Get in Touch
								</a>
							</Button>
						</div>
					</Col>
					<Col lg={6} sm={12} md={6} pt={5} order={2}>
						<div className=" header-img">
							<img
								src={imgMyimageexample}
								alt="home img"
								className="img-fluid floating"
							/>
						</div>
					</Col>
				</Row>
			</Container>
			<About />
			<Skills />
		</div>
	);
};

export default Home;
