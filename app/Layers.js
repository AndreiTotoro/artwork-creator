'use client';
import React, { useState } from 'react';
import Layer from '../components/Layer';
import LayerCreator from '../components/LayerCreator';

export default function Layers() {
	const [layerData, setLayerData] = useState(['Head', 'Body', 'Legs']);
	return (
		<div className="h-screen bg-void flex flex-col pl-4 pt-5 content-center">
			<p className="text-white text-2xl pb-3">Layers</p>
			{layerData.map((layer, id) => {
				return <Layer key={id} name={layer} />;
			})}
			<LayerCreator />
		</div>
	);
}
