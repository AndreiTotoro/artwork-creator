import React from 'react';
import Layer from '../components/Layer';
import { layerdata } from '../data/layerdata';

export default function Layers() {
	return (
		<div className="h-screen bg-void flex flex-col pl-4 pt-5">
			<p className="text-white text-2xl">Layers</p>
			{layerdata.map((layer, id) => {
				return <Layer key={id} name={layer} />;
			})}
		</div>
	);
}
