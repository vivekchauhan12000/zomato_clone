import React from 'react'

export default function Carosral(props) {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={props.img1} className="d-block w-100" alt="..." style={{height: '300px', width: '990px',margin:'50px'}}/>
    </div>
    <div className="carousel-item">
      <img src={props.img2} className="d-block w-100" alt="..." style={{height: '300px', width: '990px',margin:'50px'}}/>
    </div>
   
  </div>
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </a>
</div>

    </div>
  )
}
