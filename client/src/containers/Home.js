import React from 'react'
import Login from '../components/Login'
import HomeHeader from '../components/HomeHeader'

const Home = () => {

    return (
      <div>
        <div>
          <HomeHeader/>
        </div>
        <div className="ui section divider"></div>
        <div className="column">
          <Login/>
        </div>
      </div>
    )

}

export default Home
