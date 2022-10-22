import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardS = styled.div`
	width: 90%;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	background: ${(p) => p.color};
	cursor: pointer;

	@media (min-width: 464px) {
		width: var(--ods-cardSize);
		height: var(--ods-cardSize);
		max-width: 12rem;
		max-height: 12rem;
	}
`;

export const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 0.5rem;
`;

export const Numb = styled.h2`
	font-size: 2.5rem;
`;
export const Title = styled.h2`
	font-size: 1.5rem;

	@media (min-width: 450px) {
		font-size: 1.4rem;
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	height: 4.5rem;

	@media (min-width: 450px) {
		height: 5rem;
	}
`;
