import Image from 'next/image';
import cover from '../public/assets/cover3.jpg';
import Service from './components/Service';
import Category from './components/Category';
import CtaSection from './components/CtaSection';


export default function Home() {
  return (
    <>
      <div className="relative bg-white overflow-hidden h-2/3">
        <div className="max-w-7xl mx-auto">
          <div className="relative pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-32 xl:pb-72">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-64">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold lg:text-left text-gray-900 sm:text-5xl md:text-6xl">
                Uz našu pomoć do <br /><span class="text-indigo-600">boljeg vida</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Sa ponudom od preko 30 renomiranih brendova, svojim klijentima nudimo najveći izbor stakala, ramova, svih vrsta kontaktnih sočiva i sredstava za njehove održavanje, vrhunskog kvaliteta. Posetite nas i uverite se u kvalitet naše usluge.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Poledaj našu ponudu
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Kontaktiraj nas
                    </a>
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
            priority
          // onLoadingComplete={()=> handleChange({naturalWidth: "12000px", naturalHeight: "10000px"})}
          />
          {/* <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt=""
          /> */}
        </div>
      </div>
      {/* <div>
        <div className="px-6 py-12 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
          <div className="lg:p-12 container mx-auto xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 flex items-center">
              <div className="mt-12 lg:mt-0">
                <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">Uz našu pomoć do <br /><span class="text-blue-600">boljeg vida</span></h1>
                <p className="text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Sa ponudom od preko 30 renomiranih brendova, svojim klijentima nudimo najveći izbor dioptrijskih okvira i naočara za sunce na tržištu.
                </p>
                <a className="mt-12 inline-block px-7 py-3 mr-2 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                <a className="mt-12 inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
              </div>
              <div className="mb-12 lg:mb-0">
                <Image
                  src={glasses}
                  className="w-full rounded-lg shadow-lg"
                  alt=""
                  placeholder="blur"
                  priority
                // onLoadingComplete={()=> handleChange({naturalWidth: "12000px", naturalHeight: "10000px"})}
                />
              </div>
            </div>
          </div>
        </div>
      </div > */}
      <Category />
      <CtaSection />
      <Service />
    </>
  )
}
