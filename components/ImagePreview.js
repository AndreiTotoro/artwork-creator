import React from 'react';
import Image from 'next/image';

export default function ImagePreview({ layerData, currentLayer }) {
	return (
		<div>
			<p className="text-2xl pt-5">Preview uploaded images: </p>

			{layerData.map((layer, index) => {
				if (layer.images.length != 0 && layer.name == currentLayer) {
					return (
						<div
							className="flex flex-wrap bg-void p-4 pb-6 rounded-md"
							key={index}
						>
							{layer.images.map((img, index2) => {
								return (
									<div
										key={index2}
										className="bg-midnight drop-shadow-lg mt-4 rounded-md mx-2 flex flex-col items-center content-center justify-center"
									>
										<Image
											src={img}
											alt={'nothing'}
											width={200}
											height={200}
											className="basis-1/6 m-4"
										/>
										<p>{index2 + 1}</p>
									</div>
								);
							})}
						</div>
					);
				}
			})}
		</div>
	);
}
