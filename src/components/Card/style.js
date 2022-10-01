import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardS = styled.div`
	width: 10rem;
	height: 10rem;
	padding: 1rem;
	margin: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	border-radius: 10px;

	background: ${(p) => (p.color ? p.color : "blue")};
	cursor: pointer;
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
	font-size: 1rem;
`;

export const Icon = styled(FontAwesomeIcon)`
	height: 5rem;
`;
