import React from 'react';
import Country from './Country';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			country: '',
			countries: []
		};

		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onChange(event) {
		this.setState({
	      country: event.target.value
	    }); 
	}

	onSubmit(event) {
		event.preventDefault();
		const duplicate = this.state.countries.indexOf(this.state.country);
		if (duplicate > -1) {
			alert('This country has already been added to your list.');
		} else {
			let updatedCountries = this.state.countries;
			updatedCountries.push(this.state.country);
			this.setState({
				countries: updatedCountries,
				country: ''
			});
		}
	}

	render() {

		let percentOfWorld = '0';
		if (this.state.countries.length > 0) {
			percentOfWorld = this.state.countries.length / 195 * 100;
			percentOfWorld = percentOfWorld.toFixed(2);
		}

		return (
			<div>
				<h1> How Well Traveled Are You? </h1>

				<p> Enter in the countries you have visited</p>

				<form onSubmit={this.onSubmit} >
					<input type='text' placeholder='Country name' value={this.state.country} onChange={this.onChange} />
					<input type='submit' value='Add Country'/>
				</form>

				<p>You have traveled to {percentOfWorld} % of the world</p>

				{this.state.countries ? <ol>{this.state.countries.map(function(c) { return <Country key={c} name={c} /> })}</ol> : '' }

			</div>

		)
	}
}

export default App;