'use client';

import React, { useState } from 'react';
import Layers from './layers';
import Main from './main';
import Settings from './Settings';

export default function Home() {
	const [currentLayer, setCurrentLayer] = useState('');

	return (
		<div className="flex">
			<div className="basis-1/5">
				<Layers currentLayer={currentLayer} setCurrentLayer={setCurrentLayer} />
			</div>
			<div className="basis-3/5">
				<Main />
			</div>
			<div className="basis-1/5">
				<Settings />
			</div>
		</div>
	);
}
