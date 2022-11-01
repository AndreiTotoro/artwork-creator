'use client';
import React, { useState } from 'react';
import Layer from '../components/Layer';
import LayerCreator from '../components/LayerCreator';
import Preview from '../components/Preview';

export default function Layers({
	currentLayer,
	setCurrentLayer,
	layerData,
	setLayerData,
}) {
	return (
		<div className=" bg-void  pl-4 pt-5 h-full">
			<p className="text-white text-2xl pb-3">Layers</p>
			<div className="flex flex-col justify-between min-h-1/10">
				<div className="flex flex-col">
					{layerData.map((layer, index) => {
						return (
							<button
								key={index}
								onClick={() => {
									if (layer.name == currentLayer) {
										setCurrentLayer('');
									} else {
										setCurrentLayer(layer.name);
									}
								}}
							>
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
				<Preview />
			</div>
		</div>
	);
}
