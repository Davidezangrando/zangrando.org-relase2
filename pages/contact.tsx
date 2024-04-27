import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Contact = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      window.location.href = 'mailto:davide.zangrando2@gmail.com?body=Sent from zangrando.org';
    }, 1000); 
  }, []);

  return null;
}

export default Contact;