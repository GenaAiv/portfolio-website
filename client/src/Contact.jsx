import React, { Component } from 'react';
import axios from 'axios';
import messageLogo from './assets/message.svg';
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
			<div className="Contact">
				<header>
					<h1>Like what you see?</h1>
					<h4>Feel free to drop me a message</h4>
				</header>
				<div className="container">
					<img src={messageLogo}></img>
					<form
						id="contact-form"
						onSubmit={this.handleSubmit.bind(this)}
						method="POST"
					>
						<div className="form-group">
							<label for="name">Name</label>
							<input
								type="text"
								className="form-control"
								id="name"
								value={this.state.name}
								onChange={this.onNameChange.bind(this)}
							/>
						</div>
						<div className="form-group">
							<label for="exampleInputEmail1">Email address</label>
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
							<label for="message">Message</label>
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
				</div>
			</div>
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
		}).then((response) => {
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
