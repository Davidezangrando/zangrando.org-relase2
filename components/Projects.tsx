import Image from "next/image";
import Link from "next/link";
import React from "react";

const Projects: React.FC<{}> = () => {
  return (
    <section id="projects">
      <h1 className="text-white font-semibold text-center text-6xl pt-[35px]">
        PROJECTS 
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <p className=" tracking-[0.3em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-600 to-orange-500  text-1xl ">
        just the most important
      </p>
      <div className=" container mx-auto 2xl  ">
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://opensea.io/collection/revelom-rorschach-inkblots-official"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/revelom.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Revelom Rosarch</p>
                <p className="text-gray-500 text-[10px]">
                  Nft project in collaboration with the Paris Art Gallery.
                </p>
              </div>
              
            </div>
          </Link>
          <Link
            href="https://opensea.io/collection/gigachadyc"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/gigachad.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">GigaChad Yatch-Club</p>
                <p className="text-gray-500 text-[10px]">
                Nft project in collaboration with the Paris Art Gallery.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://opensea.io/collection/master-sushi"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/sushi-master.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                Masters sushi
                </p>
                <p className="text-gray-500 text-[10px]">
                Nft project in collaboration with the Paris Art Gallery.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://noobles.xyz/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/noodles.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">Noobles</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>

        </div>
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://www.bscscan.com/address/0x221bc1a148d8b70463a75b4062fc1a4fbcc0b477"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            
            <div className="flex-row flex mb-5">
              <Image
                src="/bears.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Nft Bears</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
              
            </div>
          </Link>
          <Link
            href="https://rhinosguardians.world/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/rhinos.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Rhinos guardians</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://owlpixez.site/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/pixel.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                Owlpixez Nft
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://polygonscan.com/address/0xcf5a7a31be8a3824d019fff996b7b4ec0992a27a"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/onchain.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">On Chain Alien Drop</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          
        </div>

        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://polygonscan.com/address/0xae7734202b3119011c601f39618ee353d185c4a4"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            
            <div className="flex-row flex mb-5">
              <Image
                src="/pixelwall.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              
              <div className="p-3">
                <p className="text-white font-semibold text-xl">PixelWall</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
              
            </div>
          </Link>
          <Link
            href="https://polygonscan.com/address/0x386b08c1233612312cd8f9be2701441f58501622#code"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/marble.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Marble Cards</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://polygonscan.com/address/0x8dfdc61c7c7551d0deec950a2822eb59cddb8f59"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/scoobi.jpeg"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                Scoobe Doge
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://polygonscan.com/address/0x045b4b4165ada5a6cf85b2871dfeea12bf1f01d2"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/wallstreet.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">WallstreetDogeClub</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>

        </div>
        <div className="flex-col flex md:flex-row  mt-7">
          <Link
            href="https://www.bscscan.com/address/0x032e87f4a94c8baa4d729f5d12964c649d05dfd6"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            
            <div className="flex-row flex mb-5">
              <Image
                src="/FirstProject.png"
                height={150}
                width={150}
                alt="WebHR Project"
              />
              
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Trace Network Lab</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
              
            </div>
          </Link>
          <Link
            href="https://polygonscan.com/address/0x574b15adc8ec67d010f15f9eede3440962c6f48a"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/cyber.png"
                height={150}
                width={150}
                alt="HireSide"
              />
              <div className="p-3">
                <p className="text-white font-semibold text-xl">Cyber X City</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex-col flex md:flex-row ">
          <Link
            href="https://cryptoswaggers.xyz/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/ThirdProject.png"
                height={150}
                width={150}
                alt="VergeSystems"
              />
              <div className=" p-3 ">
                <p className="text-white font-semibold text-xl">
                CryptoSwagger
                </p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          <Link
            href="https://cryptosquaries.com/nft/"
            rel="noopener noreferrer"
            target="_blank"
            className="z-[1]"
          >
            <div className="flex-row flex mb-5">
              <Image
                src="/FourProject.png"
                height={150}
                width={150}
                alt="Payoasis"
              />
              <div className="p-3 ">
                <p className="text-white font-semibold text-xl">CryptoSquaries</p>
                <p className="text-gray-500 text-[10px]">
                  Developed the Verge Systems website using React.js.
                </p>
              </div>
            </div>
          </Link>
          
        </div>

        
      </div>

    </section>
  );
};

export default Projects;
