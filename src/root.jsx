import React from 'react'
import {
  Outlet
} from "react-router-dom";

import '@/index.scss'

import Footer from '@/components/Footer'

function Root() {

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;
