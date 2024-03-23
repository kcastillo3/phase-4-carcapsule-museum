import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <h2 className="welcome-message">Showcase Saturday Coming Soon!</h2>
      <video autoPlay muted loop className="home-video">
        <source src="https://res.cloudinary.com/doyp4tk82/video/upload/v1711158634/Car_Capsulr_Museum_mu6ikk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="second-paragraph">Explore the rich history of automotive innovation at our Car Museum. Discover iconic classics and rare treasures that tell the story of motoring excellence. Immerse yourself in the beauty and craftsmanship of vintage cars. Come experience the passion and nostalgia of the automotive world with us.</p>
    </div>
  );
}

export default Home;
