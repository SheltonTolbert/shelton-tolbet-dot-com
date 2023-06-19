/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./app/image_loader.ts",
  },
};

module.exports = nextConfig;
