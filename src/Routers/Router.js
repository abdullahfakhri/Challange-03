import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Dashboard } from '../Pages/Dashboard/Dashboard'
import { Login } from '../Pages/Login/Login'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/Dashboard" element={<Dashboard/>} />
    </Routes>
  )
}
