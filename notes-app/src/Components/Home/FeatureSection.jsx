import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Effortless Updates',
        description:
        "Keep your notes up to date effortlessly with our push-to-deploy feature. Instantly sync changes across all your devices, ensuring you're always in sync.",
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Robust Privacy Protection',
        description:
        "Rest assured knowing your notes are shielded by advanced SSL encryption. We prioritize the security of your data, allowing you to focus solely on your notes.",
        icon: LockClosedIcon,
    },
    {
        name: 'Simplified Organization',
        description:
        "Streamline your workflow with our intuitive organization system. Easily categorize notes, prioritize tasks, and manage your agenda with ease.",
        icon: ArrowPathIcon,
    },
    {
        name: 'Enhanced Security Measures',
        description:
        "Protect your sensitive data with our advanced security features. Our platform employs robust encryption methods, ensuring your information remains secure at all times.",
        icon: FingerPrintIcon,
    },
]

export default function FeatureSection() {
    return (
        <div className="bg-white py-12 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-orange-500">Work faster</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Everything you need to boost productivity
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Unlock the power of efficient note-taking: Seamlessly capture, organize, and optimize your productivity with our intuitive app!
            </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                    <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-400">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature.name}
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </div>
                ))}
            </dl>
            </div>
        </div>
        </div>
    )
}
