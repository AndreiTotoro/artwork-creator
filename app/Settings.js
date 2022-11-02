import React from 'react';
import ImageRarity from '../components/ImageRarity';

export default function Settings({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
}) {
	return (
		<div className="h-full text-white pl-9 pt-5 gap-5 bg-gradient-to-b from-midnight to-void flex flex-col">
			<p className="font-bold text-3xl">Settings</p>
			<p className="text-2xl font-bold">Layer Name</p>
			<div className="bg-void rounded-lg drop-shadow-lg mr-16">
				<p className="p-2 px-4">{currentLayer}</p>
			</div>
			<p className="text-2xl py-2 font-bold">Layer Rarity</p>
			<div className="flex items-center">
				<p className="p-2 bg-void rounded-md">100%</p>
				<input
					type="range"
					min="0"
					max="100"
					className="h-2 ml-4 basis-6/12 bg-void rounded-lg appearance-none cursor-pointer mr-16"
				/>
			</div>
			<p className="text-2xl py-2 font-bold">Image Rarity</p>
			{layerData.map((elem) => {
				if (elem.name == currentLayer) {
					return elem.images.map((ele, index) => {
						return (
							<ImageRarity key={index} name={`${currentLayer} ${index + 1}`} />
						);
					});
				}
			})}
		</div>
	);
}
