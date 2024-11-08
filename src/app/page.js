import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <div className="absolute top-4 right-4">
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>{" "}
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Linkify</h1>
          <h1 className="text-4xl md:text-4xl font-bold mb-4">
            Create Your Digital E-Card
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Easily create, customize, and share digital cards for personal or
            business use.
          </p>
          <Link
            href={"/dashboard"}
            className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition"
          >
            Get Started
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Features</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Customizable Designs
              </h3>
              <p className="text-gray-600">
                Choose from a variety of professional templates to suit your
                style.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Share Effortlessly
              </h3>
              <p className="text-gray-600">
                Send your e-cards via email or share on social media with ease.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 max-w-xs">
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                Mobile Friendly
              </h3>
              <p className="text-gray-600">
                Your e-cards look great on any device, desktop or mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-indigo-600 text-white py-16 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">
            Start Creating Your E-Card Today
          </h2>
          <p className="text-lg mb-8">
            Join thousands of satisfied users and make your e-card now.
          </p>
          <SignedOut>
            <Link
              href={"/sign-up"}
              className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-gray-100 transition"
            >
              Sign Up Now
            </Link>
          </SignedOut>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 E-Card Maker. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Contact us at support@ecardmaker.com
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
