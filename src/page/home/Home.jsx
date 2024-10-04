import React from 'react'
import './Home.css'

function Home() {
  return (
    <div className='home-container bg-dark rounded'>
      <div className='item-container bg-secondary rounded'>
        <h1><span className='badge bg-dark p-2 my-profile'>My Profile</span></h1>

        <div className='profile-item01 bg-secondary'>
          <div className='profile-img'>
            <img src="./public/img/profile.jpg" alt="" />
          </div>

          <div className='profile-info'>
            <h3 className='text-center mb-1'><span className='badge bg-dark text-danger'>Info</span></h3>

            <ul className='list-group'>
              <li className='list-group-item list-group-item-dark'>
                <span className='text-danger'>Name</span> : Kunakorn Khamcharoen
              </li>
              <li className='list-group-item list-group-item-light'>
                <span  className='text-danger'>Nickname</span> : Au
              </li>
              <li className='list-group-item list-group-item-dark'>
                <span  className='text-danger'>Age</span> : 22 years old
              </li>
              <li className='list-group-item list-group-item-light'>
                <span  className='text-danger'>ID</span> : 66075070
              </li>
              <li className='list-group-item list-group-item-dark'>
                <span  className='text-danger'>Email</span> : zeeyou.ou@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className='profile-item02 bg-secondary'>
            <div className='profile-skills'>
              <h3 className='text-center mb-1'><span className='badge bg-dark text-danger'>Skills & Expertise</span></h3>

              <ul className='list-group'>
                <li className='list-group-item list-group-item-dark'>HTML</li>
                <li className='list-group-item list-group-item-light'>CSS</li>
                <li className='list-group-item list-group-item-dark'>JavaScript</li>
                <li className='list-group-item list-group-item-light'>Python</li>
              </ul>
            </div>

            <div className='profile-hobbies'>
              <h3 className='text-center mb-1'><span className='badge bg-dark text-danger'>Hobbies & Interests</span></h3>
              <ul className='list-group'>
                <li className='list-group-item list-group-item-dark'>Coding & Side Projects</li>
                <li className='list-group-item list-group-item-light'>Gaming</li>
                <li className='list-group-item list-group-item-dark'>Traveling & Exploring</li>
                <li className='list-group-item list-group-item-light'>Music & Arts</li>
              </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
