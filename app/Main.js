'use client';
import React from 'react';

export default function Main({ currentLayer }) {
	return (
		<div className="h-screen bg-midnight text-white text-2xl p-4">
			{currentLayer}
		</div>
	);
}
