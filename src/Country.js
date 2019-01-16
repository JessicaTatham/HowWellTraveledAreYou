import React from 'react';

class Country extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div class='country'>
				<li> {this.props.name} <img src={this.props.info[0].flag} /></li>
			</div>

		)
	}
}

export default Country;

