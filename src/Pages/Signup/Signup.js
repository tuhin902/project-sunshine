import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <div className="hero my-20">
            <div className="hero-content ">
                <div className="card w-full shadow-2xl shadow-green-500 py-20">
                    <form className="card-body">
                        <h1 className="text-5xl text-center font-bold">Sign up</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to='/signin'>Sign in</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;