"use client";

/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const profile = () => {
  const router = useRouter();
  const logout = async () => {
    const response = await axios.get("/api/users/logout");
    router.push("/auth/signin")
  };
  return (
    <div>
      profile
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default profile;
