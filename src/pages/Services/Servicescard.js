import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Servicescard = ({ service }) => {
    const { _id, title, img, price, description } = service;
    const limit = 100;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl p-2" style={{ width: '95%' }}>
            <figure>
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} className='h-48' alt="Shoes" />
                    </PhotoView>
                </PhotoProvider>

            </figure>
            <div className="card-body">
                <h2 className="card-title text-1xl">{title}</h2>
                <div className="card-actions justify-start">
                    <h3 className='text-black-600' style={{ fontSize: '17px' }}><strong>Price</strong> : ${price}</h3>
                </div>
                <div className="card-actions justify-start">
                    <h3 className='text-black-300' style={{ fontSize: '17px',height:'100px' }}><strong>Description</strong> :{description.substring(0, limit) + "..."}</h3>
                </div>
                <div className='flex justify-end'>
                    <Link to={`/service/${_id}`} className='btn btn-outline btn-secondary btn-sm'>
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Servicescard;