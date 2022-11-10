import React from 'react';
import './Addservice.css';
import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';


const Addservice = () => {
    let x=Math.random()*100;
    let y=Math.round(x);
    let z=y.toString();
    const handleAddService=event=>{
        event.preventDefault();
        const form=event.target;
        const title=form.title.value;
        const price=form.price.value;
        const img=form.img.value;
        const description=form.description.value;
        const service={
            service_id:z,
            title:title,
            img:img,
            price:price,
            description:description
        }
        fetch(`http://localhost:5000/services`,{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
           })
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(data.acknowledged){
                toast.success('New Service has been added Successfully');
                event.target.reset();
            }
           })
    }
    return (
        <div>
            <Helmet>
                <title>Add New Service</title>
            </Helmet>
            <div className='singleServiceBanner mb-10' style={{ width: '100%' }}>
                <h2 className='text-center'>Add New Service</h2>
            </div>
            <div>
                <h2 className='text-center text-3xl mt-5 mb-5'>Add Service Form</h2>
                <div className='card'>
                    <form className='addr-form' onSubmit={handleAddService}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5 mb-5">
                            <input
                                type="text"
                                placeholder="Service Title"

                                className="input input-bordered input-accent w-full"
                                name="title"
                                required
                            />
                            <input
                                type="number"
                                placeholder="Service Fee"

                                className="input input-bordered input-accent w-full"
                                name="price"
                                required
                            />
                           <input
                                type="text"
                                placeholder="photoURL"

                                className="input input-bordered input-accent w-full"
                                name="img"
                                required
                            />
                        </div>
                        <div>
                            <textarea name="description" className="textarea h-24 input-accent w-full" required></textarea>
                        </div>
                        <div className="text-center">
                            <input className=" btn btn-warning btn-outline text-white-600 btn-sm mt-3 mb-3" type="submit" value="Submit"></input>

                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Addservice;