import React from 'react';

import { Avatar } from '../Avatar';
import { FlipCard } from '../FlipCard';
import { Profile } from '../Profile';

import './App.css';

class App extends React.Component {
	renderFrontCard = () => <Avatar />;

	renderBackCard = () => <Profile />;

	render() {
		return (
			<div className="App">
				<h1>Flip Card</h1>
				<h2>Mouse over the image to flip the card</h2>
				<FlipCard
					renderFront={this.renderFrontCard}
					renderBack={this.renderBackCard}
				/>
			</div>
		);
	}
}

export { App };
