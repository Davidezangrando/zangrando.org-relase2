import { useEffect } from 'react';
import { useRouter } from 'next/router';

const PowerNft = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('https://davidezangrando.notion.site/NFT-Power-Place-ab494c903c96461382a9b9a6d3ddeacd?pvs=74');
        }, 1000);
    }, []);

    return null;
}

export default PowerNft;