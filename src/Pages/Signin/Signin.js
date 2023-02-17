import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className="hero  w-full my-20">
            <div className="hero-content">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl shadow-cyan-500 py-20">
                    <form className="card-body">
                        <h1 className="text-5xl text-center font-bold">Login!</h1>
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
                            <label className="label">
                                <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Signin" />
                        </div>
                    </form>
                    <p className='text-center'>New to genius car <Link className='text-orange-600 font-bold' to='/signup'>Sign up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Signin;