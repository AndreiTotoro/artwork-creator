'use client';
import React from 'react';

export default function Main({ currentLayer }) {
	return (
		<div className="h-screen bg-midnight pl-4 text-white flex flex-col gap-7">
			<p className="text-2xl pt-5">You have selected: {currentLayer}</p>
			<p>Upload your images below: </p>
		</div>
	);
}
