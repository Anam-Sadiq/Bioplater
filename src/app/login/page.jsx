'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
// import { Google, GitHub } from 'lucide-react'; 

const Login = () => {
  return (
    <div className="min-h-screen bg-blue-950 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
        <h1 className="text-2xl font-semibold text-center text-gray-700 mb-6">Welcome Back</h1>
        <p className="text-center text-gray-700 mb-6">Please login to continue</p>

        <div className="space-y-4">
          <button 
            onClick={() => signIn('google')} 
            className="w-full flex items-center justify-start p-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none transition duration-200"
          >
            {/* <Google className="mr-2" /> */}
            <span className="  text-gray-500">Login with Google</span>
          </button>

          <button 
            onClick={() => signIn('github')} 
            className="w-full flex items-center justify-start p-3 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 focus:outline-none transition duration-200"
          >
            {/* <GitHub className="mr-2" /> */}
            <span className="text-gray-500">Login with GitHub</span>
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
