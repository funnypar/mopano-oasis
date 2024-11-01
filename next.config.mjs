/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdeqvgwygriizhqisgny.supabase.co",
                port: "",
                pathname: "/storage/v1/object/public/cabins/**",
            },
        ],
    },
};

export default nextConfig;
