"use client";
import React, { useState } from "react";
import axios from "axios";
import {useRouter} from "next/navigation"

const Signin = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const router = useRouter()

  const onSignin = async (e : any) => {
    e.preventDefault();
    try {
      const request = await axios.post("/api/users/signin", user);
      console.log("signin successful", request.data);
      router.push("/auth/profile")
    } catch (error: any) {
      console.log("error occurred", error.message);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form
        action=""
        onSubmit={onSignin}
        className="flex flex-col justify-center items-center"
      >
        <label>email</label>
        <input
          type="email"
          placeholder="email"
          value={user.email}
          onChange={(e) => {
            setUser({ ...user, email: e.target.value });
          }}
          className="text-black"
        />

        <label>password</label>
        <input
          type="password"
          placeholder="password"
          value={user.password}
          onChange={(e) => {
            setUser({ ...user, password: e.target.value });
          }}
          className="text-black"
        />
        <button type="submit" className="bg-slate-200 text-black">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signin;
