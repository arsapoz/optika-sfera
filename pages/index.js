import Image from 'next/image';
import cover from '../public/assets/cover3.jpg';
import Service from './components/Service';
import Category from './components/Category';
import CtaSection from './components/CtaSection';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden h-2/3">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-32 xl:pb-72">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-64">
              <div className="text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  Uz našu pomoć do <br /><span className="text-indigo-600">boljeg vida</span>
                </h1>
                <p className="mt-5 text-base text-gray-500 text-left sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Sa ponudom od preko 30 renomiranih brendova, svojim klijentima nudimo najveći izbor stakala, ramova, svih vrsta kontaktnih sočiva i sredstava za njehove održavanje, vrhunskog kvaliteta. Posetite nas i uverite se u kvalitet naše usluge.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="#">
                    <a
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Poledaj našu ponudu
                    </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            src={cover}
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            alt=""
            placeholder="blur"
          />
        </div>
      </div>
      <Category />
      <CtaSection />
      <Service />
    </>
  )
}
