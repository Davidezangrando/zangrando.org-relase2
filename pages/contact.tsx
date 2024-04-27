import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'mailto:davide.zangrando2@gmail.com';
    }, 1000); 
  }, []);

  return null;
}

export default Contact;