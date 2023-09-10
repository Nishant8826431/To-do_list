import React from 'react'
import Routes_cont from './Routes'
// import Routes from './Routes'

const Header = () => {
  return (

    <>
    <div className='right-container'>
        <nav  className='header'>
            <div className='flex-box'>
            <img src="../icons/search.svg"/>
            <input type="text" placeholder='Global Search'/>
            </div>
            <div  className='notify'>
                <img src="../icons/notification.svg"/>
            </div>
        </nav>

        {/* <h1>wugrwgswhgfiuwergu</h1> */}
    </div>

    
    
    </>
    
  )
}

export default Header;