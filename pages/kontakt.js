import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import { PhoneIcon, HomeIcon, MailIcon, PrinterIcon } from '@heroicons/react/outline'
mapboxgl.accessToken = 'pk.eyJ1IjoianVsaWphbmFtYW5kaWMxMjMiLCJhIjoiY2wxcDE0ZG9mMHFiMDNlcGRuZmdvYmN0MSJ9.XAaTtpVqO0kGhV_Fb4gahw';

const features = [
    {
        name: 'Bežanijska 45, 11080 Zemun, Beograd, Srbija',
        icon: HomeIcon,
        key: 'location'
    },
    {
        name: 'optikasfera@hotmail.com',
        icon: MailIcon,
        key: 'mail'
    },
    {
        name: '+381 11 375 06 28, 063 222 834, 062 772 080',

        icon: PhoneIcon,
        key: 'phone'
    },
    {
        name: '+381 11 375 06 28',
        icon: PrinterIcon,
        key: 'faks'
    },
]
const Kontakt = () => {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(20.4039398);
    const [lat, setLat] = useState(44.8427217);
    const [zoom, setZoom] = useState(14);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

    return (
        <div>
            <Head>
                <title>Kontakt - optika Sfera</title>
                <meta httpEgitquiv="Content-Type" content="text/html; charset=utf-8" />
                <meta name="description" content="Kontakt - pronadjite nas"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <meta property="og:title" content="Kontakt i lokacija - optika Sfera"></meta>
            </Head>
            <div ref={mapContainer} className="h-400" />
            <div className="py-20 bg-gray-100">
                <div className="container relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:flex lg:flex-col lg:items-center">
                    <div className="lg:text-center">
                        <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Kako do nas?</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Pronadjite nas
                        </p>
                    </div>

                    <div className="mt-14">
                        <dl className="space-y-20 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-60 md:gap-y-20">
                            {features.map((feature) => (
                                <div key={feature.key} className="relative">
                                    <dt className='flex items-center '>
                                        <div className='flex flex-col justify-center'>
                                            <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                                            </div>

                                            <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                                        </div>
                                    </dt>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default Kontakt;