import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Themsp() {
    const[them,setThem]=useState({
        masp:"",
        tensp:"",
        hinh:"",
        gia:"",
        soluong:"",
    })
    const navigate=useNavigate()
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/create',them)
        .then(res => navigate('/sanpham'))
        .then(err => console.log(err));
    }
    function handleInput(event) {
        setThem(Prev => ({
            ...Prev,
            [event.target.name]: [event.target.value]
        }))
    }
  return (
    <div d-flex algin-items-center flex-column mt-3>
        <form className="w-50  "onSubmit={handleSubmit}>
  <div className="mb-3 mt-3 ">
    <label htmlFor="email" className="form-label">
      Mã sp
    </label>
    <input
      type="text"
      className="form-control"
      id="masp"
      placeholder="Enter email"
      name="masp"
      onChange={handleInput }
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      tên sp
    </label>
    <input
      type="tensp"
      className="form-control"
      id="tensp"
      placeholder="Enter password"
      name="tensp"
      onChange={handleInput }
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      số lượng
    </label>
    <input
      type="text"
      className="form-control"
      id="soluong"
      placeholder="Enter password"
      name="soluong"
      onChange={handleInput }
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      giá
    </label>
    <input
      type="text"
      className="form-control"
      id="gia"
      placeholder="Enter password"
      name="gia"
      onChange={handleInput }
    />
  </div>
  <div className="mb-3">
    <label htmlFor="pwd" className="form-label">
      Hình
    </label>
    <input
      type="text"
      className="form-control"
      id="hinh"
      placeholder="Enter password"
      name="hinh"
      onChange={handleInput }
    />
  </div>
 
  <button type="submit" className="btn btn-primary">
    Submit
  </button>
</form>

    </div>
  )
}

export default Themsp