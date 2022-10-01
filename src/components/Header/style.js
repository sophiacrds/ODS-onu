import styled from "styled-components";
import sdgWheel from "../../assets/images/SDG-wheel.svg";

export const Card = styled.div`
	width: 100%;
	height: fit-content;
	padding: 2rem 20rem 2rem 2rem;

	background: #4f5e64;
	background-image: url(${sdgWheel});
	background-size: 30vmax;
	background-position: 110% -10%;
	background-repeat: no-repeat;

	@media (min-width: 1000px) {
		/* width: 100%;
		height: fit-content; */
	}
`;

export const Title = styled.h1`
	font-size: 3rem;
	color: white;
`;
