import Image from 'next/image';
import diopticglasses from '../../public/assets/diopticglasses.jpg';
import sunglasses from '../../public/assets/sunglasses.jpg';
import lenses from '../../public/assets/lenses.jpg';
import dodatno from '../../public/assets/dodatno.jpg';
import Link from 'next/link';

const callouts = [
  {
    name: 'Dioptrijski okviri',
    description: 'Najrazličitiji modeli dioptrijskih naočara vaših omiljenih brendova',
    imageSrc: diopticglasses,
    imageAlt: 'Najrazličitiji modeli dioptrijskih naočara vaših omiljenih brendova',
    href: '#',
  },
  {
    name: 'Sunčane naočare',
    description: 'Najrazličitiji modeli sunčanih naočara vaših omiljenih brendova',
    imageSrc: sunglasses,
    imageAlt: 'Najrazličitiji modeli sunčanih naočara vaših omiljenih brendova',
    href: '#',
  },
  {
    name: 'Sočiva',
    description: 'Najkvalitetnija sočiva vaših omiljenih brendova',
    imageSrc: lenses,
    imageAlt: 'Najkvalitetnija sočiva vaših omiljenih brendova',
    href: '#',
  },
  {
    name: 'Dodatno',
    description: 'Sve za održavanje vaših naočara i sočiva',
    imageSrc: dodatno,
    imageAlt: 'Sve za održavanje vaših naočara i sočiva',
    href: '#',
  },
]
export default function Category() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl container relative mx-auto py-16 sm:py-24 lg:py-24 lg:max-w-none">
          <div className="text-center">
            <p className="text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Proizvodi
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Najnoviji modeli naočara vaših omiljenih brendova
            </p>
          </div>

          <div className="mt-16 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-4 lg:gap-x-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-64 bg-white rounded-lg overflow-hidden group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <Image
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    layout="fill"
                    priority="true"
                    className="w-full h-full object-center object-cover "
                  />
                </div>
                <h3 className="mt-6 text-base font-semibold text-gray-900">
                  <Link href={callout.href}>
                  <a>
                    <span className="absolute inset-0" />
                    {callout.name}
                  </a>
                  </Link>
                </h3>
                <p className="text-sm text-gray-500">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}