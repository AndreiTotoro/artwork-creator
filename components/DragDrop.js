import React from 'react';
import { FileUploader } from 'react-drag-drop-files';

const fileTypes = ['JPG', 'PNG', 'GIF'];

function DragDrop({ layerData, setLayerData, currentLayer }) {
	const handleChange = (file) => {
		setLayerData(
			layerData.map((elem) => {
				if (elem.name == currentLayer) {
					elem.images = [...elem.images, file];
				}
				return elem;
			})
		);
	};
	return (
		<FileUploader handleChange={handleChange} name="file" types={fileTypes} />
	);
}

export default DragDrop;
