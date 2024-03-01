/** @type {import('next').NextConfig} */
// const path = require("path");
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./base.scss";`,
  },
  images: {
    domains: ["ae01.alicdn.com", "res.cloudinary.com", "assets.stickpng.com", "img.ltwebstatic.com"], // Add the domain for your images
  },
};

export default nextConfig;
