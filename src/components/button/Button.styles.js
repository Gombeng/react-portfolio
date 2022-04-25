import styled from 'styled-components';

export const Button = styled.button`
	all: unset;
	/* border: 3px solid #000; */
	background-color: ${(props) =>
		props.variant === 'outline' ? '#FFF' : '#000'};
	color: ${(props) => (props.variant === 'outline' ? '#000' : '#FFF')};
	padding: 1em 1.5em;
	text-transform: uppercase;
	cursor: pointer;
	transition: 0.5s all ease;

	&:hover {
		background-color: ${(props) =>
			props.variant !== 'outline' ? '#FFF' : '#000'};
		color: ${(props) => (props.variant !== 'outline' ? '#000' : '#FFF')};
	}
`;
