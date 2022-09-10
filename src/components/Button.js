import React from 'react';
import styled from 'styled-components';

const Button = ({ title, ...rest }) => {
	return <StyledButton {...rest}>{title}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
	all: unset;
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.color};
	padding: 1em 1.5em;
	width: fit-content;
	/* margin: 0 auto; */
	border-radius: 0.3rem;
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;
	transition: 0.6s all ease;

	&:hover {
		background-color: white;
	}
`;
