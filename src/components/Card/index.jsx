import React, { useState } from "react";
import * as S from "./style";
import ComplexModal from "../Modal";

export default function Card(p) {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<S.CardS
				{...p}
				onClick={() => {
					toggle();
				}}
			>
				<S.Text>
					<S.Numb>{p.num}</S.Numb>
					<S.Title>{p.title}</S.Title>
				</S.Text>
				<S.Icon icon={p.img} alt={`${p.title} image`} />
			</S.CardS>
			<ComplexModal
				num={p.num}
				title={p.title}
				subtitle={p.subtitle}
				img={p.img}
				text={p.text}
				color={p.color}
				toggle={toggle}
				open={isOpen}
			/>
		</>
	);
}
