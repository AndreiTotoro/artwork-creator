import React from 'react';

export default function Upload({ layerData, setLayerData, currentLayer }) {
	const handleFileSubmit = (event) => {
		setLayerData(
			layerData.map((elem) => {
				if (elem.name == currentLayer) {
					elem.images = [...elem.images, event.target.files[0]];
				}
				return elem;
			})
		);
	};

	return (
		<div className="self-center p-5 px-24 bg-void rounded-lg flex justify-center items-center flex-col">
			<p className="font-bold">Click below to upload files!</p>
			<p className="italic">
				image/png, image/gif, video/mp4, video/webm, Max size: 10MB
			</p>
			<input
				className="ml-16 pt-7"
				type="file"
				multiple={true}
				name="images"
				onChange={handleFileSubmit}
			></input>
		</div>
	);
}
