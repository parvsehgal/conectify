import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";
import React from "react";

async function Main() {
  const userLoggedIn = await currentUser();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Welcome {userLoggedIn?.firstName} Manage Your E-Card
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {/* Generate Card Option */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Generate a Card
            </h2>
            <p className="text-gray-600 mb-6">
              Create a new e-card with customizable options to make it uniquely
              yours.
            </p>
            <Link
              href={"/dashboard/generate"}
              className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition"
            >
              Generate Card
            </Link>
          </div>

          {/* View Card Option */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              View Your Card
            </h2>
            <p className="text-gray-600 mb-6">
              Preview the e-card you’ve created and see how it appears to
              others.
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition">
              View Card
            </button>
          </div>

          {/* Edit Card Option */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Edit Your Card
            </h2>
            <p className="text-gray-600 mb-6">
              Make changes to your existing card to keep it up-to-date.
            </p>
            <button className="px-4 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-500 transition">
              Edit Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
