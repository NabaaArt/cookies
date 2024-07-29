'use client'
import Link from 'next/link'

const HomePage = () => {

  const handleLogin = () => {
    document.cookie = 'authToken=valid-token; path=/';
  };

  const handleNonAuth = () => {
    document.cookie = 'authToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  };

  return (
    <div>
      <p className='mb-10'>Welcome to the Authentication Demo</p>
      <button className="mx-10" onClick={handleLogin}> <Link href="/auth">Login (Authenticate)</Link></button>
      <button onClick={handleNonAuth}><Link href="/not"> Non-Authenticated Page</Link></button>
    </div>
  );
};

export default HomePage;
