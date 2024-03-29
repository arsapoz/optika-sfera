import React from "react";
import { useState } from "react";
import Image from 'next/image';
import Stat from "./components/Stat";
import galery1 from '../public/assets/galery1.jpg';
import galery2 from '../public/assets/galery2.jpg';
import galery3 from '../public/assets/galery3.jpg';
import galery4 from '../public/assets/galery4.jpg';
import galery5 from '../public/assets/galery5.jpg';
import galery7 from '../public/assets/galery7.jpg';
import galery6 from '../public/assets/cover.jpg';
import galery8 from '../public/assets/aboutUs.jpg';

const galerija = [
    {
        imageSrc: galery1,
        imageAlt: 'opika sfera - enterijer',
        id: 1
    },
    {
        imageSrc: galery2,
        imageAlt: 'opika sfera - enterijer',
        id: 2
    },
    {
        imageSrc: galery3,
        imageAlt: 'opika sfera - enterijer',
        id: 3
    },
    {
        imageSrc: galery4,
        imageAlt: 'opika sfera - enterijer',
        id: 4
    },
    {
        imageSrc: galery5,
        imageAlt: 'opika sfera - enterijer',
        id: 5
    },
    {
        imageSrc: galery6,
        imageAlt: 'opika sfera - enterijer',
        id: 6
    },
    {
      imageSrc: galery7,
      imageAlt: 'opika sfera - eksterijer',
      id: 7
  },
  {
    imageSrc: galery8,
    imageAlt: 'opika sfera - eksterijer',
    id: 8
},
]

export default function Galery() {
  const [showModal, setShowModal] = useState(false);
  const [zoomedImage, setZoomedImage] = useState("");
  const openModalAndSetIndex = (index) => {
    setZoomedImage(galerija[index].imageSrc)
    setShowModal(true);

    return;
  };
  const closeModal = () => {
    setZoomedImage("");
    setShowModal(false);
    return;
  };
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mb-24 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {galerija.map((product, index) => (
              <div key={product.id} className="group">        
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    priority
                    placeholder="blur"
                    className="w-full h-full object-center object-cover group-hover:opacity-75 rounded-lg"
                    onClick={() => openModalAndSetIndex(index)}
                  />
              </div>
            ))}
          </div>
          {showModal === true && (
        <div
          className="justify-center items-center flex overflow-x-hidden bg-black bg-opacity-80 overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          onClick={closeModal}
        >
          <div className="relative w-auto my-6 mx-auto max-w-3xl">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

            </div>
            <span className="bg-transparent text-gray-700 opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
              ×
            </span>
            <Image
              src={zoomedImage}
              alt="picture"
              priority
              width="800px"
              height="600px"
              className='rounded-lg'
            />

          </div>
        </div>

      )}
          <Stat/>
        </div>
      </div>
    )
  }