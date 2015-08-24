'use strict';

import React from 'react';
import $ from 'jquery';

export default class BorderBox extends React.Component {
	getWidth() {
		return $(window).width();
	}
	constructor(props) {
		super(props);

		this.state = {
			width: this.getWidth()
		};
	}
	componentDidMount() {
		$(window).on('resize', this.handleResize.bind(this));
	}
	handleResize() {
		var new_width = this.getWidth();
		this.setState({width: new_width});
	}
	render() {
		return (
			<div className="widthReact">
				{this.state.width}
			</div>
			);
	}
}
