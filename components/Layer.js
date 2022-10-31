'use client';
import Link from 'next/link';
import React from 'react';

export default function Layer({ name }) {
	return (
		<Link
			className="bg-midnight text-white rounded-lg p-3 w-10/12 my-2 pl-6"
			href={`/${name}`}
		>
			{name}
		</Link>
	);
}
