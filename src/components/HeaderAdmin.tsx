import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom';



type HeaderProps = {
   
}

const HeaderAdmin = (props: HeaderProps) => {

  return (

    <nav className="navbar navbar-inverse">
    <div className="container-fluid">
      <div className="navbar-header">
        <NavLink className="navbar-brand" to="/">Nguyen Van Hai</NavLink>
      </div>
      <ul className="nav navbar-nav">
        <li className="active"><NavLink to="/admin/product">List Products</NavLink></li>
        <li><NavLink to="/admin/category">List Categorys</NavLink></li>
        <li><NavLink to="#">Page 2</NavLink></li>
        <li><NavLink to="#">Page 3</NavLink></li>
      </ul>
    </div>
  </nav>
   
  )
}
export default HeaderAdmin