import React, { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Contact from "../Components/Contact";
import Chitiet from "../Components/Chitiet";

import PageHome from "../Components/PageHome";
import Sanpham from "../Components/Sanpham";
import Home from "../Components/Home";
import Shop from "../Components/Shop";
import Login from "../Components/Login";
import Register from "../Components/Register";
import Themsp from "../Components/Themsp";

class Dieuhuong extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/chitiet" element={<Chitiet />}></Route>
          <Route path="/sanpham" element={<Sanpham />}></Route>
          <Route path="/sanpham/:id" element={<Shop />}></Route>
          <Route path="/Login" element={<Login/>}></Route>
          <Route path="/Register" element={<Register/>}></Route>
          <Route path="/create" element={<Themsp/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Dieuhuong;
