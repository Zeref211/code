import React, { Component, useEffect, useState } from 'react';
import Header from './Header';
import axios from 'axios';
import Boxsanpham from './Boxsanpham';




function Sanpham() {
  const [sanpham, setSanpham]= useState([]);
  useEffect(() => {
    const getallsanpham = async() => {
      const res = await axios.get('http://localhost:8081/sanpham')
      .then(res=> setSanpham(res.data))
      .catch(err=> console.log(err))
    }
    getallsanpham();
  },[sanpham])
  console.log(sanpham);
  return (
    <div>   
      <Header/>
       {/* Header*/}
       
  <header className="bg-dark py-5">
    <div className="container px-4 px-lg-5 my-5">
      <div className="text-center text-white">
        <h1 className="display-4 fw-bolder">Shop in style</h1>
        <p className="lead fw-normal text-white-50 mb-0">
          With this shop hompeage template
        </p>
      </div>
    </div>
  </header>
  {/* Section*/}
  {sanpham.map((data,i ) => {
    return(
  <section className="py-5">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center sanpham ">
        
          <Boxsanpham id={data.masp} gia={data.gia} hinh={data.hinh} tensp={data.tensp}/>
        
      </div>
    </div>
  </section>
    )
      })}
    </div>
  )
}

export default Sanpham