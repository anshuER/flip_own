import React from "react";

const HomePage = () => {
  return (
    <div
      id="carouselExampleControls"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="https://itronics.in/wp-content/uploads/2021/09/iphone-13-pro-family-select.jpeg" className="d-block w-50" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://assets.sentinelassam.com/h-upload/2021/11/22/272400-cloth2.webp?w=400&dpr=2.6" className="d-block w-70" alt="..." />
        </div>
        <div className="carousel-item">
          <img src="https://images.news18.com/ibnlive/uploads/2021/05/1620542541_redmi_note_10_pro.jpg?impolicy=website&width=510&height=356" className="d-block w-70" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default HomePage;
