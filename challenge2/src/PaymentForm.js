import React, { useRef } from "react";
import OrderSummary from "./OrderSummary";
import CountryStateDropdown from "./CountryStateDropdown";

function PaymentForm({ selectedCard }) {
	const formRef = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(formRef.current);
		for (const pair of formData) {
			console.log(`${pair[0]}: ${pair[1]}`);
		}
	};
	const handleCountryChange = (selectedCountry) => {
		console.log("Selected country:", selectedCountry);
	};

	const handleStateChange = (selectedState) => {
		console.log("Selected state:", selectedState);
	};

	return (
		<div className='payment-form'>
			<form
				onSubmit={handleSubmit}
				ref={formRef}
				aria-labelledby='paymentTitle'>
				<h2 className='payment-title'>Payment details</h2>
				<p className='payment-desc'>
					We accept all major credit cards. Please ensure that you enter your
					details exactly as they appear on your credit card statement. All
					fields are required unless is indicated.
				</p>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='cardholder-name'>
						Cardholder name
					</label>
					<input
						className='payment-input'
						type='text'
						id='cardholder-name'
						name='cardholder'
						required
						aria-required='true'
					/>
				</div>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='card-number'>
						Card number
					</label>
					<input
						className='payment-input'
						type='text'
						id='card-number'
						required
						aria-required='true'
						maxLength='16'
						pattern='\d{16}'
						name='cardnumber'
					/>
				</div>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='expiration-date'>
						Expiration date
					</label>

					<div className='new-box'>
						<input
							className='payment-input'
							type='text'
							id='expiration-date'
							required
							aria-required='true'
							placeholder='MMYY'
							maxLength='4'
							name='expirationdate'
							pattern='\d{4}'
						/>
					</div>
				</div>

				<div className='payment-group'>
					<label
						className='payment-label'
						htmlFor='cvv'>
						CVV
					</label>

					<div className='new-box'>
						<input
							className='payment-input'
							type='password'
							id='cvv'
							required
							aria-required='true'
							maxLength='3'
							name='password'
							pattern='\d{3}'
						/>
                        <span className="lock-icon"><i className="fa-solid fa-lock"/></span>
					</div>
				</div>
				<div>
					<h2 className="billing-heading">Billing address</h2>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='street-address'>
							Street Address
						</label>
						<input
							className='payment-input billing-input'
							type='text'
							id='street-address'
							required
							aria-required='true'
							name='streetaddress'
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='apt-number'>
							Apt, Suite, Unit Number (Optional)
						</label>
						<input
							className='payment-input billing-input'
							type='text'
							id='apt-number'
							name='aptnumber'
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='city'>
							City / Town
						</label>
						<input
							className='payment-input billing-input'
							type='text'
							id='city'
							name='city'
							required
							aria-required='true'
						/>
					</div>
					<CountryStateDropdown
						onCountryChange={handleCountryChange}
						onStateChange={handleStateChange}
					/>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='zip'>
							Zip / Postal code
						</label>
						<input
							className='payment-input billing-input'
							type='text'
							id='zip'
							name='zip'
							required
							aria-required='true'
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='phone-number'>
							Phone number
						</label>
						<input
							className='payment-input billing-input'
							type='tel'
							id='phone-number'
							name='phonenumber'
							required
							aria-required='true'
						/>
					</div>

					<div className='payment-group'>
						<label
							className='payment-label'
							htmlFor='email'>
							Email receipt to
						</label>
						<input
							className='payment-input billing-input'
							type='email'
							id='email'
							name='email'
							required
							aria-required='true'
						/>
					</div>

					<div>
						<label className='payment-terms-label'>
							<input
								className='payment-checkbox'
								type='checkbox'
								id='terms-conditions'
								name='termsandcondition'
								required
								aria-required='true'
							/>
							<label
								className='payment-label'
								htmlFor='terms-conditions'>
								I agree to the{" "}
								<a href='https://www.google.com/'>terms & conditions</a>
							</label>
							<span className='checkmark'></span>
						</label>

						<button
							className='payment-btn'
							type='submit'>
							Buy Miles
						</button>
					</div>
				</div>
			</form>

			<div className='order-summary-wrap'>
				<OrderSummary data={selectedCard} />
			</div>
		</div>
	);
}

export default PaymentForm;
