'use client';

import Head from 'next/head';
import React, { useState } from 'react';
import Layers from './Layers';
import Main from './Main';
import Settings from './Settings';

export default function Home() {
	const [currentLayer, setCurrentLayer] = useState('');
	const [layerData, setLayerData] = useState([
		{ name: 'Head', images: [] },
		{ name: 'Torso', images: [] },
		{ name: 'Legs', images: [] },
	]);

	return (
		<div className="flex">
			<div className="basis-1/5">
				<Layers
					currentLayer={currentLayer}
					setCurrentLayer={setCurrentLayer}
					layerData={layerData}
					setLayerData={setLayerData}
				/>
			</div>
			<div className="basis-3/5">
				<Main currentLayer={currentLayer} />
			</div>
			<div className="basis-1/5">
				<Settings />
			</div>
		</div>
	);
}
