import React, { useState } from 'react'
import Header from './Header'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {
  const[dangnhap,setDangnhap]=useState({
    taikhoan:'',
    matkhau:''
  })
  const navigate=useNavigate()
  axios.defaults.withCredentials = true;
  const handleSubmit = (event)=>{
    event.preventDefault();
    axios.post('http://localhost:8081/Login',dangnhap)
    .then(res => {
      if(res.data.Status ==="Success"){
        navigate('/')
      }
      else{
        alert("bạn đã sai toàn khoản hoặc mật khẩu")
      }
      
    })
}
function handleInput(event) {
  setDangnhap(Prev => ({
      ...Prev,
      [event.target.name]: [event.target.value]
  }))
}
  return (
    <div>
        <Header/>
      <div id="login">
         <h3 className="text-center text-white pt-5">Login form</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form"onSubmit={handleSubmit}  className="form" action="" method="post">
                  <h3 className="text-center text-info">Đăng nhập </h3>
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Tài Khoản
                    </label>
                    <br />
                    <input type="text" name="taikhoan"  onChange={handleInput } id="username" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Mật Khẩu
                    </label>
                    <br />
                    <input type="password"name="matkhau"  onChange={handleInput }id="password" className="form-control"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span>&nbsp;
                      <span>
                        <input id="remember-me" name="remember-me" type="checkbox" />
                      </span>
                    </label>
                    <br />
                    <input
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      defaultValue="submit"
                      
                    />
                  </div>
                  <div id="register-link" className="text-xs-right">
                      <Link to="/Register">
                      Register here
                      </Link>
                    {/* <a href="#" className="text-info">
                      Register here
                    </a> */}
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

export default Login
