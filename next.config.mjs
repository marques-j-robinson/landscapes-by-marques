/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // TODO change this to match AWS link for gallery storage
        domains: ['images.squarespace-cdn.com', 'i.ebayimg.com', 'i.fbcd.co']
    }
};

export default nextConfig;
