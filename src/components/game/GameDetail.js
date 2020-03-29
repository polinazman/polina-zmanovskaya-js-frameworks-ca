import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../constants/api';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function GameDetail() {
	const [detail, setDetail] = useState([]);

	let { id } = useParams();

	const url = BASE_URL + "/" + id;

	useEffect(() => {
		fetch(url)
			.then(response => response.json())
			.then(json => setDetail(json))
			.catch(error => console.log(error));
	}, []);

	return (
		<Row>
			<Col md={12}>
				<Image src={detail.background_image} alt="Game preview" rounded/>
			</Col>
			<Col>
				<h1>{detail.name}</h1>
				<p>{detail.description_raw}</p>
				<a href={detail.website}>Website link</a>
			</Col>
		</Row>
	);
}

export default GameDetail;