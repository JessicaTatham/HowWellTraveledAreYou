import React from 'react';
import Country from './Country';

class CountryList extends React.Component {

	constructor(props) {
		super(props);

		this.getCountry = this.getCountry.bind(this);
		this.listCountries = this.listCountries.bind(this);
	}

	listCountries() {
		const countriesVisited = this.props.countriesVisited;
		const countries = this.props.countries;

		const listed = countriesVisited.map(function(v) {
			const info = countries.filter(function(c) {
				return c.name === v;
			})

			return <Country name={v} info={info} />;
		})
		return listed;
	}

	getCountry(country) {
		const info = this.props.countries.filter(function(c) {
			return c.name === country;
		})

		return <Country name={country} info={info} />;
	}

	render() {
		return (
			<div>
				<ol>
					{this.listCountries()}
				</ol>
			</div>

		)
	}
}

export default CountryList;

