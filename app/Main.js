'use client';
import Image from 'next/image';
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
			<p className="text-2xl pt-5">Preview uploaded images: </p>
			<div className="flex flex-wrap bg-void p-4 rounded-md">
				{layerData.map((layer) => {
					if (layer.images.length != 0 && layer.name == currentLayer) {
						return layer.images.map((img, index) => {
							return (
								<div
									key={index}
									className="bg-slate-600 mt-4 rounded-md mx-4 flex flex-col items-center content-center justify-center"
								>
									<Image
										src={img}
										alt={'nothing'}
										width={200}
										height={200}
										className="basis-1/6 m-4"
									/>
									<p>{index + 1}</p>
								</div>
							);
						});
					}
				})}
			</div>
		</div>
	);
}
