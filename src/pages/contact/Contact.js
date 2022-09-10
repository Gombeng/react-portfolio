import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.scss';
import { tabTitle } from '../../utils/GeneralFunc';

export default function Contact() {
	tabTitle('Contact | Syahrizal Ardana');

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
		<div className="container contact">
			<h2 className="title mb-2">Contact me</h2>

			<form ref={form} onSubmit={sendEmail}>
				<div className="item-1">
					<label>Full Name</label>
					<input
						type="text"
						name="from_name"
						placeholder="Syahrizal Ardana"
						required
					/>
				</div>

				<div className="item-2">
					<label>Email</label>
					<input
						type="email"
						name="from_email"
						placeholder="syahrizalardana@gmail.com"
						required
					/>
				</div>

				<div className="item-3">
					<label>Message</label>
					<textarea
						name="message"
						placeholder="hello friends bla bla bla..."
						required
					/>
				</div>
				<div className="item-4">
					<input className="button" type="submit" value="Send" />
				</div>
			</form>
		</div>
	);
}
