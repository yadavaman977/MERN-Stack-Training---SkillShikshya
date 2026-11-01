
import { Truck, ShieldCheck, RotateCcw, Clock } from 'lucide-react'

const features = [
  {
    icon: Truck,
    title: 'Reliable Delivery',
    description: 'Delivery across Nepal',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Shopping',
    description: 'Shop with confidence',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: 'Simple return process',
  },
  {
    icon: Clock,
    title: 'Customer Support',
    description: 'We are here to help',
  },
]

const Features = () => {
  return (
    <section className="w-full border-y border-gray-100 bg-white py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon

            return (
              <div
                key={feature.title}
                className="flex items-center gap-4"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-50">
                  <Icon size={24} className="text-red-600" />
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-900 sm:text-base">
                    {feature.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
