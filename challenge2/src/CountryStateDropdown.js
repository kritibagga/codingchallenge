import React, { useState } from "react";

const countries = [
	{ label: "Select a country", value: "" },
	{ label: "United States", value: "US" },
	{ label: "Canada", value: "CA" },
];

const states = {
	US: [
		{ label: "Select a state", value: "" },
		{ label: "New York", value: "NY" },
		{ label: "California", value: "CA" },
	],
	CA: [
		{ label: "Select a Province", value: "" },
		{ label: "Ontario", value: "ON" },
		{ label: "Quebec", value: "QC" },
	],
};

const CountryStateDropdown = ({ onCountryChange, onStateChange }) => {
	const [selectedCountry, setSelectedCountry] = useState("");
	const [selectedState, setSelectedState] = useState("");
	const [disabled, setDisabled] = useState(true);

	const handleCountryChange = (event) => {
		const countryValue = event.target.value;
		setDisabled(countryValue === ""); //Disabled state dropdown if no country is selected
		setSelectedCountry(countryValue);
		setSelectedState(""); // Reset state selection when country changes
		onCountryChange(countryValue);
	};

	const handleStateChange = (event) => {
		setSelectedState(event.target.value);
		onStateChange(event.target.value);
	};

	const countryOptions = countries.map((country) => (
		<option
			key={country.value}
			value={country.value}>
			{country.label}
		</option>
	));

	const stateOptions = states[selectedCountry]
		? states[selectedCountry].map((state) => (
				<option
					key={state.value}
					value={state.value}>
					{state.label}
				</option>
		  ))
		: null;

	return (
		<>
			<div className='payment-group'>
				<label
					className='payment-label'
					htmlFor='country'>
					Country
				</label>
				<select
					className='payment-select billing-input'
					id='country'
					required
					aria-required='true'
					onChange={handleCountryChange}
					value={selectedCountry}
					aria-label='Select your country'>
					{countryOptions}
				</select>
				<span className='select-arrow'>
					<i className='fa-solid fa-angle-down' />
				</span>
			</div>
			<div className='payment-group'>
				<label
					className='payment-label'
					htmlFor='state'>
					State/Province
				</label>
				<select
					className='payment-select billing-input'
					id='state'
					required
					aria-required='true'
					placeholder='Select a State'
					disabled={disabled}
					onChange={handleStateChange}
					value={selectedState}
					aria-label='Select your state or province'>
					<option
						value=''
						disabled>
						Select a state or province
					</option>
					{stateOptions}
				</select>
				<span className='select-arrow'>
					<i className='fa-solid fa-angle-down' />
				</span>
			</div>
		</>
	);
};

export default CountryStateDropdown;
