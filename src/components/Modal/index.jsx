import * as S from "./style";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function ComplexModal(p) {
	return (
		<S.StyledModal {...p} isOpen={p.open} onBackgroundClick={p.toggle}>
			<S.TextContent>
				<S.List>
					{p.text.map((i, index) => (
						<li key={index}>{i}</li>
					))}
				</S.List>
				<S.Close
					icon={faXmark}
					onClick={() => {
						p.toggle();
					}}
				/>
			</S.TextContent>
			<S.CardContent color={p.color}>
				<S.Num>{p.num}</S.Num>
				<S.Title>{p.title}</S.Title>
				<S.Subtitle>{p.subtitle}</S.Subtitle>

				<S.Icon icon={p.img} />
			</S.CardContent>
		</S.StyledModal>
	);
}
