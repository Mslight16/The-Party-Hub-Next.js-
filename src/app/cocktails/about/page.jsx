// "use client";

// import Link from "next/link";

// export default function About() {
//   return (
//     <section className="min-h-screen bg-white text-gray-800 px-6 py-16">

//       <div className="max-w-5xl mx-auto">

//         <h1 className="text-5xl font-bold text-center mt-12 mb-12 text-orange-500">
//           About Us
//         </h1>


//         <div className="mb-10 text-center">
//           <Link
//             href="/cocktails"
//             className="inline-block bg-orange-500 text-white px-6 py-3 rounded-2xl font-semibold hover:bg-orange-600 transition"
//           >
//             ← Back Home
//           </Link>
//         </div>

//         <div className="bg-orange-50 shadow-lg rounded-3xl p-8 space-y-8 border border-orange-100">

//           <p className='mb-6'>
//        <span className="text-2xl font-semibold text-orange-500 mb-3">Our Story </span><br/> Cocktail Gallery was born from a passion for flavors, creativity, and storytelling. What started as a simple love for beautifully crafted drinks evolved into a platform dedicated to highlighting the artistry behind every cocktail.
//         Each drink tells a story — of its origin, its ingredients, and the hands that created it. Our goal is to capture those stories and present them in a visually rich and informative way.
//       </p>
//       <p className='mb-6'>
//         <span className="text-2xl font-semibold text-orange-500 mb-3">What We Offer</span><br/>
// 🍹 Curated Cocktail Collection
// Explore a handpicked selection of cocktails ranging from classic recipes like the Old Fashioned and Margarita to innovative signature drinks crafted by modern mixologists.
// 📸 Visual Experience
// Our gallery-style presentation focuses on high-quality visuals, making every cocktail a feast for the eyes before it’s ever tasted.
// 🧾 Recipes & Ingredients
// Learn what goes into your favorite cocktails with detailed ingredient lists, preparation methods, and serving tips.
// 🌍 Global Inspiration
// Discover cocktails inspired by different cultures, regions, and traditions from around the world.
//       </p>
//       <p className='mb-6'>
//         <span className="text-2xl font-semibold text-orange-500 mb-3">Our Philosophy</span><br/>
//       We believe cocktails are a perfect blend of science and creativity. Every measurement matters, every garnish has purpose, and every glass enhances the experience.
// Cocktail Gallery stands for:
// Quality craftsmanship
// Creative expression
// Responsible enjoyment
// Appreciation of mixology as an art form
//       </p>
//       <p className='mb-6'>
//          <span className="text-2xl font-semibold text-orange-500 mb-3">Who It’s For</span><br/>
//        Cocktail enthusiasts 🍸
// Professional and aspiring bartenders
// Food & beverage lovers
// Event planners and bar owners
// Anyone who enjoys the beauty of a well-made drink
//       </p>
//       <p className='mb-6'>
//           <span className="text-2xl font-semibold text-orange-500 mb-3">Our Mission</span><br/>
// Our mission is to inspire people to explore cocktails beyond the menu — to understand their history, appreciate their design, and enjoy the experience responsibly.
//       </p>
//       <p className='mb-6'>
//           <span className="text-2xl font-semibold text-orange-500 mb-3">Join the Experience</span><br/>
// Whether you’re here to discover new recipes, admire cocktail photography, or learn the art of mixology, Cocktail Gallery invites you to sip, explore, and be inspired.
// Cheers to creativity, flavor, and unforgettable moments! 🥂
//       </p>

