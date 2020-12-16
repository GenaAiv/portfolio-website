import React, { Component } from 'react';
import { Container, CardDeck, Image } from 'react-bootstrap';
import './Skills.scss';

class Skills extends Component {
	render() {
		return (
			<div>
				<div className="d-flex justify-content-center align-items-center m-5">
					<h2 id="skills-h2">
						My <strong>current</strong> Tech Stack
					</h2>
				</div>
				<CardDeck>
					<Container class="skills-card">
						<div className="d-flex justify-content-around row">
							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">
											Programming Languages
										</div>
										<hr></hr>
										<div className="d-flex justify-content-start flex-column">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://javascript.info/"
													target="_blank"
												>
													<Image
														src={require('../assets/javaScript.png')}
														alt="JavaScript"
														className="m-1 rounded"
													/>
													JavaScript
												</a>
											</span>
											<hr></hr>
											<hr></hr>
											<div className="text-center card-title h5">
												Libraries <hr></hr>
											</div>

											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://jquery.com/"
													target="_blank"
												>
													<img
														src={require('../assets/jquery.png')}
														alt="JavaScript"
														className="m-1 rounded"
													/>
													jQuery
												</a>
											</span>

											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://redux.js.org/"
													target="_blank"
												>
													<img
														src={require('../assets/redux.png')}
														alt="Redux"
														className="m-1 rounded"
													/>
													Redux
												</a>
											</span>
										</div>
									</div>
								</div>

								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">IDE</div>
										<hr></hr>
										<div className="d-flex justify-content-start flex-column">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://code.visualstudio.com/"
													target="_blank"
												>
													<img
														src={require('../assets/vsc.png')}
														alt="Visual Studio Code"
														className="m-1 rounded"
													/>
													Visual Studio Code
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-6 col-sm-12">
								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">Front End</div>
										<hr></hr>
										<div className="d-flex justify-content-start flex-column">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://en.wikipedia.org/wiki/HTML5"
													target="_blank"
												>
													<img
														src={require('../assets/html5.png')}
														alt="HTML5"
														className="m-1 rounded"
													/>
													HTML5
												</a>
											</span>

											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://en.wikipedia.org/wiki/CSS"
													target="_blank"
												>
													<img
														src={require('../assets/css.png')}
														alt="CSS3"
														className="m-1 rounded"
													/>
													CSS3
												</a>
											</span>

											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://getbootstrap.com/"
													target="_blank"
												>
													<img
														src={require('../assets/bootstrap.png')}
														alt="Bootstrap"
														className="m-1"
													/>
													Bootstrap
												</a>
											</span>

											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://reactjs.org/"
													target="_blank"
												>
													<img
														src={require('../assets/react.png')}
														alt="React"
														className="m-1"
													/>
													ReactJS
												</a>
											</span>
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://react-bootstrap.github.io/"
													target="_blank"
												>
													<img
														src={require('../assets/reactboot.png')}
														width="50px"
														alt="React Bootstrap"
														className="m-1 rounded"
													/>
													React Bootstrap
												</a>
											</span>
										</div>
									</div>
								</div>
								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">Back End</div>
										<hr></hr>
										<div className="d-flex justify-content-start flex-column">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://expressjs.com/"
													target="_blank"
												>
													<img
														src={require('../assets/express.png')}
														alt="ExpressJS"
														className="m-1 rounded"
													/>
													Express
												</a>
											</span>
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://nodejs.org/en/"
													target="_blank"
												>
													<img
														src={require('../assets/nodejs.png')}
														alt="NodeJS"
														className="m-1 rounded"
													/>
													Node.Js
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="col-lg-4 col-md-8 col-sm-12">
								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">Database</div>
										<hr></hr>
										<div className="card-text d-flex justify-content-start flex-column card-text">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://www.postgresql.org/"
													target="_blank"
												>
													<img
														src={require('../assets/postgresql.png')}
														alt="PostgreSQL"
														className="m-1 rounded"
													/>
													PostgreSQL
												</a>
											</span>
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://www.mongodb.com/"
													target="_blank"
												>
													<img
														src={require('../assets/mongodb.png')}
														alt="MongoDB"
														className="m-1 rounded"
													/>
													MongoDB
												</a>
											</span>
										</div>
									</div>
								</div>

								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">
											Version Control
										</div>
										<hr></hr>
										<div className="card-text d-flex justify-content-start flex-column card-text">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://git-scm.com/"
													target="_blank"
												>
													<img
														src={require('../assets/git.png')}
														alt="GIT"
														className="m-1 rounded"
													/>
													GIT
												</a>
											</span>
										</div>
									</div>
								</div>

								<div className="focus mt-2 mb-2 card">
									<div className="card-body">
										<div className="text-center card-title h5">
											Hosting Platform
										</div>
										<hr></hr>
										<div className="card-text d-flex justify-content-start flex-column card-text">
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://www.netlify.com/"
													target="_blank"
												>
													<img
														src={require('../assets/netlify.png')}
														alt="Netlify"
														className="m-1 rounded"
													/>
													Netlify
												</a>
											</span>
											<span className="p-2 focus-in">
												<a
													className="text-decoration-none"
													href="https://www.heroku.com/"
													target="_blank"
												>
													<img
														src={require('../assets/heroku.png')}
														alt="Heroku"
														className="m-1 rounded"
													/>
													Heroku
												</a>
											</span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Container>
				</CardDeck>
			</div>
		);
	}
}

export default Skills;
