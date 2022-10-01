import React from "react";
import { TextContent } from "../../texts";

import Card from "../Card";

export default function HomeOnu() {
	return (
		<main>
			{/* <h1>Lorem ipsum dolor sit amet.</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus maiores repellendus
				excepturi esse at itaque consequuntur laborum qui odit similique ullam, ipsa eaque soluta
				molestias officia, consequatur sunt voluptatem vel!
			</p> */}

			<div>
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
			</div>
		</main>
	);
}
