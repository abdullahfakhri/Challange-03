import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// import * as ReactDOM from "react-dom";
import { Router } from '../../Routers/Router'

export const Layout = () => {
  return (
    <div>
        <BrowserRouter>
            <Router/>
        </BrowserRouter>
    </div>
  )
}
