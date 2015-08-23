'use strict';
import React from 'react';

export default class Picture extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			words: ['Funny', 'Stupid', 'Greate'],
			index: 0
		};

		this.addIndex = this.addIndex.bind(this);
	}

	addIndex () {
		this.setState({
			index: (this.state.index += 1) % 3
		});
	}

	render () {
		const pics = this.state.words;
		return (
			<h2 className="reactWord"
			 onClick={this.addIndex}
			>
				{pics[this.state.index]}
			</h2>
		);
	}
}