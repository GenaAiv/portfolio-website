const express = require('express');
let router = express.Router();
const nodemailer = require('nodemailer');

let transport = {
	host: 'smtp.gmail.com',
	auth: {
		user: process.env.USER,
		pass: process.env.PASS,
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
