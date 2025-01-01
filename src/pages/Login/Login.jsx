import React, { useContext } from "react";
import Lottie from "lottie-react";
import loginLottie from "../../assets/lottie/login.json";
import { Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import SocialLogin from "../shared/SocialLogin";

const Login = () => {
  const { signInUser } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);


    signInUser(email,password)
    .then(result =>{
      console.log('Log in' , result.user)
    })
    .catch(error =>{
      console.log(error)
    })
  };

  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96">
            <Lottie animationData={loginLottie} />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h1 className="ml-8 mt-4 text-4xl font-bold text-center">
              Login now!
            </h1>
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#1c402e] text-white">Login</button>
              </div>
              <div>
                <p>
                  Don't have any account?{" "}
                  <Link
                    to="/register"
                    className="text-red-600 underline font-bold">
                    {" "}Register{" "}
                  </Link>
                  Now!
                </p>
              </div>
            </form>
            <div className="my-4 mx-6"><SocialLogin /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
