import Image from 'next/dist/client/image';
import { useEffect, useState } from 'react';
import items from '../../data/dioptricGlasses.data';

export default function DioptricGlasses() {
    const [dioptricGlasses, setDioptricGlasses] = useState([]);
    const [index, setIndex] = useState(1);

    useEffect(() => {
        const start = (index - 1) * 8;
        let glasses = items.slice(start, 8 * index);
        setDioptricGlasses(glasses);;
    }, [index])

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-24 lg:max-w-none">
                <div className="text-center">
                    <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Dioptrijske naočare
                    </p>
                </div>

                <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
                    {dioptricGlasses.map((item) => (
                        <div key={item.name} className="group relative lg:mb-6">
                            <div className="relative w-full h-64 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                                <Image
                                    src={item.imageSrc}
                                    alt={item.imageAlt}
                                    layout="fill"
                                    priority="true"
                                    className="w-full h-full object-center object-cover "
                                />
                            </div>
                            <p className=" font-normal text-xl leading-5 text-gray-800 md:mt-6 mt-4">{item.name}</p>
                            <p className=" font-semibold text-xl leading-5 text-gray-800 mt-4">$1800</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-end items-end mt-4">
                <div className="flex flex-row items-center justify-center space-x-8">
                    <button onClick={() => setIndex(1)} className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                        <p>1</p>
                    </button>
                    <button onClick={() => setIndex(2)} className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                        <p>2</p>
                    </button>
                    <button onClick={() => setIndex(3)} className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
                        <p>3</p>
                    </button>
                    <button onClick={() => setIndex(index + 1)} className="flex justify-center items-center">
                        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 6L15 12L9 18" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}