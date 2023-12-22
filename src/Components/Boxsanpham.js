import React from 'react'
import {Link} from 'react-router-dom'
function Boxsanpham(props) {
  return (
    <div className="col-4 mb-5 osp" >
    <div className="card h-100">
      {/* Sale badge*/}
      <div
        className="badge bg-dark text-white position-absolute"
        style={{ top: "0.5rem", right: "0.5rem" }}
      >
        Sale
      </div>
      {/* Product image*/}
      <Link to={props.id}>
       <img
        className="card-img-top"
        src={props.hinh}
        alt="..."
      /></Link>
     
      {/* Product details*/}
      <div className="card-body p-4">
        <div className="text-center">
          {/* Product name*/}
          <h5 className="fw-bolder">{props.tensp}</h5>
          {/* Product reviews*/}
          <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill" />
            <div className="bi-star-fill" />
            <div className="bi-star-fill" />
            <div className="bi-star-fill" />
            <div className="bi-star-fill" />
          </div>
          {/* Product price*/}
          <span className="text-muted text-decoration-line-through">
            {props.gia}
          </span>
        </div>
      </div>
      {/* Product actions*/}
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a className="btn btn-outline-dark mt-auto" href="#">
            Add to cart
          </a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Boxsanpham