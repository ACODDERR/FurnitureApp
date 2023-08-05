import React from 'react'
import "./CSS/home.css"
import Gallery from './Gallery'

function Home() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src={`http://localhost:9000/user/products/h3.jpg`}  class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={`http://localhost:9000/user/products/h2.jpg`}  class="d-block w-100" alt="..."/>
      </div>
      <div class="carousel-item">
        <img src={`http://localhost:9000/user/products/h1.jpg`} class="d-block w-100" alt="..."/>
      </div>
      <Gallery></Gallery>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
  </div>
  )
}

export default Home

