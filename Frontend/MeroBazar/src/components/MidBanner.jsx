
import { Link } from "react-router-dom";
import banner from '../assets/banner1.jpg'

const MidBanner = () => {
  return (
    <div className='bg-white py-6 md:py-10'>
      <div
        className='relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
      >
        <div
          className='relative h-[420px] sm:h-[500px] md:h-[600px] md:rounded-2xl
            overflow-hidden bg-cover bg-center bg-scroll md:bg-fixed'
          style={{
            backgroundImage: `url(${banner})`,
            backgroundPosition: 'center',
          }}
        >
          <div className='absolute inset-0 bg-black/60 md:rounded-2xl
            flex items-center justify-center'>
            <div className='text-center text-white px-4'>

              <h1 className='text-3xl md:text-5xl lg:text-6xl font-bold mb-4'>
                Everything You Need,
                <br />
                All in One Place
              </h1>

              <p className='text-lg md:text-xl mb-6'>
                Discover electronics, fashion, home essentials, beauty products,
                and everyday favorites at MeroBazar.
              </p>

              <Link
                to="/products"
                className='bg-red-500 hover:bg-red-600 text-white font-semibold
                  inline-flex py-2 px-4 md:py-3 md:px-6 rounded-lg transition duration-300'
              >
                Shop Now
              </Link>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MidBanner
