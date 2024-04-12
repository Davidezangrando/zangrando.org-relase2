import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Interrogazioni = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('https://docs.google.com/spreadsheets/d/1xzS6eBzr-YVqs7VXY6yeZqwC-cj_f0DHaAg8txlT8eg/edit?usp=sharing');
    }, 3000); 
  }, []);

  return null;
}

export default Interrogazioni;