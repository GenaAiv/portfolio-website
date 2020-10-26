import React, { Component } from 'react';
import { Card, Container, Button, Row } from 'react-bootstrap';
import './ProjectCard.scss';

class ProjectCard extends Component {
	render() {
		return (
			<div>
				<Container
					className="align-items-center"
					style={{ paddingTop: '25vh' }}
				>
					<Row className="justify-content-center project-card">
						<Card
							className="focus"
							lg={4}
							sm={12}
							style={{ width: '300px', margin: '10px' }}
						>
							<Card.Img
								className="focus"
								variant="top"
								src={require('../assets/weather.png')}
							/>
							<Card.Body className="">
								<Card.Title>Weather app</Card.Title>
								<Card.Text>Check the weather in your city</Card.Text>
								<div className="button-div">
									<Button
										href="https://check-your-weather.herokuapp.com/"
										variant="primary"
										target="_blank"
									>
										Visit the page
									</Button>
									<Button
										href="https://github.com/GenaAiv/weather-app"
										variant="primary"
										target="_blank"
									>
										Visit GitHub
									</Button>
								</div>
							</Card.Body>
						</Card>
						<Card
							className="focus"
							lg={4}
							sm={12}
							style={{ width: '300px', margin: '10px' }}
						>
							<Card.Img
								className="focus"
								variant="top"
								src={require('../assets/wtd.png')}
							/>
							<Card.Body className="">
								<Card.Title>
									<strike>What</strike> To Do
								</Card.Title>
								<Card.Text>A simple What to do List</Card.Text>
								<div className="button-div">
									<Button
										href="https://focused-lewin-e18a11.netlify.app/"
										variant="primary"
										target="_blank"
									>
										Visit the page
									</Button>
									<Button
										href="https://github.com/GenaAiv/to-do"
										variant="primary"
										target="_blank"
									>
										Visit GitHub
									</Button>
								</div>
							</Card.Body>
						</Card>
						<Card
							className="focus"
							lg={4}
							sm={12}
							style={{ width: '300px', margin: '10px' }}
						>
							<Card.Img
								className="focus"
								variant="top"
								src={require('../assets/underdev.png')}
							/>
							<Card.Body className="">
								<Card.Title>Support your local Artist</Card.Title>
								<Card.Text>Under development...</Card.Text>
								<div className="button-div">
									<Button href="#" variant="primary" target="_blank" disabled>
										Visit the page
									</Button>
									<Button href="#" variant="primary" target="_blank" disabled>
										Visit GitHub
									</Button>
								</div>
							</Card.Body>
						</Card>
					</Row>
				</Container>
			</div>
		);
	}
}

export default ProjectCard;
