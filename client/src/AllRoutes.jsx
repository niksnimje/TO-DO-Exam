import React from 'react'
import { Route, Routes } from 'react-router'
import Home from './pages/Home'
import Editpage from './pages/Editpage'

export default function AllRoutes() {
  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/editpage" element={<Editpage />} />
        </Routes>
    </>
  )
}
