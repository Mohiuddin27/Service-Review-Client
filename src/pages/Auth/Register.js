import React, { useContext,useState } from 'react';
import {Link} from 'react-router-dom';
import { AuthContext } from '../../Authprovider/Authprovider';
import toast from 'react-hot-toast';
import {Helmet} from 'react-helmet';

const Register = () => {
    const [error, setError] = useState('');
    const {createUser,updateUserProfile,setLoading}=useContext(AuthContext);
    const handleRegister=(event)=>{
        event.preventDefault();
        const form=event.target;
        const name=form.name.value;
        const photoURL=form.photoURL.value;
        const email=form.email.value;
        const password=form.password.value;
        console.log(name,photoURL,email,password);
        createUser(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');
            handleUserUpdateProfile(name, photoURL);
            toast.success('Registration Successfull!');
            setLoading(false);
            window.location.href = '/';

            // navigate('/');
            
        })
        .catch(error => {
            setError(error.message)
          
        })
        .finally(() => {
            setLoading(false);
        })

    const handleUserUpdateProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL,
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }

    }
    return (
        <div>
            <Helmet>
                <title>Registration</title>
            </Helmet>
            <div className='grid lg:grid-cols-2 sm:grid-cols-1'>
                <div>
                    <img src="https://static.vecteezy.com/system/resources/previews/005/879/539/original/cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-illustration-with-isolated-people-scene-free-vector.jpg" style={{height:'500px'}} alt=""></img>
                </div>
                <div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mb-10">
                        <div className="card-body">
                            <h2 className='text-center font-bold text-2xl'>Registration Form!</h2>
                            <form onSubmit={handleRegister}>
                            <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">PhotoURL</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="email" className="input input-bordered" required/>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input input-bordered" required/>
                                   
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Register</button>
                                </div>
                                <div className="form-control mt-6">
                                    <h6 className='text-error'>{error}</h6>
                                </div>
                            </form>
                           
                            <h6 className='text-center mt-5 mb-5'>Already have an account? <Link to='/login' className='text-accent font-bold'>login</Link></h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;