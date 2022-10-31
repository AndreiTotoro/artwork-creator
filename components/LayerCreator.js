'use client';
import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';

export default function LayerCreator({ layerData, setLayerData }) {
	const [input, setInput] = useState('');

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = () => {
		setLayerData([...layerData, input]);
		setInput('');
	};

	return (
		<form
			onSubmit={() => handleSubmit()}
			className="bg-midnight text-white  rounded-lg p-2 w-10/12 my-2 pl-2 flex justify-between"
		>
			<input
				value={input}
				placeholder={'New Layer'}
				className="rounded-md py-1 pl-2 text-gray-500 w-11/12 bg-void"
				onChange={handleChange}
			/>
			<button type="submit">
				<FiCheckCircle color="gray" />
			</button>
		</form>
	);
}
