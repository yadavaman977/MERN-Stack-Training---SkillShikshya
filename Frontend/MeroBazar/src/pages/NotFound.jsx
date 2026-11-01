
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const NotFound = () => {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center bg-white px-4 py-10 text-center">
      {/* Animation */}
      <div className="w-full max-w-[300px]">
        <DotLottieReact
          src="https://lottie.host/80954498-e5fb-42c2-9737-cc8461b03dc1/RIkoLqfxjr.lottie"
          loop
          autoplay
          style={{ width: "100%", height: "260px" }}
        />
      </div>

      {/* Heading */}
      <h2 className="mt-3 text-2xl font-bold text-gray-900">
        Page Not Found
      </h2>

      {/* Home Button */}
      <Link
        to="/"
        className="mt-6 rounded-lg bg-red-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
      >
        Back to Home
      </Link>

      
    </div>
  );
};

export default NotFound;
