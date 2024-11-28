import Background from "./assets/about.png";

import React from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import About from "./components/About.jsx";
import Experiences from "./components/Experiences.jsx";

function App() {
	return (
		<>
			<Parallax pages={2} className="overflow-hidden">
				{/* Background Layer */}
				<ParallaxLayer
					speed={0.5}
					factor={2.5}
					style={{
						backgroundImage: `url(${Background})`,
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
				/>
				{/* Foreground Content Layer */}
				<ParallaxLayer speed={1}>
					<About />
				</ParallaxLayer>
				<ParallaxLayer offset={1} speed={0.1}>
					<Experiences />
				</ParallaxLayer>
			</Parallax>
		</>
	);
}

export default App;
