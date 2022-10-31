import React from 'react';

export default function Page({ params }) {
	return (
		<div className="h-screen bg-midnight text-white text-2xl p-4">
			{params.layer}
		</div>
	);
}
