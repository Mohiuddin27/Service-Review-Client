import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import { Link } from 'react-router-dom';
import Defendcase from '../Defendcase/Defendcase';
import Chooseus from '../Chooseus/Chooseus';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import {Helmet} from "react-helmet";

const Home = () => {
    const services = useLoaderData();
    const limit = 100;
    return (

        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>

            <Banner></Banner>
            <div>
                <div className="text-center">
                    <h1 className='text-3xl font-bold text-orange-600 py-3'>Our Services</h1>
                    <p className='py-3' style={{ fontSize: '18px' }}>All conversations with a tax attorney are protected under Attorney-Client Privilege and will never be shared with others. </p>
                </div>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 mb-5'>
                    {
                        services.map(service => <div key={service._id} className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
                            <figure>
                                <PhotoProvider>
                                    <PhotoView src={service.img}>
                                        <img src={service.img} className='h-48' alt="Shoes" />
                                    </PhotoView>
                                </PhotoProvider>

                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-1xl">{service.title}</h2>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-600' style={{ fontSize: '17px' }}><strong>Price</strong> : ${service.price}</h3>
                                </div>
                                <div className="card-actions justify-start">
                                    <h3 className='text-black-300' style={{ fontSize: '17px', height: '100px' }}><strong>Description</strong> :{service.description.substring(0, limit) + "..."}</h3>
                                </div>
                                <div className='flex justify-end'>
                                    <Link to={`/service/${service._id}`} className='btn btn-outline btn-secondary btn-sm'>
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
                <div className='text-center mt-10 mb-10'>
                    <Link to='/services' className='btn btn-outline btn-accent'>SEE ALL SERVICES</Link>
                </div>

            </div>
            <Chooseus></Chooseus>
            <Defendcase></Defendcase>
        </div>
    );
};

export default Home;