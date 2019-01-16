import React from 'react';

class Country extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<li> {this.props.name} </li>

			</div>

		)
	}
}

export default Country;

