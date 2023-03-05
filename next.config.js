// eslint-disable-next-line no-undef
module.exports = {
    reactStrictMode: false,
    swcMinify: true,
    images: {
        deviceSizes: [360, 640, 980, 1400, 1920],
        imageSizes: [160, 360, 640, 980, 1400, 1920],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
};
