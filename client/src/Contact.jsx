import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import axios from 'axios';
import './Contact.scss';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			message: '',
		};
	}
	resetForm() {
		this.setState({
			name: '',
			email: '',
			message: '',
		});
	}

	render() {
		return (
			<Container className="contact-styles">
				<Row>
					<Col sm={12} md={12} lg={12}>
						<div className="contact-text">
							<h1>Like what you see?</h1>
							<h4>Feel free to drop me a message</h4>
						</div>
					</Col>
				</Row>
				<Row>
					<Col sm={12} md={6} lg={6}>
						<Image
							src={require('./assets/message.png')}
							className="floating"
							fluid
						></Image>
					</Col>
					<Col sm={12} md={6} lg={6}>
						<form
							id="contact-form"
							onSubmit={this.handleSubmit.bind(this)}
							method="POST"
						>
							<div className="form-group">
								<label htmlFor="name">Name</label>
								<input
									type="text"
									className="form-control"
									id="name"
									value={this.state.name}
									onChange={this.onNameChange.bind(this)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-control"
									id="email"
									aria-describedby="emailHelp"
									value={this.state.email}
									onChange={this.onEmailChange.bind(this)}
								/>
							</div>
							<div className="form-group">
								<label htmlFor="message">Message</label>
								<textarea
									className="form-control"
									rows="5"
									id="message"
									value={this.state.message}
									onChange={this.onMessageChange.bind(this)}
								></textarea>
							</div>
							<button type="submit" className="btn btn-primary">
								Submit
							</button>
						</form>
					</Col>
				</Row>
			</Container>
		);
	}

	onNameChange(e) {
		this.setState({ name: e.target.value });
	}

	onEmailChange(e) {
		this.setState({ email: e.target.value });
	}

	onMessageChange(e) {
		this.setState({ message: e.target.value });
	}

	handleSubmit(e) {
		e.preventDefault();

		axios({
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Headers': '*',
			},
			url: '/send',
			data: this.state,
		}).then(response => {
			if (response.status === 200) {
				alert('Message Sent.');
			} else if (response.status !== 200) {
				alert('Message failed to send.');
			}
		});
		this.resetForm();
	}
}
export default Contact;
