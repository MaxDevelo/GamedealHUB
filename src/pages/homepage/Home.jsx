import React from 'react'

import Header from '@/components/Header/Header'
import Gallery from '@/components/Gallery/Gallery'

import './home.scss'

function Home() {

  return (
    <div className="homePage">
      <Header type="home" />
      <Gallery />
    </div>
  )
}

export default Home;
