// "use client";

// import Link from "next/link";
// import { useState } from "react";
// import { HiMenu, HiX } from "react-icons/hi";

// export default function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 left-0 w-full z-50">

//       <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-3xl font-extrabold bg-linear-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent"
//         >
//           ThePartyHub
//         </Link>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex gap-8 text-white font-medium">

//           <Link
//             href="/"
//             className="hover:text-yellow-400 transition duration-300"
//           >
//             Home
//           </Link>

//           <Link
//             href="/cocktails"
//             className="hover:text-yellow-400 transition duration-300"
//           >
//             Cocktails
//           </Link>

//           <Link
//             href="/menu"
//             className="hover:text-yellow-400 transition duration-300"
//           >
//             Menu
//           </Link>

//           <Link
//             href="/movies"
//             className="hover:text-yellow-400 transition duration-300"
//           >
//             Movies
//           </Link>

//         </div>

//         {/* Mobile Button */}
//         <button
//           className="md:hidden text-white text-4xl"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <HiX /> : <HiMenu />}
//         </button>

//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black/10 backdrop-blur-lg border-t border-white/10">

//           <div className="flex flex-col items-center gap-6 py-8 text-white text-lg font-medium">

//             <Link
//               href="/"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-yellow-400 transition"
//             >
//               Home
//             </Link>

//             <Link
//               href="/cocktails"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-yellow-400 transition"
//             >
//               Cocktails
//             </Link>

//             <Link
//               href="/menu"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-yellow-400 transition"
//             >
//               Menu
//             </Link>

//             <Link
//               href="/movies"
//               onClick={() => setMenuOpen(false)}
//               className="hover:text-yellow-400 transition"
//             >
//               Movies
//             </Link>

//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  return (
    <nav
    //  className="fixed top-0 left-0 w-full z-50"
     className={`fixed top-0 left-0 w-full z-50 border-b shadow-md ${
    isHome
      ? "border-2 border-transparent"
      : "border-black/10 bg-white/70 backdrop-blur-md"
  }`}
    >

      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-extrabold bg-linear-to-r from-yellow-400 via-yellow-600 to-yellow-400 bg-clip-text text-transparent"
        >
          ThePartyHub
        </Link>

        {/* Desktop Menu */}
        <div
          className={`hidden md:flex gap-8 font-medium ${
            isHome ? "text-white" : "text-black"
          }`}
        >

          <Link href="/" className="hover:text-yellow-500 transition">
            Home
          </Link>

          <Link href="/cocktails" className="hover:text-yellow-500 transition">
            Cocktails
          </Link>

          <Link href="/menu" className="hover:text-yellow-500 transition">
            Menu
          </Link>

          <Link href="/movies" className="hover:text-yellow-500 transition">
            Movies
          </Link>

        </div>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden text-4xl ${
            isHome ? "text-white" : "text-black"
          }`}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className={`md:hidden backdrop-blur-lg ${
            isHome
              ? "bg-black/80 text-white"
              : "bg-white text-black shadow-lg"
          }`}
        >

          <div className="flex flex-col items-center gap-6 py-8 text-lg font-medium">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Home
            </Link>

            <Link
              href="/cocktails"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Cocktails
            </Link>

            <Link
              href="/menu"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Menu
            </Link>

            <Link
              href="/movies"
              onClick={() => setMenuOpen(false)}
              className="hover:text-yellow-500 transition"
            >
              Movies
            </Link>

          </div>
        </div>
      )}
    </nav>
  );
}