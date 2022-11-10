import React from 'react';

const Chooseus = () => {
    return (
        <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-5'>
                <div>
                    <h2 className='font-bold text-2xl mt-3 mb-3'>Why Choose Us</h2>
                    <h4 className='text-3xl mb-3'>We Provide High Quality<br></br> Consulting Services To Our Clients</h4>
                    <p style={{ fontSize: '17px', }}>This tax law firm will use its best efforts, full staff and every known applicable law to protect your rights and interests against the IRS, FTB and EDD. It is our mission to attain the most favorable outcome possible for each and every client.</p>
                    <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-3 mt-5'>
                        <div className="card w-43 shadow-xl bg-success text-base-100">
                            <div className="card-body text-center">
                                <h2 className='font-bold' style={{fontSize:'25px'}}>20+</h2>
                                <p style={{fontSize:'20px'}}>Years Experience</p>
                               
                            </div>
                        </div>
                        <div className="card w-43 shadow-xl bg-success text-base-100">
                            <div className="card-body text-center">
                                <h2 className='font-bold' style={{fontSize:'25px'}}>20k+</h2>
                                <p style={{fontSize:'20px'}}>Happy Clients</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <img src="https://blog.ipleaders.in/wp-content/uploads/2019/12/what-do-tax-lawyers-do.jpeg" style={{ backgroundColor: 'black', borderRadius: '20px' }} alt=""></img>
                </div>
            </div>
        </div>
    );
};

export default Chooseus;