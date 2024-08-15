import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Interrogazioni = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('https://tally.so/r/nrVdpl');
    }, 1000); 
  }, []);

  return null;
}

export default Interrogazioni;