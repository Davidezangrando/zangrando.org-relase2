import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Inglese = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('https://davidezangrando.notion.site/Interrogazione-inglese-c7003598f4474d27a423f8c40df11a42?pvs=4');
        }, 1000);
    }, []);

    return null;
}

export default Inglese;