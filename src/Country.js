import React from 'react';

class Country extends React.Component {

	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.getCountryFlag();
	}

	getCountryFlag() {
		const url = 'https://restcountries.eu/rest/v2/name/' + this.props.name + '?fullText=true';
		fetch(url, {
	      method: "GET",
	    })
	    .then(results => {
	      results.json().then(json => {
	        this.setState({
	          countryInfo: json
	        })
	        console.log(json);
	      })   
	    })

	}

	render() {

		return (
			<div>
				<li> {this.props.name} <img src={this.state.countryInfo.flag} /></li>
			</div>

		)
	}
}

export default Country;

