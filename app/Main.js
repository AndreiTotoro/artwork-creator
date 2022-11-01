'use client';
import React from 'react';
import { FiX } from 'react-icons/fi';
import Upload from '../components/Upload';

export default function Main({ currentLayer, layerData, setLayerData }) {
	return (
		<div className="h-full bg-midnight pl-4 text-white flex flex-col pr-4 gap-7">
			<p className="text-2xl pt-5">You have selected: {currentLayer}</p>
			<div className="bg-green-400 rounded-md p-2 flex justify-between">
				<p className="text-green-700">
					Not sure where to start? Check out our intro video{' '}
					<a className="text-blue-500 underline" href="">
						here
					</a>
					.
				</p>
				<button>
					<FiX />
				</button>
			</div>
			<p>Upload your images below: </p>

			<Upload
				layerData={layerData}
				setLayerData={setLayerData}
				currentLayer={currentLayer}
			/>
		</div>
	);
}
