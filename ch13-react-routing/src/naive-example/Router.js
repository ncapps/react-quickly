import { useState, useEffect } from 'react';

export default function Router({ mapping }) {
  const [hash, setHash] = useState(window.location.hash);

  const updateHash = () => setHash(window.location.hash);

  useEffect(() => {
    window.addEventListener('hashchange', updateHash, false);
    return () => window.removeEventListener('hashchange', updateHash, false);
  }, []);

  return (mapping[hash] ? mapping[hash] : mapping['*']);
}