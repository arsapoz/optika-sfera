import Image from 'next/image';
import Head from 'next/head';
import cover from '../public/assets/galery62.jpg';
import Service from './components/Service';
import Category from './components/Category';
import CtaSection from './components/CtaSection';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Početna - optika Sfera</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="description" content="Najbolja ponuda dioptrijskih, sunčanih naočara i sočiva najpopularnijih brendova"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta property="og:title" content="Ponuda dioptrijskih, sunčanih naočara i sočiva"></meta>
      </Head>
      <div className="relative bg-white overflow-hidden h-2/3">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-48 xl:pb-96">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-64">
              <div className="text-left">

                <h1 className="text-3xl lg:text-6xl xl:text-6xl font-black text-gray-900 tracking-tighter f-f-i md:w-7/12 leading-tight text-heading-color">UZ NAŠU POMOĆ DO
                  <br /><span className="text-indigo-600">BOLJEG VIDA</span>
                </h1>
                <p className="mt-5 text-xl text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Sa ponudom od preko 30 renomiranih brendova, svojim klijentima nudimo najveći izbor stakala, ramova, svih vrsta kontaktnih sočiva i sredstava za njehove održavanje, vrhunskog kvaliteta. Posetite nas i uverite se u kvalitet naše usluge.
                </p>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0  lg:flex lg:items-center">
          <Image
            src={cover}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt="Najbolja optika u Beogradu, optika Sfera"
            placeholder="blur"
            priority="true"
          />
        </div>
      </div>
      <Category />
      <CtaSection />
      <Service />
    </>
  )
}