//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 text-gray-800 px-6 py-20">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-7xl font-extrabold text-orange-500 mt-6 mb-6 tracking-tight">
            About Us
          </h1>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-8">
            Discover the passion, creativity, and artistry behind every cocktail.
          </p>
        </div>

        {/* Back Button */}
        <div className="mb-12 text-center">
          <Link
            href="/cocktails"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-7 py-3 rounded-2xl font-semibold shadow-lg hover:bg-orange-600 hover:scale-105 transition duration-300"
          >
            ← Back Home
          </Link>
        </div>

        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-4xl p-8 md:p-14 border border-orange-100 space-y-10">

          {/* Section */}
          <div className="group hover:translate-x-1 transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500 mb-5 flex items-center gap-3">
              🍸 Our Story
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Cocktail Gallery was born from a passion for flavors,
              creativity, and storytelling. What started as a simple
              love for beautifully crafted drinks evolved into a platform
              dedicated to highlighting the artistry behind every cocktail.
              <br />
              <br />
              Each drink tells a story — of its origin, its ingredients,
              and the hands that created it. Our goal is to capture those
              stories and present them in a visually rich and informative way.
            </p>
          </div>

          {/* Section */}
          <div className="group hover:translate-x-1 transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500 mb-5 flex items-center gap-3">
              🍹 What We Offer
            </h2>

            <div className="grid md:grid-cols-2 gap-6">

              <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <h3 className="font-bold text-xl text-orange-500 mb-3">
                  Curated Collection
                </h3>

                <p className="text-gray-700 leading-8">
                  Explore handpicked cocktails ranging from timeless classics
                  to bold modern creations crafted by talented mixologists.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <h3 className="font-bold text-xl text-orange-500 mb-3">
                  Visual Experience
                </h3>

                <p className="text-gray-700 leading-8">
                  Every cocktail is showcased with stunning visuals that make
                  the experience immersive and inspiring.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <h3 className="font-bold text-xl text-orange-500 mb-3">
                  Recipes & Ingredients
                </h3>

                <p className="text-gray-700 leading-8">
                  Learn preparation methods, ingredients, and serving techniques
                  behind your favorite drinks.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
                <h3 className="font-bold text-xl text-orange-500 mb-3">
                  Global Inspiration
                </h3>

                <p className="text-gray-700 leading-8">
                  Discover cocktail traditions and inspirations from cultures
                  around the world.
                </p>
              </div>

            </div>
          </div>

          {/* Section */}
          <div className="group hover:translate-x-1 transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500 mb-5 flex items-center gap-3">
              ✨ Our Philosophy
            </h2>

            <p className="text-lg leading-9 text-gray-700 mb-6">
              We believe cocktails are a perfect blend of science and
              creativity. Every measurement matters, every garnish has
              purpose, and every glass enhances the experience.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">

              <div className="bg-linear-to-r from-orange-500 to-orange-400 text-white p-5 rounded-2xl shadow-lg">
                Quality Craftsmanship
              </div>

              <div className="bg-linear-to-r from-orange-500 to-orange-400 text-white p-5 rounded-2xl shadow-lg">
                Creative Expression
              </div>

              <div className="bg-linear-to-r from-orange-500 to-orange-400 text-white p-5 rounded-2xl shadow-lg">
                Responsible Enjoyment
              </div>

              <div className="bg-linear-to-r from-orange-500 to-orange-400 text-white p-5 rounded-2xl shadow-lg">
                Mixology as an Art Form
              </div>

            </div>
          </div>

          {/* Section */}
          <div className="group hover:translate-x-1 transition duration-300">
            <h2 className="text-3xl font-bold text-orange-500 mb-5 flex items-center gap-3">
              🎉 Who It’s For
            </h2>

            <div className="grid md:grid-cols-2 gap-5">

              {[
                "Cocktail enthusiasts 🍸",
                "Professional & aspiring bartenders",
                "Food & beverage lovers",
                "Event planners & bar owners",
                "Anyone who loves well-made drinks",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-orange-200 rounded-2xl p-5 shadow-md hover:shadow-xl hover:border-orange-400 transition duration-300"
                >
                  <p className="text-lg text-gray-700 font-medium">
                    {item}
                  </p>
                </div>
              ))}

            </div>
          </div>

          {/* Mission */}
          <div className="bg-orange-50 border border-orange-200 rounded-3xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold text-orange-500 mb-5">
              🚀 Our Mission
            </h2>

            <p className="text-lg leading-9 text-gray-700">
              Our mission is to inspire people to explore cocktails
              beyond the menu — to understand their history,
              appreciate their design, and enjoy the experience responsibly.
            </p>
          </div>

          {/* Final CTA */}
          <div className="bg-linear-to-r from-orange-500 to-orange-400 text-white rounded-3xl p-10 text-center shadow-2xl">

            <h2 className="text-4xl font-bold mb-6">
              Join the Experience
            </h2>

            <p className="text-lg md:text-xl leading-9 max-w-3xl mx-auto">
              Whether you’re here to discover new recipes,
              admire cocktail photography, or learn the art of mixology,
              Cocktail Gallery invites you to sip, explore, and be inspired.
            </p>

            <p className="mt-8 text-2xl font-bold">
              Cheers to creativity, flavor, and unforgettable moments! 🥂
            </p>

          </div>

        </div>
      </div>
    </section>
  );
}