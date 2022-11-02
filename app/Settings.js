import React from 'react';

export default function Settings({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
}) {
	return (
		<div className="h-full text-white pl-9 pt-5 gap-5 bg-gradient-to-b from-midnight to-void flex flex-col">
			<p className="font-bold text-3xl">Settings</p>
			<p className="text-2xl">Layer Name</p>
			<div className="bg-void rounded-lg drop-shadow-lg mr-16">
				<p className="p-2 px-4">{currentLayer}</p>
			</div>
			<p className="text-2xl">Layer Rarity</p>
		</div>
	);
}
