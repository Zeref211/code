import React, { Component, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from"./logo.png"
import Sreach from "./Sreach";
import axios from "axios";


function Header() {
  const navigate=useNavigate()
  const[auth,setAuth]=useState(false); 
  const[message,setMessage]=useState('');
  const[name,setName]=useState('');
  axios.defaults.withCredentials = true;
  useEffect(()=>{
    const checktoken = async() => {
      try {
        const res = await axios.get('http://localhost:8081/auth')
        if(res.data.Status ==="Success"){
          setAuth(true)
          setName(res.data.name)
        }else{
          setAuth(false)
          setMessage(res.data.Error)
        }
      } catch (error) {
        console.log(error);
      }
    }
    checktoken()
  },[])
  return (
    <div>
       {/* Navigation*/}
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">
             
            </a>
            <li className="nav-item">
                  <Link to="/" className="nav-link">
                  <img className="Logo" src={Logo} alt='.' />
                  </Link>
                </li>
                <Sreach/>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">
                    About
                  </a>
                </li>
                {/* <li className="nav-item">
            <a className="nav-link" href="/shop">
              Shop
            </a>
          </li> */}

                {/* <li className="nav-item">
                  <a className="nav-link" href="/contact">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/chitiet">
                    Chitiet
                  </a>
                </li> */}

                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              
                <li className="nav-item">
                  <Link to="/sanpham" className="nav-link">
                    Sản phẩm
                  </Link>
                </li>
              </ul>
              <form className="d-flex">
  <button className="btn btn-outline-dark" type="submit">
  <i class="bi-cart-fill me-1"></i>
    Cart
    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
  </button>
  {
  auth ?
    <div><p>{name}</p> </div>
  
  : 
  <>
  <button>Dang nhap</button>
  </>
  }

</form>

            </div>
          </div>
        </nav>
    </div>
  )
}


export default Header




