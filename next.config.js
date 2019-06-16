module.exports = {
  webpack(config) {
    // use `clsx` over `classnames` for smaller bundler/better perf
    config.resolve.alias.classnames = "clsx";

    return config;
  }
};
