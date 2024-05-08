/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "gaming-project.storage.iran.liara.space",
            },
        ],
    },
};
module.exports = nextConfig;