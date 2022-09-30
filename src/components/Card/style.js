import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const CardS = styled.div`
	width: 10rem;
	height: 10rem;
	padding: 1rem;

	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;

	border-radius: 20px;

	background: red;
`;

export const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

export const Numb = styled.h2`
	font-size: 2rem;
`;
export const Title = styled.h2`
	font-size: 1.2rem;
`;

export const Icon = styled(FontAwesomeIcon)`
	height: 5rem;
`;
