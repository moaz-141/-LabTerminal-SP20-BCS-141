import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

import Button from "../../components/Button";

// sample username: kminchelle
// sample password: 0lelplR

const Login = () => {
  const { register, handleSubmit } = useForm();
  const [token, setToken] = useState("");

  const onSubmit = (data) => {
    axios
      .post("https://dummyjson.com/auth/login", data)
      .then((res) => setToken("User Token: " + res.data.token))
      .catch((err) => {
        console.log("Error: ", err);
      });
  };

  return (
    <div className="h-screen bg-black flex items-center justify-center">
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black border border-solid border-yellow-500">
          <h5 className="text-center mb-8 text-3xl text-white">Login</h5>
          <form className="w-full space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="username"
                className="block text-lg font-medium text-gray-200"
              >
                Username
              </label>
              <input
                {...register("username")}
                id="username"
                type="username"
                placeholder="JohnDoe"
                required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-lg font-medium text-gray-200"
              >
                Password
              </label>
              <input
                {...register("password")}
                id="password"
                type="password"
                placeholder="********"
                required
                className="block appearance-none w-full px-3 py-2 border border-gray-300 roundedn-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus:border-gray-200"
              />
            </div>
            <div>
              <Button size="large">Login</Button>
            </div>
          </form>
        </div>
        <div className="w-full h-10 b mt-5 rounded-lg text-white">
          <h1>{token}</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
