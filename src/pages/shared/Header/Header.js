import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo/tax.png';
import { AuthContext } from '../../../Authprovider/Authprovider';
import './Header.css';

const Header = () => {
       const {user,SignOut}=useContext(AuthContext);
       const logout=()=>{
        SignOut()
        .then(()=>{})
        .catch(error=>console.error(error))
    }
    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        {/* <li className='font-semibold'><Link to='/services'>Services</Link></li> */}
        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
            <>
            <li className='font-semibold'><Link to='/myreview'>My Review</Link></li>

            <li className='font-semibold'><Link to='/addservice'>Add Service</Link></li>

            <li className='font-semibold'><Link className='btn btn-outline btn-error' onClick={logout}>LogOut</Link></li>

            </>:
            <>
            <li className='font-semibold'><Link to='/login'>Login</Link></li>
            </>
        }


    </>
    return (
        <div className="navbar bg-base  h-20 mb-12">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">
                    <img src={logo} alt="" style={{width:'70%',color:'white'}}></img>
                </Link>

            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  p-0">
                    {menuItems}
                </ul>
            </div>
           
        </div>
    );
};

export default Header;