import React from "react";
import { TextContent } from "../../texts";
import Card from "../Card";
import Description from "../Description";
import Header from "../Header";
import * as S from "./style";

export default function HomeOnu() {
	return (
		<S.Main>
			<Header />
			<S.Content>
				<Description />
				<S.CardsBox>
					{TextContent.map((i) => (
						<Card
							key={i.num}
							num={i.num}
							title={i.title}
							subtitle={i.subtitle}
							text={i.text}
							color={i.color}
							img={i.img}
						/>
					))}
				</S.CardsBox>
			</S.Content>
		</S.Main>
	);
}
