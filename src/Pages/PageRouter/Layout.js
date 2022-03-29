import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import { NavbarDefault } from '../../Assets/Components/Navbar/NavbarDefault'
// import * as ReactDOM from "react-dom";
import { Router } from '../../Routers/Router'

export const Layout = () => {
  return (
    <div>
      {/* <NavbarDefault/> */}
      <BrowserRouter>
          <Router/>
      </BrowserRouter>
    </div>
  )
}
