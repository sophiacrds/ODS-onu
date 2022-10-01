import styled from "styled-components";
import sdgWheel from "../../assets/images/SDG-wheel.svg";

export const Card = styled.div`
	width: 100%;
	height: fit-content;
	padding: var(--padMob);

	background: #4f5e64;

	@media (min-width: 750px) {
		padding: 2rem 15rem 2rem 2rem;
		background-image: url(${sdgWheel});
		background-repeat: no-repeat;
		background-size: 30vmax;
		background-position: 115% -10%;
	}

	@media (min-width: 1000px) {
		padding-right: 20rem;
	}
`;

export const Title = styled.h1`
	font-size: 1.8rem;
	color: white;

	@media (min-width: 600px) {
		font-size: 2rem;
	}

	@media (min-width: 1000px) {
		font-size: 2.8rem;
	}
`;
