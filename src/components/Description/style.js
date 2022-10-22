import styled from "styled-components";

export const Box = styled.div`
	width: 100%;
	height: unset;
	padding: var(--padMob);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;

	@media (min-width: 750px) {
		width: 65%;
	}

	@media (min-width: 900px) {
		width: 75%;
	}
`;

export const Title = styled.h2`
	font-size: 1.4rem;
	text-align: center;

	@media (min-width: 1200px) {
		text-align: start;
	}

	@media (min-width: 1000px) {
		font-size: 1.8rem;
	}
`;

export const Text = styled.p`
	font-size: 1.2rem;
	text-align: justify;
`;
