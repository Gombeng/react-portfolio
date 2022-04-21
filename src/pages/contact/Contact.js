import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_mz5p7v8',
				'template_9j7j9wg',
				form.current,
				'TSrqJgWyQXrCKyvqy'
			)
			.then(
				(result) => {
					console.log(result.text);
					window.location.reload(false);
					window.alert('Message Sent :)');
				},
				(error) => {
					console.log(error.text);
					window.alert('Message not Sent :(');
				}
			);
	};
	return (
		<div className="container ">
			<h2 className="title mb-1">Contact me</h2>

			<form ref={form} onSubmit={sendEmail}>
				<div>
					<label>Full Name</label>
					<input type="text" name="from_name" required />
				</div>

				<div>
					<label>Email</label>
					<input type="email" name="from_email" required />
				</div>

				<div>
					<label>Message</label>
					<textarea name="message" required />
				</div>
				<div>
					<input className="button" type="submit" value="Send" />
				</div>
			</form>
		</div>
	);
}
