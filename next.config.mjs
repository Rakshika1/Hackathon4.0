export default {
  compiler: {
    removeConsole: true,
    styledComponents: true,
  },
  images: {
    formats: ["image/webp"],
  },
  compress: true,
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    turbo: {
      rules: {
        "*.js": ["ecmascript"],
        "*.tsx": ["typescript"],
      },
    },
    optimizeCss: true,
  },
};
