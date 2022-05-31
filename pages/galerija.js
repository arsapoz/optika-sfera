import React from "react";
import Image from 'next/image';
import Stat from "./components/Stat";
import galery1 from '../public/assets/galery1.jpg';
import galery2 from '../public/assets/galery2.jpg';
import galery3 from '../public/assets/galery3.jpg';
import galery4 from '../public/assets/galery4.jpg';
import galery5 from '../public/assets/galery5.jpg';
import galery6 from '../public/assets/cover.jpg';

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
]

export default function Galery() {
    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mb-24 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
            {galerija.map((product) => (
              <div key={product.id} className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <Image
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    priority
                    placeholder="blur"
                    className="w-full h-full object-center object-cover group-hover:opacity-75"
                  />
                </div>
              </div>
            ))}
          </div>
          <Stat/>
        </div>
      </div>
    )
  }