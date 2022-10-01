import React from "react";
import HomeOnu from "./components/Home";
import { GlobalStyle } from "./global/GlobalStyle";
import { ModalProvider } from "styled-react-modal";
import { SpecialModalBackground } from "./components/Modal/style";

export default function App() {
	return (
		<>
			<GlobalStyle />
			<ModalProvider backgroundComponent={SpecialModalBackground}>
				<HomeOnu />
			</ModalProvider>
		</>
	);
}
