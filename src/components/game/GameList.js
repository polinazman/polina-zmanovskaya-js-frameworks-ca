import React, { useState, useEffect } from 'react';
import { BASE_URL } from '../../constants/api';
import GameItem from './GameItem';
import SearchGame from './SearchGame';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function GameList() {
	const [games, setGames] = useState([]);
	const [filteredGames, setFilteredGames] = useState([]);

	useEffect(() => {
		fetch(BASE_URL)
			.then(response => response.json())
			.then(json => {
				setGames(json.results);
				setFilteredGames(json.results);
			})
			.catch(error => console.log(error));
	}, []);

	const filterGames = function(e) {
		const searchValue = e.target.value.toLowerCase();

		const filteredArray = games.filter(function(g) {
			const lowerCaseName = g.name.toLowerCase();

			if (lowerCaseName.includes(searchValue)) {
				return true;
			}

			return false;
		});

		setFilteredGames(filteredArray);
	};

	return (
		<>
			<SearchGame handleSearch={filterGames} />
			<Row>
				{filteredGames.map(game => {
					const { id, name, background_image, rating, released } = game;

					return (
						<Col sm={6} md={3} key={id}>
							<GameItem id={id} name={name} background_image={background_image} rating={rating} released={released} />
						</Col>
					)
				})}
			</Row>
		</>
	);
}

export default GameList;