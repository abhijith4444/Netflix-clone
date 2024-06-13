import React from 'react'
import NavBar from '../../Components/NavBar/NavBar'
import Banner from '../../Components/Banner/Banner'
import TitleCards from '../../Components/TitleCards/TitleCards'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
      <Banner/>
      <TitleCards/>
      <div className="more-cards">
      <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
      <TitleCards title={"Only On Netflix"} category={"upcoming"}/>
      <TitleCards title={"Upcomming"} category={"popular"}/>
      <TitleCards title={"Top Pics For You"} category={"now_playing"}/>
      </div>
       <Footer/>
    </div>
  )
}

export default Home
