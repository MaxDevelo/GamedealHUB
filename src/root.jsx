import React from 'react'
import {
  Outlet
} from "react-router-dom";

import '@/index.scss'

import Footer from '@/components/Footer/Footer'

function Root() {

  return (
    <>
      <Outlet />
      <Footer />
    </>
  )
}

export default Root;
