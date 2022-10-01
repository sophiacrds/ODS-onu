import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	height: 100%;
	padding: var(--padMob);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 750px) {
		padding: 2rem;
	}

	@media (min-width: 1000px) {
		padding: 4rem;
	}
`;

export const HeadBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

export const Content = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
	margin-top: 1rem;

	@media (min-width: 750px) {
		flex-direction: row;
	}
`;

export const CardsBox = styled.div`
	width: 100%;
	max-width: calc(12rem * 4);
	padding: var(--padMob);

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	gap: 1rem;

	@media (min-width: 750px) {
		width: 100%;
	}
	@media (min-width: 1000px) {
		gap: 1rem;
	}
`;
