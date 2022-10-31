'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { FiX } from 'react-icons/fi';

export default function Layer({ name, layerData, setLayerData }) {
	const handleClick = () => {
		let index = layerData.indexOf(name);
		setLayerData(layerData.splice(index, 1));
	};

	const pathName = usePathname();
	console.log();
	if (`/${name}` == pathName) {
		return (
			<div className="flex justify-between bg-midnight text-white border-purple-900 border-2 rounded-lg p-3 w-10/12 my-2 pl-6">
				<Link className="" href={`/${name}`}>
					{name}
				</Link>
				<button onClick={() => handleClick()}>
					<FiX />
				</button>
			</div>
		);
	}
	return (
		<div className="flex justify-between bg-midnight text-white rounded-lg p-3 w-10/12 my-2 pl-6">
			<Link className="" href={`/${name}`}>
				{name}
			</Link>
			<button onClick={() => handleClick()}>
				<FiX />
			</button>
		</div>
	);
}
