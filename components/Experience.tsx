import React from "react";

const Experience: React.FC<{}> = () => {
  return (
    <section id="experience">
      <h1 className="text-white font-semibold text-center text-6xl   pt-[35px]">
        EXPERIENCE
      </h1>
      <p className=" tracking-[0.5em] text-center text-transparent font-light pb-5  bg-clip-text bg-gradient-to-r from-purple-700 to-orange-500  text-1xl ">
        EXPLORE NOW
      </p>
      <div className=" container mx-auto 2xl ">
        <div className="flex  flex-row justify-between pt-5">
          <p className="text-gray-300 ">
            <span className="font-semibold">Freelancer /</span> Nft developer
          </p>
          <p className="text-gray-300">MAY 2021 - PRESENT, Zangrando Nft Consultant Srl</p>
        </div>
        <p className="text-gray-300 pt-5">
          
Currently, I specialize in blockchain development, particularly in the realm of smart contracts and NFTs. With a focus on Ethereum, I have extensive experience in crafting various types of smart contracts, including ERC-721, ERC-1155, ERC-725, and ERC-20 contracts. My expertise also extends to NFT development, where I excel in minting NFTs, creating marketplaces, and building DApps with airdrop functionalities using tools like Hardhat suite.
          <br />
          <br />
          In addition to blockchain development, I am continuously expanding my skill set. Currently, I am delving into Flutter development, exploring its capabilities for building cross-platform mobile applications. Moreover, I am honing my skills in security testing with Burp Suite and furthering my knowledge of C++ for broader software development applications.
        </p>
        <div className="flex-col flex sm:flex-row ">
          <div className="bg-transparent  mt-5 mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            ERC-721 
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Hardhat-suite
          </div>
          <div className="bg-transparent  mt-5  mr-2 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            ERC-1155 
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            Minting dapp
          </div>
          <div className="bg-transparent  mt-5 cursor-pointer  rounded-3xl  text-white py-2 px-5  border border-[#2E2E2E] w-max">
            ERC-20 
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
