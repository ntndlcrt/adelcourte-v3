/** @type {import('next').NextConfig} */
const nextConfig = {
    images: { unoptimized: true },
    sassOptions: {
        includePaths: ['./src/**/*.scss'],
        prependData: `@import "@/styles/require/vars.scss"; @import "@/styles/require/mixins.scss";`,
    },
    reactStrictMode: false,
    trailingSlash: true,
}

export default nextConfig
