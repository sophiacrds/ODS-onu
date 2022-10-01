import styled from "styled-components";

export const Main = styled.main`
	width: 100%;
	height: 100%;
	padding: 4rem;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
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
	flex-direction: row;
	justify-content: center;
	align-items: center;
	gap: 1.5rem;
`;

export const CardsBox = styled.div`
	width: 60%;
	/* padding: 2rem 8rem; */

	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
`;
