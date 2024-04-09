import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Interrogazioni = () => {
  const router = useRouter();

  useEffect(() => {
    router.push('https://docs.google.com/spreadsheets/d/1pE8maohL9LkmXJyY2Fa6ItQ1FoRA_i1l-JwsvfcOfNc/edit?usp=sharing');
  }, []);

  return null;
}

export default Interrogazioni;