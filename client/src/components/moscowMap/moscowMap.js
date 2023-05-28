import { useState } from "react";

import "./moscowMap.css";

import moscowMap from "./moscowEnum.js";
import ZonesMap from "./zonesMap/zonesMap.js";

const MoscowMap = () => {
	const [selectedZone, setSelecedZone] = useState("DEFAUlT");

	return (
		<div className="map">
			<div className="textInfo">
				<h2>Выбранный округ г. Москвы</h2>
				<div className="description">
					<img
						src={moscowMap[selectedZone].logo}
						alt={moscowMap[selectedZone].logo}
					/>
					<p>{moscowMap[selectedZone].description}</p>
				</div>
				<p>{moscowMap[selectedZone].text}</p>
                <p>{moscowMap[selectedZone].textList}</p>
			</div>
			<div className="moscowMap">
				<ZonesMap
					setSelecedZone={setSelecedZone}
					selectedZone={selectedZone}
				/>
			</div>
		</div>
	);
};

export default MoscowMap;
