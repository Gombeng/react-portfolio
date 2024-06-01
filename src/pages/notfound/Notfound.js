import styled from 'styled-components';
import { BgImageWorkD } from '../../assets';
import { tabTitle } from '../../utils/GeneralFunc';
import { color } from '../../utils/GlobalVar';
import { useNavigate } from 'react-router-dom';
import Button from './../../components/Button';

const Notfound = () => {
	tabTitle('Not Found | Syahrizal Ardana');
	const navigate = useNavigate();

	return (
		<Container>
			<div>
				<h3 className="mb-2">-- YOU'VE LOST SOMEWHERE --</h3>

				<Button
					as="a"
					color={color.bg}
					bgColor={color.textSec}
					title="Go Back"
					onClick={() => {
						navigate(-1);
						console.log('click');
					}}
				/>
			</div>
		</Container>
	);
};
export default Notfound;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	min-height: 100vh;
	background-image: url(${BgImageWorkD});
	background-repeat: no-repeat;
	background-position: fixed;
	background-size: cover;

	.btn {
		padding: 1rem 1.3rem;
		border-radius: 0.3rem;
		color: ${color.bg};
		background-color: ${color.textSec};

		&:hover {
			background-color: ${color.textOne};
		}
	}
`;
