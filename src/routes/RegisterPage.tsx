import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth, provider } from "../stores/firebase";
import { useNavigate } from "react-router-dom";
import LoginImage from "../assets/images/LoginPage.png";
import Google from "../assets/images/Google.png";
import "../App.css";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleGoogleSignup = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/Dashboard/AllProjects");
    } catch (error) {
      console.error("Google signup error:");
    }
  };

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/Dashboard/AllProjects");
    } catch (error: any) {
      alert("Registration failed: " + error.message);
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-cover bg-center flex justify-center"
        style={{ backgroundImage: `url(${LoginImage})` }}
      >
        <div className="bg-white border border-black flex text-5xl text-[#0e2447] font-medium rounded-sm w-1/2 h-1/6 mt-16 text-center items-center justify-center">
          Rocket CV
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-2/3 max-w-md">
          <button
            onClick={handleGoogleSignup}
            className="flex justify-center items-center w-full my-8 border-2 border-black rounded-sm "
          >
            <img src={Google} className="m-2 h-8" alt="Google" />
            Sign up with Google
          </button>

          <h4 className="text-center text-xl">OR</h4>

          <form onSubmit={handleEmailSignup} className="space-y-4 mt-4">
            <div>
              <label className="block text-black mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-black rounded-sm"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="block text-black mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border border-black rounded-sm"
                placeholder="Password"
              />
            </div>

            <div>
              <label className="block text-black mb-1">Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-2 border border-black rounded-sm"
                placeholder="Confirm Password"
              />
            </div>

            <div className="w-full flex justify-center items-center my-8">
              <button
                type="submit"
                className="bg-gradient-to-r from-[#1E293B] to-[#0e2447] w-full text-white px-6 py-2 rounded hover:brightness-110"
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="mt-4 text-md text-gray-500 flex justify-center items-center">
            Already have an account?{" "}
            <a href="/Login" className="text-blue-600 hover:underline ml-1">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
