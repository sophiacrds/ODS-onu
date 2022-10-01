import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import Modal, { BaseModalBackground } from "styled-react-modal";

export const StyledModal = Modal.styled`
  width: 90vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  @media (min-width: 600px){
    width: 70vw;
   height: 80vh;
  }

  @media (min-width: 768px) {
		flex-direction: column-reverse;
	}
  @media (min-width: 1000px) {
		flex-direction: row;
	}
`;

export const SpecialModalBackground = styled(BaseModalBackground)`
	width: 100vw;
	height: 100vh;
	background-color: #00000050;
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 0.2rem;
	overflow: scroll;

	li {
		font-size: 1.5rem;
		list-style: none;
	}
`;

export const Close = styled(FontAwesomeIcon)`
	height: 3rem;
	margin: 2.5rem 0 0;
	cursor: pointer;
`;

export const TextContent = styled.div`
	width: 100%;
	height: 100%;
	padding: var(--padMob);

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media (min-width: 600px) {
		padding: 1.5rem;
	}

	@media (min-width: 768px) {
		height: 100%;
	}
	@media (min-width: 1000px) {
		width: 50%;
	}
`;

export const CardContent = styled.div`
	display: none;
	width: 100%;
	height: 20%;
	padding: 2rem;

	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
	text-align: end;

	background: ${(p) => p.color};

	@media (min-width: 768px) {
		display: flex;
	}
	@media (min-width: 1000px) {
		width: 50%;
		height: 100%;
	}
`;

export const Num = styled.h2`
	display: none;
	font-size: 4rem;

	@media (min-width: 1000px) {
		display: initial;
		font-size: 4.5rem;
	}
`;

export const Title = styled.h3`
	font-size: 2.5rem;

	@media (min-width: 1000px) {
		font-size: 3rem;
	}
`;

export const Subtitle = styled.p`
	font-size: 1.2rem;

	@media (min-width: 1000px) {
		font-size: 1.4rem;
	}
`;

export const Icon = styled(FontAwesomeIcon)`
	display: none;
	height: 12vmax;
	margin: 3rem 0 0;

	@media (min-width: 1000px) {
		display: initial;
		margin: 4rem 0 0;
	}
`;
