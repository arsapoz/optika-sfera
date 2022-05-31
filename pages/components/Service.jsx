import { EyeIcon, AnnotationIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
const features = [
    {
        name: 'Dioptrijski pregled',
        description:
            'Ukoliko su Vam potrebne nove naočare za vid ili sunčane naočare sa dioptrijom ili želite samo zaštitu od računara, kod nas možete obaviti besplatnu kontrolu vida kao i proveru postojeće dioptrije besplatno.',
        icon: EyeIcon,
    },
    {
        name: 'Ugradnja stakala',
        description:
            'Zahvaljujući najsavremenijoj tehnologiji za obradu i ugradnju korektivnih sočiva, u prilici smo da vam u najkraćem mogućem roku izađemo u susret i izradimo naočare po Vašoj potrebi i meri',
        icon: LightningBoltIcon,
    },
    {
        name: 'Servis naočara',
        description:
            'Ukoliko Vam je ispao šrafić, papučica ili ste seli na svoje naočare naš optičar će Vam rado pomoći. Vršimo servise svih vrsta naočara.',
        icon: ScaleIcon,
    },
    {
        name: 'Kontaktna sočiva',
        description:
            'Kod nas možete kupiti kontaktna sočiva svih vrsta renomiranih svetskih proizvođača, kao i tečnosti za održavanje vaših sočiva.',
        icon: AnnotationIcon,
    },
]

export default function Service() {
    return (
        <div className="lg:py-12 bg-white lg:mt-10 mt-10">
            <div className="container relative max-w-7xl mx-auto px-4 sm:px-6">
                <div className="text-center ">
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Usluge
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Našim klijentima nudimo najkvalitetnije usluge
                    </p>
                </div>
                <div className="mt-14 mb-14">
                        <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
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
    )
}