'use client';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function Layer({ name }) {
	const pathName = usePathname();
	console.log();
	if (`/${name}` == pathName) {
		return (
			<Link
				className="bg-midnight text-white border-purple-900 border-2 rounded-lg p-3 w-10/12 my-2 pl-6"
				href={`/${name}`}
			>
				{name}
			</Link>
		);
	}
	return (
		<Link
			className="bg-midnight text-white rounded-lg p-3 w-10/12 my-2 pl-6"
			href={`/${name}`}
		>
			{name}
		</Link>
	);
}
