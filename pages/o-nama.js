import React from "react";
import Image from 'next/image';
import { UsersIcon, CalendarIcon, BellIcon } from '@heroicons/react/outline'
import aboutUs from '../public/assets/aboutUs.jpg';
import CtaSection from './components/CtaSection';

const features = [
    {
        name: 'Otvoreni smo 7 dana u nedelji',
        description:
            '08:00 - 18:00',
        icon: CalendarIcon,
    },
    {
        name: 'Instant usluga',
        description:
            'Izradjujemo stakla i vrsimo servisiranje naočara u najkraćem mogućem roku',
        icon: BellIcon,
    },
    {
        name: 'Licencirani specijalisti',
        description:
            'Naš tim ljudi sa puno iskustva garantuje pružanje najkvalitetnije usluge',
        icon: UsersIcon,
    },
]

const AboutUs = () => {
    return (
        <div>
            <div className="2xl:container 2xl:mx-auto lg:py-20 lg:px-40 md:py-12 md:px-6 py-9 px-4">
                <div className="flex lg:flex-row flex-col lg:gap-8 sm:gap-10 gap-12">
                    <div className="w-full lg:w-6/12">
                        <h2 className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Nudimo najbolja rešenja za <br /><span className="text-blue-600">sve vrste vaših problema</span></h2>
                        <p className="mt-5 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Optika Sfera je savremena, moderna optičarska radnje sa dugogodišnjim iskustvom. Posle besplatne provere dioptrije, čeka vas bogat asortiman stakala, ramova, svih vrsta kontaktnih sočiva i sredstava za njihovo održavanje, različitih stranih i domaćih proizvođača, vrhunskog kvaliteta i izrade. </p>
                        <p className="mt-5 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Naš objekat je opremljen sa najsavremenijom tehnologijom za različite vrste oftalmoloških pregleda i servisiranje naočara, a stručno osoblje je na raspolaganju za savete i konsultacije. </p>
                        <p className="mt-5 text-base text-gray-500 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">Posetite nas u Zemunu i uverite se u kvalitet naše usluge. </p>
                    </div>
                    <div className="w-full lg:w-6/12">
                        <Image
                            src={aboutUs}
                            className="w-full rounded-lg shadow-lg"
                            alt=""
                            placeholder="blur"
                            priority="true"
                        />
                    </div>
                </div>
            </div>
            <CtaSection/>
            <div className="py-20 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Zašto nam verujete?</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Mi čuvamo, unapredjujemo,  <br /><span className="text-blue-600"> i štitimo vaš vid</span>
                        </p>
                    </div>

                    <div className="mt-14">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative">
                                    <dt>
                                        <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                            <feature.icon className="h-6 w-6" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                    </dt>
                                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
