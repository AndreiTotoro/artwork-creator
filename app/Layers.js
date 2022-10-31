'use client';
import React, { useState } from 'react';
import Layer from '../components/Layer';
import LayerCreator from '../components/LayerCreator';

export default function Layers({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
}) {
	return (
		<div className="h-screen bg-void flex flex-col pl-4 pt-5 content-center">
			<p className="text-white text-2xl pb-3">Layers</p>
			{layerData.map((layer, index) => {
				return (
					<button key={index} onClick={() => setCurrentLayer(layer.name)}>
						<Layer
							currentLayer={currentLayer}
							name={layer.name}
							layerData={layerData}
							setLayerData={setLayerData}
						/>
					</button>
				);
			})}
			<LayerCreator layerData={layerData} setLayerData={setLayerData} />
		</div>
	);
}
