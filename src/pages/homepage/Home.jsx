import React from 'react'

import Header from '@/components/Header/Header'
import Gallery from '@/components/Gallery/Gallery'

function Home() {

  return (
    <>
      <Header type="home" />
      <hr className="sperator-box" />
      <Gallery />
    </>
  )
}

export default Home;
