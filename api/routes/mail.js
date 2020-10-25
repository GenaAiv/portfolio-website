const express = require('express');
let router = express.Router();
const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
require('dotenv').config();

const oauth2Client = new OAuth2(
	process.env.OAUTH_CLIENT_ID,
	process.env.OAUTH_CLIENT_SECRET, // Client Secret
	'https://developers.google.com/oauthplayground' // Redirect URL
);

oauth2Client.setCredentials({
	refresh_token:
		'1//04zuZB9CENxVmCgYIARAAGAQSNwF-L9IrdHGKSvSKbGmhjcGxX9rZoL6sWJbevend9Co0zcU8NoVLQSrrpi8VG7TArb3_s29pHhg',
});
const accessToken = oauth2Client.getAccessToken();

let transport = {
	host: 'smtp.gmail.com',
	secure: true,
	service: 'gmail',
	auth: {
		type: 'OAUTH2',
		user: process.env.GMAIL_USERNAME, //set these in your .env file
		clientId: process.env.OAUTH_CLIENT_ID,
		clientSecret: process.env.OAUTH_CLIENT_SECRET,
		refreshToken: process.env.OAUTH_REFRESH_TOKEN,
		accessToken: accessToken,
	},
	tls: {
		rejectUnauthorized: false,
	},
};

let transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
	if (error) {
		console.log(error);
	} else {
		console.log('Server is ready to take messages');
	}
});

router.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin'); // update to match the domain you will make the request from
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept'
	);
	next();
});

router.post('/', (req, res, next) => {
	const name = req.body.name;
	const email = req.body.email;
	const message = req.body.message;
	console.log(req.body);
	const content = `name: ${name} \n email: ${email} \n message: ${message}`;
	const mail = {
		from: name,
		to: 'genaaiv@gmail.com', //Change to email address that you want to receive messages on
		subject: 'New Message from Contact Form',
		text: content,
	};

	transporter.sendMail(mail, (err, data) => {
		console.log('mail', mail);
		if (err) {
			res.json({
				status: 'fail',
			});
		} else {
			res.json({
				status: 'success',
			});

			transporter.sendMail(
				{
					from: 'genaaiv@gmail.com',
					to: email,
					subject: 'Submission was successful',
					text: `Thank you for getting in touch with me ${name}.\nI will reply as soon as possible!\n\n\n\n Cheers,\nGena Aivazian `,
				},
				function (error, info) {
					if (error) {
						console.log(error);
					} else {
						console.log('Message sent: ' + info.response);
					}
				}
			);
		}
	});
});

module.exports = router;
