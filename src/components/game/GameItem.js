import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function GameItem({ id, name, background_image, rating, released }) {
	return (
		<Card>
			<Card.Img variant="top" src={background_image} alt="Game preview"/>
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<Card.Text>Rating: {rating}</Card.Text>
				<Card.Text>Release date: {released}</Card.Text>
				<Link to={"game/" + id}>
					<Button variant="info" block>Details</Button>
				</Link>
			</Card.Body>
		</Card>
	);
}

export default GameItem;