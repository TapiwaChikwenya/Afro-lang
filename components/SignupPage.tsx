import React from 'react';


import { useRouter } from 'next/router';

const SignupPage: React.FC = () => {
  const router = useRouter();

  const handleSignup = () => {
    // Add signup logic here
    console.log('Signup clicked');
    // After successful signup, redirect to dashboard or home page
    // router.push('/dashboard');
  };

  const handleLogin = () => {
    // Redirect to login page
    router.push('/login');
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <button onClick={handleSignup}>Sign Up</button>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default SignupPage;


