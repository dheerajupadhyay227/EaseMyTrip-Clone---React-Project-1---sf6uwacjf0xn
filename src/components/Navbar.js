import React, { useContext } from 'react'
import HotelIcon from '@mui/icons-material/Hotel';
import TrainIcon from '@mui/icons-material/Train';

import FlightIcon from '@mui/icons-material/Flight';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { DataAppContext } from './DataApp';

function Navbar() {

  const localContext = useContext(DataAppContext);
  const { appState, setAppState } = localContext;
  const { username, loginStatus } = appState;
  const navigate = useNavigate();


  const logoutFn = () => {

    setAppState({
      ...appState,
      loginStatus: false,
      username: ''
    })
    navigate('/');
  }

  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar__logo'>
          <Link to='/'>
            <img src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.youtube.com%2Fchannel%2FUC_4A-EKQFbA4UQ9lBcAe7_A&psig=AOvVaw0qsrZq4cK5GEPs_vn-8b_8&ust=1700825347469000&source=images&cd=vfe&ved=0CBIQjRxqFwoTCNCY_LWC2oIDFQAAAAAdAAAAABAY' alt='' />
          </Link>
        </div>
        <div className='navbar__icons'>
          <div className='navbar__icon active'>
            <Link to='/flight'><FlightIcon sx={{ width: 30, height: 30 }} /><span>Flights</span>
            </Link>
          </div>
          <div className='navbar__icon'>
            <Link to='/hotel' >
              <HotelIcon sx={{ width: 30, height: 30 }} /><span>Hotels</span>
            </Link>
          </div>
          <div className='navbar__icon'>
            <Link to='/train' ><TrainIcon sx={{ width: 30, height: 30 }} /><span>Trains</span>
            </Link>
          </div>
          {
            username && <div className='navbar__icon navbar__username'>
                <span>{username}</span>
            </div>
          }

          {
            loginStatus ?
              <div onClick={logoutFn} className='navbar__icon navbar__user'>
                <Link to='/' >
                  <span>Logout</span>
                </Link>
              </div>
              :
              <div className='navbar__icon navbar__user'>
                <Link to='/login' >
                  <span>Login</span>
                </Link>
              </div>
          }


        </div>
      </div>
    </div>
  )
}

export default Navbar