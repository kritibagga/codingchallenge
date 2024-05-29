// App.js
import "./App.css";
import React, { useState } from "react";
import { cardData } from "./CardData.js";
import Card from "./Card";
import PaymentForm from "./PaymentForm";

function App() {
	const [selectedCard, setSelectedCard] = useState(cardData[0]);


	return (
		<main className='container'>
			<header className='heading'>
				<h1>Get your rewards faster. Buy, Gift or Transfer Miles today!</h1>
			</header>
			<div
				className='card-container'
				aria-label='Select a card'>
				{cardData.map((data, index) => (
					<Card
						key={index}
						data={data}
						onClick={() => setSelectedCard(data)}
						className={selectedCard === data ? "card-selected" : ""}
						aria-pressed={selectedCard === data}
						role='button'
						tabIndex={index}
					/>
				))}
			</div>
			<section
				className='payment-section'
				aria-label='Payment form'>
				{selectedCard && <PaymentForm selectedCard={selectedCard} />}
			</section>
		</main>
	);
}

export default App;
