import React, { useEffect, useState } from 'react';
import logo from '../../../assets/logo/tax.png';
import './Footer.css';
import {Link} from "react-router-dom";
import { FaFacebook ,FaYoutube,FaLinkedin,FaTwitterSquare} from "react-icons/fa";

const Footer = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/all-services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <div>
                <img src={logo} style={{ width: '70%'}} alt=""></img>
                </div>
                <div>
                    <p>Tax attorneys can work in law firms, government agencies,<br/> accounting firms, policy or advocacy centers,<br/> or in-house at corporations.</p>
                </div>
                <div className='grid gap-x-8 gap-y-4 grid-cols-4'>
                    <FaFacebook className='text-2xl facebook'></FaFacebook>
                    <FaYoutube className='text-2xl youtube'></FaYoutube>
                    <FaLinkedin className='text-2xl linkedin'></FaLinkedin>
                    <FaTwitterSquare className='text-2xl twitter'></FaTwitterSquare>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                {
                    services.map(service=><Link to={`/service/${service._id}`} key={service._id}>{service.title}</Link>)
                }
                
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <Link to='/'>Home</Link>
                <Link to='/services'>Services</Link>
                <Link to='/blog'>Blog</Link>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>

            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-base-200">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn btn-black absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;