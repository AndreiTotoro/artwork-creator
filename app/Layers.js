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
		<div className=" bg-void  pl-4 pt-5 h-screen">
			<p className="text-white text-2xl pb-3">Layers</p>
			<div className="h-9/10 flex flex-col justify-between">
				<div className="content-center flex flex-col">
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
