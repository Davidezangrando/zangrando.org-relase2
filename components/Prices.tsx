import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

type Service = {
  name: string;
  price: number;
};

type ProjectType = 'Nft' | 'Token creation' | 'Both' | '';

const PriceEstimator: React.FC = () => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProjectType>('');
  const [nftCount, setNftCount] = useState(0);
  const [selectedServices, setSelectedServices] = useState<Service[]>([]);
  const [tokenPurpose, setTokenPurpose] = useState<Service | null>(null);
  const [totalPrice, setTotalPrice] = useState(0);

  const projectTypes: ProjectType[] = ['Nft', 'Token creation', 'Both'];
  const nftServices: Service[] = [
    { name: 'Just listing on Opensea', price: 0 },
    { name: 'Create my own website where the user can mint their NFT\'s (minting dapp)', price: 500 },
    { name: 'Create a full website with landing page and minting integrations', price: 1500 },
  ];
  const tokenServices: Service[] = [
    { name: 'Website creation (allow users to buy your token, token creation)', price: 500 },
    { name: 'Landing page + Website with buying + token creation', price: 1500 },
    { name: 'Just token creation', price: 250 },
  ];
  const tokenPurposes: Service[] = [
    { name: 'Meme coin', price: 250 },
    { name: 'Finance purposes (Staking)', price: 1250 },
    { name: 'Art purposes', price: 1000 },
    { name: 'Real life purposes', price: 750 },
  ];
  const bothServices: Service[] = [
    { name: 'Just listing on Opensea', price: 500 },
    { name: 'Create my own website where the user can mint their NFT\'s (minting dapp) + token integration + listing on opensea', price: 2000 },
    { name: 'Create a full website with landing page and minting integrations + listing on opensea', price: 3000 },
  ];
  const additionalFunctions: Service[] = [
    { name: 'Staking of the token', price: 1000 },
    { name: 'Vote Programm', price: 1300 },
    { name: 'Loyalty Programm', price: 1700 },
    { name: 'Marketplace creation', price: 4000 },
  ];

  const calculatePrice = () => {
    let price = 0;
    if (projectType === 'Nft' || projectType === 'Both') {
      price += nftCount; // 1€ per NFT
      selectedServices.forEach(service => {
        price += service.price;
      });
    }
    if (projectType === 'Token creation' || projectType === 'Both') {
      if (tokenPurpose) {
        price += tokenPurpose.price;
      }
      selectedServices.forEach(service => {
        price += service.price;
      });
    }
    if (projectType === 'Both') {
      additionalFunctions.forEach(func => {
        if (selectedServices.includes(func)) {
          price += func.price;
        }
      });
    }
    setTotalPrice(price);
  };

  const nextStep = () => {
    calculatePrice();
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-medium leading-6 text-gray-900">The project is about:</h3>
            <RadioGroup value={projectType} onChange={setProjectType}>
              <div className="space-y-2">
                {projectTypes.map((type) => (
                  <RadioGroup.Option
                    key={type}
                    value={type}
                    className={({ active, checked }) =>
                      `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                      ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                    }
                  >
                    {({ checked }) => (
                      <>
                        <div className="flex w-full items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-sm">
                              <RadioGroup.Label
                                as="p"
                                className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                              >
                                {type}
                              </RadioGroup.Label>
                            </div>
                          </div>
                          {checked && (
                            <div className="shrink-0 text-white">
                              ✓
                            </div>
                          )}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
          </div>
        );
      case 2:
        if (projectType === 'Nft' || projectType === 'Both') {
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">How many NFTs have you got?</h3>
              <input
                type="number"
                value={nftCount}
                onChange={(e) => setNftCount(parseInt(e.target.value) || 0)}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
          );
        } else {
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Which service do you want to be included?</h3>
              <RadioGroup value={selectedServices} onChange={setSelectedServices}>
                <div className="space-y-2">
                  {tokenServices.map((service) => (
                    <RadioGroup.Option
                      key={service.name}
                      value={service}
                      className={({ active, checked }) =>
                        `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                        ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                                >
                                  {service.name} (€{service.price})
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                ✓
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          );
        }
      case 3:
        if (projectType === 'Nft' || projectType === 'Both') {
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Which service do you need for your collection?</h3>
              <RadioGroup value={selectedServices} onChange={setSelectedServices}>
                <div className="space-y-2">
                  {(projectType === 'Both' ? bothServices : nftServices).map((service) => (
                    <RadioGroup.Option
                      key={service.name}
                      value={service}
                      className={({ active, checked }) =>
                        `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                        ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                                >
                                  {service.name} (€{service.price})
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                ✓
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          );
        } else {
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">What is the purpose of the token?</h3>
              <RadioGroup value={tokenPurpose} onChange={setTokenPurpose}>
                <div className="space-y-2">
                  {tokenPurposes.map((purpose) => (
                    <RadioGroup.Option
                      key={purpose.name}
                      value={purpose}
                      className={({ active, checked }) =>
                        `${active ? 'ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300' : ''}
                        ${checked ? 'bg-sky-900 bg-opacity-75 text-white' : 'bg-white'}
                        relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${checked ? 'text-white' : 'text-gray-900'}`}
                                >
                                  {purpose.name} (€{purpose.price})
                                </RadioGroup.Label>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                ✓
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>
          );
        }
      case 4:
        if (projectType === 'Both') {
          return (
            <div className="space-y-4">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Which additional functions do you need?</h3>
              <div className="space-y-2">
                {additionalFunctions.map((func) => (
                  <div key={func.name} className="relative flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id={func.name}
                        name={func.name}
                        type="checkbox"
                        checked={selectedServices.includes(func)}
                        onChange={(e) => {
                          if (e.target.checked) {
                            setSelectedServices([...selectedServices, func]);
                          } else {
                            setSelectedServices(selectedServices.filter(s => s.name !== func.name));
                          }
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor={func.name} className="font-medium text-gray-700">
                        {func.name} (€{func.price})
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        }
      default:
        return (
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Estimated Price</h2>
            <p className="mt-4 text-5xl font-extrabold text-indigo-600">€{totalPrice}</p>
          </div>
        );
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
        <h2 className="text-3xl font-bold text-white">Price Estimator</h2>
      </div>
      <div className="p-6">
        {renderStep()}
        {step < (projectType === 'Both' ? 5 : 4) && (
          <button
            onClick={nextStep}
            className="mt-6 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default PriceEstimator;