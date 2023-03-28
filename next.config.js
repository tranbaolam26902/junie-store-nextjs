/** @type {import('next').NextConfig} */
const { withPlaiceholder } = require('@plaiceholder/next');

module.exports = withPlaiceholder({
    experimental: {
        appDir: true,
    },
});
