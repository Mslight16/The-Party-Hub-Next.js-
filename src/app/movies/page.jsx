"use client";

import { AppProvider } from "./context";
import SearchForm from "./SearchForm";
import Movies from "./Movies";

export default function MoviesPage() {
  return (
    <AppProvider>
      <main className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 overflow-hidden">
        
          
         <div className="text-center mt-28 mb-10">
          <h2 className="text-5xl font-bold capitalize text-gray-800">
            Our Movies
          </h2>
          <div className="w-20 h-1 bg-yellow-700 mx-auto mt-4 rounded"></div>
        </div>
        <SearchForm />

          <Movies />

      </main>
    </AppProvider>
  );
}