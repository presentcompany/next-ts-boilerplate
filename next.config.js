module.exports = {
  swcMinify: true,
  images: {
    // *NOTE: AVIF processing will prolong build time, remove if deemed unnecessary
    formats: ['image/avif', 'image/webp']
  },
  experimental: {
    urlImports: ['https://cdn.skypack.dev'],
    concurrentFeatures: true,
    serverComponents: true
  }
};
