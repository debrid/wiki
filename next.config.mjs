import createMDX from "fumadocs-mdx/config";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    output: "standalone",
    compress: true,
    swcMinify: true,
    cleanDistDir: true,
};

export default withMDX(config);

