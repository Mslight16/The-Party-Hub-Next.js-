"use client";

import Link from "next/link";

export default function Error() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white px-6">

      <div className="text-center bg-orange-50 shadow-xl rounded-3xl p-12 border border-orange-100 max-w-xl">

        <h1 className="text-5xl md:text-6xl font-bold text-orange-500 mb-6">
          Oops!
        </h1>

        <p className="text-2xl text-gray-700 mb-8">
          It's a dead end 🚫
        </p>

        <Link
          href="/cocktails"
          className="inline-block bg-orange-500 text-white px-8 py-3 rounded-2xl text-lg font-semibold hover:bg-orange-600 transition"
        >
          Back Home
        </Link>

      </div>
    </section>
  );
}