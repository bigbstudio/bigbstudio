module.exports = (phase, { defaultConfig }) => {
    return {
      ...defaultConfig,
      images: {
        domains: ['images.unsplash.com', 'images.prismic.io'],
      },
      webpack: (config) => {
        config.resolve = {
          ...config.resolve,
          fallback: {
            "fs": false,
            "path": false,
            "os": false,
          }
        }
        return config
      },
    }
  }
