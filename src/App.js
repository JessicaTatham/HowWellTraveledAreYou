import React from 'react';
import CountryList from './CountryList';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			country: '',
			countriesVisited: [],
			countries: null,
			validation: ''
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
		this.checkCountry = this.checkCountry.bind(this);
	}

	componentDidMount() {
		fetch('https://restcountries.eu/rest/v2/all', {
			      method: "GET",
			    })
	    .then(results => {
	      results.json().then(json => {
	        this.setState({
	          countries: json
	        })
	      })   
	    })
	}

	onChange(event) {
		this.setState({
	      country: event.target.value,
	      validation: ''
	    }); 
	}

	onSubmit(event) {
		event.preventDefault();
		const legit = this.checkCountry(this.state.country);
		if (legit === true) {
			let updatedCountries = this.state.countriesVisited;
			updatedCountries.push(this.state.country);
			this.setState({
				countriesVisited: updatedCountries,
				country: ''
			});
		} else {
			this.setState({
				validation: legit
			});
		}
	}

	checkCountry(country) {

		if (country.length < 1) {
			return "Please enter in a country";
		}

		//check if country is a duplicate
		const duplicate = this.state.countriesVisited.indexOf(country);
		if (duplicate > -1) {
			return "This country has already been added to your list.";
		}

		//check if country name exists
		const legitCountry = this.state.countries.filter(function(c) {
			return c.name === country;
		})

		if (legitCountry.length === 0) {
			return "This country is not recognized as a valid world country.";
		}

		return true;
	}

	checkPercentageOfWorld() {
		if (this.state.countriesVisited.length > 0) {
			let worldPercent;
			worldPercent = this.state.countriesVisited.length / 195 * 100;
			worldPercent = worldPercent.toFixed(2);
			return worldPercent;
		} else {
			return '0';
		}
	}

	render() {

		const percentOfWorld = this.checkPercentageOfWorld();

		return (
			<div id='main'>

				{this.state.validation ? <div id='validationBlock'>{this.state.validation}</div> : ''}

				<h1> How Well Traveled Are You? </h1>

				<p> Enter the full name of countries you have visited</p>

				<form onSubmit={this.onSubmit} >
					<input type='text' placeholder='Country name' value={this.state.country} onChange={this.onChange} />
					<input type='submit' value='Add Country'/>
				</form>

				<p id='percentOfWorld'>You have traveled to {percentOfWorld} % of the world</p>

				<CountryList countriesVisited={this.state.countriesVisited} countries={this.state.countries} />

			</div>

		)
	}
}

export default App;