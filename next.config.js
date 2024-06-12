
const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

const nextConfig = {
  images: {
    domains: ['courses-top.ru'],
  },
  webpack(config, options) {
    // Другие настройки Webpack, если они нужны
    return config;
  },
};

module.exports = withPlugins([withSvgr], nextConfig);

