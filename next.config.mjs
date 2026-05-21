// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   /* config options here */
//   reactCompiler: true,
//    images: {
//     domains: ["www.thecocktaildb.com"],
//   },
//   remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "**",
//       },
//     ],


// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  images: {
    domains: ["www.thecocktaildb.com"],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "m.media-amazon.com",
      },
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
    ],
  },
};

export default nextConfig;