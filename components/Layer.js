'use client';
import React from 'react';
import { FiX } from 'react-icons/fi';

export default function Layer({ name, layerData, setLayerData, currentLayer }) {
	console.log(currentLayer, name);
	if (currentLayer == name) {
		return (
			<div className="flex justify-between bg-midnight text-white border-purple-900 border-2 rounded-lg p-3 w-10/12 my-2 pl-6">
				<p>{name}</p>
				<button onClick={() => handleClick()}>
					<FiX />
				</button>
			</div>
		);
	}
	return (
		<div className="flex justify-between bg-midnight text-white rounded-lg p-3 w-10/12 my-2 pl-6">
			<p>{name}</p>
			<button onClick={() => handleClick()}>
				<FiX />
			</button>
		</div>
	);
}
