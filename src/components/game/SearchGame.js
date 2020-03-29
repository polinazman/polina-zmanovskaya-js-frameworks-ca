import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

export default function Search({ handleSearch }) {
	return (
		<InputGroup  className="search">
			<FormControl
				type="text"
				placeholder="Search by game..."
				onChange={event => handleSearch(event)}
			/>
		</InputGroup>
	);
}