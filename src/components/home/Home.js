import React from 'react';
import Heading from '../layout/Heading';
import GameList from '../game/GameList';

function Home() {
	return (
		<>
			<Heading title="Video Games" />
			<GameList />
		</>
	);
}

export default Home;