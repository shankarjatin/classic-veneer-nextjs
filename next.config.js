const nextConfig = {
    images: {
      domains: ['i.ibb.co'], // Add the domain for external images
    },
    webpack(config) {
      config.module.rules.push({
        test: /\.(mp4|webm|ogg|swf|avi)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/media/[name].[hash][ext]',
        },
      });
      return config;
    },
  };
  
  module.exports = nextConfig;