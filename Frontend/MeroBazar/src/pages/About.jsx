
import { Link } from "react-router-dom";
import {
  ShoppingBag,
  ShieldCheck,
  Truck,
  Headphones,
  Heart,
  Target,
  Eye,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: ShoppingBag,
    title: "Wide Product Selection",
    description:
      "Explore electronics, fashion, home essentials, beauty products, and much more in one place.",
  },
  {
    icon: ShieldCheck,
    title: "Shopping You Can Trust",
    description:
      "Enjoy a simple and transparent shopping experience while exploring products.",
  },
  {
    icon: Truck,
    title: "Convenient Shopping",
    description:
      "Find the products you need without visiting multiple stores.",
  },
  {
    icon: Headphones,
    title: "Customer Focused",
    description:
      "We aim to make every step of your shopping journey smooth and convenient.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
              <Heart size={16} />
              About MeroBazar
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900">
              Everything You Need,
              <span className="block text-red-600 mt-2">
                All in One Place.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
              Welcome to MeroBazar, your online marketplace for discovering
              products across multiple categories. From electronics and
              fashion to home essentials and everyday needs, we make online
              shopping simple and convenient.
            </p>

            <Link
              to="/products"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-red-100 transition hover:bg-red-700 hover:shadow-lg"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              A smarter way to shop online
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              MeroBazar brings different product categories together in one
              convenient place. Our goal is to help shoppers discover
              products easily, compare their options, and enjoy a comfortable
              browsing experience.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We believe online shopping should be straightforward, accessible,
              and enjoyable. That is why we focus on a clean website design,
              easy navigation, and a user-friendly shopping experience.
            </p>
          </div>

          <div className="relative overflow-x-clip">
            <div className="absolute -inset-3 rounded-3xl bg-red-100/70 rotate-2" />

            <div className="relative rounded-3xl bg-white border border-gray-100 shadow-xl p-7 sm:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600">
                <ShoppingBag size={30} />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                Welcome to MeroBazar
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Discover your next favorite product, browse different
                categories, and find what you need with ease.
              </p>

              <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 text-white">
                  <Heart size={19} />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    Made for convenient shopping
                  </p>
                  <p className="text-sm text-gray-500">
                    Simple. Modern. User-friendly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-red-600">
              Why MeroBazar?
            </p>

            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-gray-900">
              Shopping made easier
            </h2>

            <p className="mt-4 text-gray-600 leading-7">
              We focus on the features that help make browsing and discovering
              products a better experience.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-gray-100 bg-gray-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-200 hover:bg-white hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 transition group-hover:bg-red-600 group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Target size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Our Mission
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our mission is to make product discovery easier by bringing
              multiple categories together in one accessible and user-friendly
              online marketplace.
            </p>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-7 sm:p-9 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600">
              <Eye size={25} />
            </div>

            <h2 className="mt-5 text-2xl font-bold text-gray-900">
              Our Vision
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
              Our vision is to create a convenient online destination where
              people can discover a wide variety of products through a simple,
              modern, and enjoyable shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto overflow-hidden rounded-3xl bg-red-600 px-6 py-12 sm:px-12 sm:py-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to discover something new?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-red-50">
            Explore our product collection and find items that fit your needs
            and lifestyle.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 font-semibold text-red-600 transition hover:bg-gray-100"
          >
            Start Shopping
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
