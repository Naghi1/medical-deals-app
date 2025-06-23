import React, { useState } from "react";
import "./App.css";

function App() {
  const [offers] = useState([
    {
      id: 1,
      clinic: "Al-Rahma Polyclinic",
      title: "Child Checkup + CBC + Vitamin D",
      price: "12 KD",
      expiry: "July 31, 2025",
      redeemLink: "https://wa.me/965XXXXXXXXX",
    },
    {
      id: 2,
      clinic: "Noor Dental Center",
      title: "Teeth Cleaning + Consultation",
      price: "18 KD",
      expiry: "July 15, 2025",
      redeemLink: "https://wa.me/965XXXXXXXXX",
    },
  ]);

  return (
    <div className="App">
      <h1>🎉 Medical Deals in Kuwait</h1>
      {offers.map((offer) => (
        <div key={offer.id} className="card">
          <h2>{offer.clinic}</h2>
          <p>{offer.title}</p>
          <p>Valid until: {offer.expiry}</p>
          <p className="price">{offer.price}</p>
          <a href={offer.redeemLink} target="_blank" rel="noopener noreferrer">
            <button>Redeem via WhatsApp</button>
          </a>
        </div>
      ))}
    </div>
  );
}

export default App;