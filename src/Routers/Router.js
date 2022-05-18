import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Car } from '../Pages/Car/Car'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { Login } from '../Pages/Login/Login'
import { Login2 } from '../Pages/Login/Login2'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/login" element={<Login2/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
      <Route path="/Car" element={<Car/>} />
    </Routes>
  )
}
