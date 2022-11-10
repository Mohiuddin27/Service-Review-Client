import React from 'react';
import { Link } from 'react-router-dom';
import './Banner.css';
const Banner = () => {
    return (
        <div id="hero" className="hero hero-banner bg-base-200 rounded mb-20" style={{ height: '400px' }}>
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-4xl font-bold text-base-200">Hello there</h1>
                    <p className="py-6 text-2xl text-base-200">Welcome to The Tax Lawyer - Nazmun Naher Shanta. Tax Attorney Inc.
                        A full service Tax Law Firm.</p>
                    <button className="btn btn-primary"><Link to='/services'>Get Started</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Banner;