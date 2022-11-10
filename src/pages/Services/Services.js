import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Servicescard from './Servicescard';
import './Services.css';
import { Helmet } from 'react-helmet';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/all-services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])
    return (
        <div>
              <Helmet>
                <title>Services</title>
            </Helmet>
            <div id="service-hero"className="hero service-hero relative">
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center  rounded">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl text-base-200 font-bold">Our Services</h1>
                       
                    </div>
                </div>
            </div>
           
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                {
                    services.map(service => <Servicescard key={service._id} service={service}></Servicescard>)
                }
            </div>


        </div>
    );
};

export default Services;