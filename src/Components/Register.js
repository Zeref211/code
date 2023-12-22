import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {
    const[dangky,setDangky]= useState({
        tenkh:'',
        email:'',
        matkhau:'',
        sdt:'',
        diachi:'',
        taikhoan:''
    })
    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post('http://localhost:8081/Register',dangky)
        .then(res => console.log(res))
        .then(err => console.log(err));
    }
    function handleInput(event) {
      setDangky(Prev => ({
          ...Prev,
          [event.target.name]: [event.target.value]
      }))
  }
  return (
    <div>
         <div id="register">
         <h3 className="text-center text-white pt-5">register form</h3>
        <div className="container">
          <div
            id="register-row"
            className="row justify-content-center align-items-center"
          >
            <div id="register-column" className="col-md-6">
              <div id="register-box" className="col-md-12">
                <form onSubmit={handleSubmit} id="register-form" className="form" action="" method="post">
                  <h3 className="text-center text-info">Đăng ký</h3>
                  <div className="form-group">
                    <label htmlFor="name" className="text-info">
                      Họ và tên
                    </label>
                    <br />
                    <input
                      type="text" name="tenkh" onChange={handleInput } id="name" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="text-info">
                      Email
                    </label>
                    <br />
                    <input
                      type="email" name="email"onChange={handleInput} id="email"className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone" className="text-info">
                      Số điện thoại
                    </label>
                    <br />
                    <input  type="text"  name="sdt"onChange={handleInput}  id="sdt" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="address" className="text-info">
                      Địa chỉ
                    </label>
                    <br />
                    <input type="text" name="diachi" onChange={handleInput}  id="address" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Tài Khoản
                    </label>
                    <br />
                    <input  type="text" name="taikhoan"onChange={handleInput}  id="username" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Mật Khẩu
                    </label>
                    <br />
                    <input type="password" name="matkhau"onChange={handleInput}  id="password"  className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    {/* <label htmlFor="remember-me" className="text-info">
                      <span>đăng ký</span>&nbsp;
                      <span>
                        <input id="remember-me" name="remember-me" type="checkbox" />
                      </span>
                    </label> */}
                    <br />
                    <button>Đăng ký</button>
                      
                    
                  </div>
                  
                  
                  <div id="Login-link" className="text-xs-right">
                      <Link to="/Login">
                      Login
                      </Link>
                  
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register