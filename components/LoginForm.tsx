"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // ✅ correct import for App Router

const adminUsername = "admin";
const adminPassword = "password";

const LoginForm = () => {
  // hooks
  const router = useRouter();
  const [loginMessage, setLoginMessage] = useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const username = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;

    if (username === adminUsername && password === adminPassword) {
      router.push("/admin"); // ✅ programmatic navigation
    } else {
      setLoginMessage("Invalid Credentials");
    }
  };

  return (
    <form
      className="flex flex-col gap-4 mt-4 text-[14px] font-medium"
      onSubmit={handleLogin}
      autoComplete="off"
    >
      <input
        type="text"
        placeholder="Email"
        name="email"
        className="bg-gray-100 rounded-xl p-2 focus:outline-none w-full"
      />
      <input
        type="password"
        placeholder="Password"
        name="password"
        className="bg-gray-100 rounded-xl p-2 focus:outline-none w-full"
      />

      <button
        type="submit"
        className="cursor-pointer self-center p-4 text-[14px] font-bold tracking-wider rounded-full bg-[#28B498] text-white w-[200px]"
      >
        Sign In
      </button>

      <div className="self-center mt-4 text-red-400">
        <span>{loginMessage}</span>
      </div>
    </form>
  );
};

export default LoginForm;
