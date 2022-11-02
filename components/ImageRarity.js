import React from 'react';

export default function ImageRarity({ name }) {
	return (
		<div className="flex items-center">
			<p className="p-2 bg-void rounded-md">100%</p>
			<p className="p-2 ml-4 bg-void text-xs rounded-md">{name}</p>
			<input
				type="range"
				min="0"
				max="100"
				className="h-2 ml-4 basis-4/12 bg-void rounded-lg appearance-none cursor-pointer mr-16"
			/>
		</div>
	);
}
