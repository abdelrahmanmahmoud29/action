import React from 'react';
import {Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.jpg'

function Navbar() {

  function logout(){
    localStorage.clear()
  }
    return <>
    <nav className=" nav d-flex text-white">
  <div className="container-fluid d-flex">
  <div className="start d-flex w-50">
  <h2 className=' navHead p-2 pe-3'><img width={35} src={logo} alt="" /> Action</h2>
      <ul className='nav-ul d-flex w-50  justify-content-around m-0 p-0 align-items-center list-unstyled '>
        <a><NavLink to='/'>Home</NavLink> </a>
        <a><NavLink to={'movie'}>Movies</NavLink> </a>
        <a><NavLink to={'tvshow'}>TvShows</NavLink></a>
        <a><NavLink to={'people'}>People</NavLink></a>
      </ul>
   
  </div>
  
  <div className="nav-ul end d-flex ">
<ul className=' d-flex  m-2 w-25 justify-content-around  align-items-center list-unstyled'>
    <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
    <li><a href="#"><i class="fa-brands fa-imdb"></i></a></li>
</ul>
<ul className=' m-2 w-25  align-items-center list-unstyled'>
 <a className=' d-block'><NavLink to='Login'>Login</NavLink></a>
    <a className=' d-block'><NavLink to='register'>Register</NavLink></a>
     <a onClick={logout}  className=' d-block'><NavLink to='login'>Logout</NavLink></a>
    

</ul>
  </div>
  <li className=" nav-item dropdown d-flex w-50  d-flex justify-content-end align-items-center fs-3 ">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fa-solid fa-bars"></i>
          </a>
          <ul className="dropdown-menu ">
        <a className="dropdown-item " ><Link className=' text-black' to='/'>Home</Link> </a>
        <a className="dropdown-item "><Link className=' text-black' to={'movie'}>Movies</Link> </a>
        <a className="dropdown-item "><Link className=' text-black' to={'tvshow'}>TvShows</Link></a>
        <a className="dropdown-item "><Link className=' text-black' to={'people'}>People</Link></a>
        <hr />
        <ul className=' d-flex  m-2 w-25 justify-content-around  align-items-center list-unstyled'>
  <a><Link className=' text-black' to='Login'>Login</Link></a>
    <a><Link className=' text-black' to='register'>Register</Link></a>
    <a className="dropdown-item " onClick={logout}><Link className=' text-black' to='register'>Logout</Link></a>
    

</ul>
          </ul>

        </li>
  </div>
 
</nav>
    </>
}

export default Navbar;

