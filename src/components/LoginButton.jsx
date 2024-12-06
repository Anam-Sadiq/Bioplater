'use client';

import { signIn } from "next-auth/react";

const LoginButton = ({ provider }) => {
  const handleLogin = () => {
    signIn(provider);
  };

  return (
    <button
      onClick={handleLogin}
      className="mb-2 px-4 py-2 bg-blue-500 text-white rounded-md"
    >
      Sign in with {provider.charAt(0).toUpperCase() + provider.slice(1)}
    </button>
  );
};

export default LoginButton;
