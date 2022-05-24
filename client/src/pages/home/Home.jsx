import React from 'react'
import Navbar from '../../component/navbar/Navbar'
import './home.scss'
import Featured from '../../component/featured/Featured'
import List from '../../component/list/List'
function Home() {
  return (
    <div className='home'>
      <Navbar/>
      <Featured/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
      <List/>
    </div>
  )
}

export default Home