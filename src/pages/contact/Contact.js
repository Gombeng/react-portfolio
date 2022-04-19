import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

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
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className="">
			<h2 className="title">this is Contact page</h2>

			<form ref={form} onSubmit={sendEmail}>
				<label>Name</label>
				<input type="text" name="from_name" required />
				<label>Email</label>
				<input type="email" name="from_email" required />
				<label>Message</label>
				<textarea name="message" required />
				<input type="submit" value="Send" />
			</form>
		</div>
	);
}
