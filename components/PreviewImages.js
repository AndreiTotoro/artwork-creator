import React from 'react';
import Image from 'next/image';

export default function PreviewImages({ layerData, currentLayer }) {
	return (
		<div>
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
