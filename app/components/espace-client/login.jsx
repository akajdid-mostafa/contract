"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons from react-icons
import SignUpComponent from "./SignUpComponent"; // Import the SignUpComponent

const SignInComponent = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [isSignIn, setIsSignIn] = useState(true); // State to manage the view

  const handleToggleView = () => {
    setIsSignIn((prev) => !prev);
  };

  return (
    <div className="flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-gradient-to-br from-blue-200 via-purple-200 to-blue-300 shadow rounded-xl flex justify-center flex-1">
        <div className="flex-1 bg-green-100 text-center hidden lg:flex  rounded-xl relative">
          <div
            className="absolute inset-0  bg-[rgba(0,0,0,0.8)] before:content-[''] before:absolute before:inset-0  before:bg-[rgba(0,0,0,0.8)]"
            style={{
              backgroundImage:
                "url('https://firebasestorage.googleapis.com/v0/b/oceangallery-d06ae.appspot.com/o/Site%20ocean%2Fcontrat%2Flogin.jpg?alt=media&token=6ffd1357-0328-4ed5-8633-9e761e9af4a7')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
        <div className="lg:w-2/2 xl:w-5/12 p-6 sm:p-12">
          <div>
            <Image
              src="/assets/logo/ocean1.svg"
              alt="Sign In"
              width={200}
              height={100}
              className="mx-auto"
            />
          </div>
          {isSignIn ? ( // Conditional rendering based on isSignIn state
            <div className="mt-12 flex flex-col items-center">
              <div className="w-full flex-1 mt-4">
                <div className="mx-auto max-w-xs">
                  <input
                    className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="relative w-full mt-5">
                    <input
                      className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-300 placeholder-gray-400 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                      type={showPassword ? "text" : "password"}
                      placeholder="Mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    {password.length > 0 && (
                      <span
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                      </span>
                    )}
                  </div>
                  <button className="mt-5 tracking-wide font-bold bg-gradient-to-r from-blue-600 to-red-600 text-white w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    <span className="ml-3">Se connecter</span>
                  </button>
                  <p className="mt-6 text-xs text-gray-700 text-center">
                    Si vous n&apos;avez pas de compte:
                    <button
                      onClick={handleToggleView} // Toggle view on button click
                      className="border-b ml-2 font-bold border-dotted"
                    >
                      Créer un compte
                    </button>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <SignUpComponent onBackToSignIn={handleToggleView} /> // Render SignUpComponent
          )}
        </div>
      </div>
    </div>
  );
};

export default SignInComponent;