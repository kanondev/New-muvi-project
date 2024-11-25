import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../proviers/AuthProvider';

const SignUp = () => {
    const navigate = useNavigate();
    const {createUser} = useContext(AuthContext);
    const handelSignUp = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;


        console.log(name, email, password);


        // create user
       createUser(email, password)
       .then(result =>{
        console.log(result.user);
        e.target.reset();
        navigate('/');
       })
       .catch(error =>{
        console.log('ERROR', error.message)
       })
        
        
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="">
                <div className="text-center mb-8">
                    <h1 className="text-5xl font-bold">Register your Account</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelSignUp} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">SignUp</button>
                        </div>
                    </form>
                    <h3 className='m-3 p-3 font-semibold text-2xl text-center'>If you Allready account Please Login.</h3>
                    <p className='text-center font-bold text-green-500 p-4'> <Link to="/login"> Login Here</Link></p>

                </div>
            </div>
        </div>
    );
};

export default SignUp;