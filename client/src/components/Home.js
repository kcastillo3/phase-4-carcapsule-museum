import React from 'react';


const Home = () => {
  return (
    <div className="home-container">
      <h2 className="welcome-message">Welcome to Car Capsule Museum!</h2>
      <img src="https://res.cloudinary.com/doyp4tk82/image/upload/v1710902107/Black_Elegant_Collage_Artist_Portfolio_Presentation_e3ldov.jpg" alt="Car Capsule Museum" />
      {/* <p className="first-paragraph">Vintage Car Collection</p> */}
      <p className="second-paragraph">This welcome message is inspired by our passion for preserving and sharing the legacy of iconic automobiles. We aim to provide visitors with an immersive experience that celebrates the artistry and craftsmanship of these timeless vehicles.</p>
    </div>
  );
}

export default Home;
