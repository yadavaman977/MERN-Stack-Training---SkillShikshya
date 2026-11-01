import { SignInButton, useUser } from "@clerk/react";

const ProtectedRoute = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center">
        <p className="text-sm text-gray-500">Checking sign-in...</p>
      </div>
    );
  }

  return (
    isSignedIn ? (
      children
    ) : (
      <main className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Sign in to continue to checkout
        </h1>
        <p className="mt-2 text-gray-600">
          Sign in to complete your order.
        </p>
        <SignInButton mode="modal">
          <button
            type="button"
            className="mt-5 rounded-lg bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            Sign in
          </button>
        </SignInButton>
      </main>
    )
  );
};

export default ProtectedRoute;