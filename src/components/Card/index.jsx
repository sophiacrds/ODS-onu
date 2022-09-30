import React from "react";
import { faFaucet } from "@fortawesome/free-solid-svg-icons";
import * as S from "./style";

export default function Card() {
	return (
		<S.CardS>
			<S.Text>
				<S.Numb>1</S.Numb>
				<S.Title>SANEAMENTO BÁSICO</S.Title>
			</S.Text>
			<img src="" alt="" />
			<S.Icon icon={faFaucet} />
		</S.CardS>
	);
}
