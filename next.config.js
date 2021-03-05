module.exports = {
  target: "serverless",
  webpack: function (config) {
    config.module.rules.push({ test: /\.md$/, use: "raw-loader" });
    config.module.rules.push({ test: /\.yml$/, use: "raw-loader" });
    return config;
  },
  images: {
    path: 'https://raw.githubusercontent.com/Rafat97/rafat97-content-static/',
  },
};
