import React from 'react';

export default function Settings({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
}) {
	return (
		<div className="h-full text-white pl-9 pt-5 gap-5 bg-void flex flex-col">
			<p className="text-2xl">Layer Name</p>
			<div className="bg-midnight rounded-lg drop-shadow-lg mr-14">
				<p className="p-3">{currentLayer}</p>
			</div>
		</div>
	);
}
