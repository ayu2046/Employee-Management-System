import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-black/45 via-blue-950 to-purple-900">
      {/* Heading at the top of the page */}
      <h1 className=" text-3xl font-bold text-center mb-32 text-white shadow-lg p-4 bg-slate-700 rounded-lg">
        EMS - Employee Management System
      </h1>
      <div className="bg-white shadow-lg rounded-xl mb-28 p-10 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-700">
          Login to your account
        </h1>
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="outline-none text-black bg-gray-100 border-2 border-gray-300 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-500 w-full mb-4"
            type="email"
            placeholder="Enter your email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="outline-none text-black bg-gray-100 border-2 border-gray-300 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-500 w-full mb-4"
            type="password"
            placeholder="Enter password"
          />
          <button className="mt-4 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
