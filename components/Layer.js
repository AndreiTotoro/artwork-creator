'use client';
import React from 'react';
import { FiX } from 'react-icons/fi';

export default function Layer({ name, currentLayer, layerData, setLayerData }) {
	const handleClick = () => {
		setLayerData(
			layerData.filter((layer) => {
				if (layer.name == name) {
					return false;
				}
				return true;
			})
		);
	};

	return (
		<div
			className={`flex justify-between drop-shadow-lg items-center bg-void ${
				currentLayer == name ? 'border-purple-900 border-2 font-bold' : ''
			} rounded-lg p-4 w-10/12 my-2 pl-6 text-white`}
		>
			<p>{name}</p>
			<FiX onClick={() => handleClick()} />
		</div>
	);
}
