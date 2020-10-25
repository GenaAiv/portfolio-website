import React from 'react';
import { Container, Col, Row, Image } from 'react-bootstrap';
import './About.scss';

const aboutStyles = {
	height: '100vh',
	width: '100vw',
	display: 'flex',
};

const About = () => {
	return (
		<div>
			<Container id="about" style={{ aboutStyles }}>
				<Row>
					<Col lg={12} className="title-name">
						<h2>
							About <strong>Me</strong>
						</h2>
					</Col>
				</Row>
				<Row>
					<Col xl lg md={12} className="about">
						<p>
							I was born in Georgia, Batumi. <br></br>
							My family and I moved to the Netherlands when I was just a
							10-year-old boy. I remember having a huge interest in computers
							and solving puzzles from a young age but due to circumstances, I
							chose a different path in life when growing up. <br></br>
							Around the year 2017, I decided to leave my home and see the
							world. I have been away for two years and when it was time to come
							back I promised myself that I don't want to go back to my old
							life. This is where I found out about programming and knew right
							that I have found my calling. <br></br>Around spring 2020 I
							realized that this is something I want to do for the rest of my
							life and from that moment I left my job and started to pursue a
							career in programming as my end goal with this journey is
							hopefully to become a full-time developer. <br></br>I've always
							been a creative-minded individual when it comes to any task given
							and I like to approach things in a unique style compared to
							others, so thinking outside the box is what I've always done.
							During this period in my life, I was already working full time
							until recently when I left to pursue my career in programming, as
							my end goal with this journey is hopefully to become a full-time
							developer.
						</p>
					</Col>
					<Col xl lg md={12} className="aboutImg about">
						<div className="">
							<Image src={require('./assets/gena.png')} alt="" fluid />
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default About;
