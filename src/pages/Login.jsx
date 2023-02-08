import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImSpinner9 } from "react-icons/im";

const Login = () => {
  const [username, setUsername] = useState("kminchelle");
  const [password, setPassword] = useState("0lelplR");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { data } = await axios.post("https://dummyjson.com/auth/login", {
      username,
      password,
    });
    console.log(data);
    setIsLoading(false);
    navigate("/");
    const userData = {
      name: data.firstName + " " + data.lastName,
      token: data.token,
    };
    localStorage.setItem("userData", JSON.stringify(userData));
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    await handleLogin();
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center ">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className={`btn btn-primary ${isLoading && "btn-disabled"}`}>
                  {isLoading ? (
                    <ImSpinner9 className=" animate-spin" />
                  ) : (
                    "Login"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
