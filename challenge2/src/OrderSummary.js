import React from "react";

function OrderSummary({ data }) {
	return (
		<section
			className='order-summary'
			aria-labelledby='order-summary-heading'>
			<div className='order-wrap'>
				<h2 id='order-summary-heading'>Order summary</h2>
				<hr aria-hidden='true' />

				<div
					className='summary-item'
					aria-labelledby='total-miles-label'>
					<p id='total-miles-label'>Total miles</p>
					<p
						className='summary-value'
						aria-describedby='total-miles-label'>
						{data.amount}
					</p>
				</div>

				<div
					className='summary-item'
					aria-labelledby='gst-hst-label'>
					<p id='gst-hst-label'>GST/HST</p>
					<p
						className='summary-value'
						aria-describedby='gst-hst-label'>
						${(data.amount / 100).toFixed(2)}
					</p>
				</div>

				<hr aria-hidden='true' />

				<div
					className='summary-item total-cost'
					aria-labelledby='total-cost-label'>
					<p id='total-cost-label'>Total cost</p>
					<p
						className='summary-value'
						aria-describedby='total-cost-label'>
						${(data.cost + data.amount / 100).toFixed(2)}
					</p>
				</div>
			</div>
		</section>
	);
}

export default OrderSummary;
