import Image from 'next/image';
import { useState } from 'react';
import Head from 'next/head';
import Service from './components/Service';
import Category from './components/Category';
import CtaSection from './components/CtaSection';
import Brend from './components/Brend';
import galery1 from '../public/assets/galery1.jpg';
import galery5 from '../public/assets/galery5.jpg';
import galery7 from '../public/assets/galery7.jpg';
import galery6 from '../public/assets/cover.jpg';


const galerija = [
  {
    imageSrc: galery1,
    imageAlt: 'opika sfera - enterijer',
    id: 1
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
  }
]


export default function Home() {

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
    <>
      <Head>
        <title>Početna - optika Sfera</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Najbolja ponuda dioptrijskih, sunčanih naočara i sočiva najpopularnijih brendova"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:title" content="Ponuda dioptrijskih, sunčanih naočara i sočiva"></meta>
      </Head>
      <div className="pt-32 lg:flex items-center z-10 container mx-auto">
        <div role="contentinfo" className="w-full lg:w-1/2 h-full mx-6 pb-4 flex-row items-center justify-center">

          <h1 className="text-3xl lg:text-6xl xl:text-6xl font-black text-gray-900 tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">UZ NAŠU POMOĆ DO
            <br /><span className="text-indigo-600">BOLJEG VIDA</span>
          </h1>
          <p className="mt-5 text-xl text-gray-500 sm:text-lg  sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Sa ponudom od preko 30 renomiranih brendova, svojim klijentima nudimo najveći izbor stakala, ramova, svih vrsta kontaktnih sočiva i sredstava za njehove održavanje, vrhunskog kvaliteta. Posetite nas i uverite se u kvalitet naše usluge.
          </p>
          <p className="mt-5 text-base text-gray-500 font-bold sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Uz kupovinu okvira dobijate besplatan pregled dioptrije. </p>
        </div>
        <div className="mb-24 lg:w-1/2 grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-2 xl:grid-cols-2 xl:gap-x-8">

          {galerija.map((image, index) => (
            <div key={image.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  src={image.imageSrc}
                  alt={image.imageAlt}
                  priority
                  placeholder="blur"
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                  onClick={() => openModalAndSetIndex(index)}
                />
              </div>
            </div>
          ))}

        </div>

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
      <Category />
      <Brend />
      <CtaSection />
      <Service />
    </>
  )
}
