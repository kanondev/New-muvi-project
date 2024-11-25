import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../proviers/AuthProvider';

const Login = () => {
    const Navigate = useNavigate();
    const {signInUser, signInWithGoogle } = useContext(AuthContext);
    const handelLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        
        console.log(email, password);

        // sign in user
        signInUser(email, password)
        .then(result =>{
            console.log(result.user);
            e.target.reset();
            Navigate('/orders');
        })
        .catch(error =>{
            console.log('ERROR', error.message)
        })
    }

    const handelGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            Navigate('/')
        })
        .catch(error =>{
            console.log('ERROR', error.message);
        })
    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handelLogin} className="card-body">
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
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h3 className='m-3 p-3 font-semibold text-2xl text-center'>If you dont have account Please Create account fast.</h3>
                    <p className='text-center font-bold text-green-500 p-4'> <Link to="/signup"> SighUp Here</Link></p>
                    <p><button onClick={handelGoogleSignIn} className='btn btn-ghost'> Google</button></p>

                </div>
            </div>
        </div>
    );
};

export default Login;