import React, { useEffect, useState } from 'react';
import {useLoaderData,Link} from 'react-router-dom';
import Reviews from '../Reviews/Reviews';
import './Singleservice.css';
import { Helmet } from 'react-helmet';

const Singleservice = () => {
    const service=useLoaderData();
    const {title,_id,img,description,price}=service;
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return (
        <div>
            <Helmet>
                <title>Single Service</title>
            </Helmet>
            <div className='singleServiceBanner mb-10' style={{width:'100%'}}>
                <h2 className='text-center'>{title}</h2>
            </div>
            <div className='service-details mb-20'>
              <h2 className='text-4xl font-bold mb-5'>{title}</h2>
              <img src={img} className='mb-5' alt="" style={{width:'100%',height:'350px'}} ></img>
              <h3 className='mb-5 text-2xl'><strong>Price :</strong> ${price}</h3>
              <p style={{fontSize:'18px'}}><strong>Description: </strong>{description}</p>
            </div>
            <h2 className='text-3xl font-bold text-accent'>Reviews of Clients</h2>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                {
                    reviews.map(review=><Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
            <div className='mb-5 mt-5'>
                <Link to={`/service-addreview/${_id}`} className='btn btn-success btn-outline'>Add Review</Link>
            </div>
        </div>
    );
};

export default Singleservice;