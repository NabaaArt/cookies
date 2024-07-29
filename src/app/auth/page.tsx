'use client'
import { useEffect, useState } from 'react';

const AuthenticatedPage = () => {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const fetchAuthStatus = async () => {
      const response = await fetch('/api/authCheck');
      const data = await response.json();
      setAuthenticated(data.authenticated);
    };

    fetchAuthStatus();
  }, []);

  if (!authenticated) {
    return <div>You are not authenticated.</div>;
  }

  return <div>You are authenticated!</div>;
};

export default AuthenticatedPage;
