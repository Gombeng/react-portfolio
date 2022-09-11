import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from 'styled-components';
import Button from '../../components/Button';
import { color, device, tabTitle } from '../../utils/Utils';
import { BgImageContact } from '../../assets/assets';

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
		<Container>
			<h5 className="mb-2 abs">04 _ MAIL ME A GOOD NEWS</h5>

			<div>
				<div className="left">
					<p>
						tse tet Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Corporis delectus fugit itaque perferendis nihil. Eum reiciendis
						laborum cum quod explicabo.
					</p>
				</div>

				<div className="right">
					<form ref={form} onSubmit={sendEmail}>
						<label>Full Name</label>
						<input
							type="text"
							name="from_name"
							placeholder="Syahrizal Ardana"
							required
						/>

						<label>Email</label>
						<input
							type="email"
							name="from_email"
							placeholder="syahrizalardana@gmail.com"
							required
						/>

						<label>Message</label>
						<textarea
							name="message"
							placeholder="hello friends bla bla bla..."
							required
						/>
						<Button
							className="mt-1"
							title="Send"
							type="submit"
							color={color.bg}
							bgColor={color.textSec}
						/>
					</form>
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem;

	width: 100%;
	min-height: 100vh;
	background-image: url(${BgImageContact});
	background-repeat: no-repeat;
	background-position: fixed;
	background-size: cover;

	p {
		max-width: 400px;
	}

	form {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
		text-align: left !important;
		max-width: 300px;

		label {
			margin: 1rem 0 0.5rem;
		}

		input,
		textarea {
			all: unset;
			width: 300px;
			border-radius: 0.3rem;
			padding: 1em;
			background-color: ${color.bg};
			border: 1px solid ${color.textOne};
		}
	}

	.abs {
		@media ${device.tablet} {
			position: fixed;
			top: 35%;
			left: 5%;
			writing-mode: tb-rl;
		}
	}
`;
