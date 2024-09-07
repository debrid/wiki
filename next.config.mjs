import createMDX from "fumadocs-mdx/config";
import {
    rehypeCode,
    remarkAdmonition,
    remarkImage,
    remarkHeading,
    remarkStructure,
} from "fumadocs-core/mdx-plugins";

const withMDX = createMDX({
    mdxOptions: {
        remarkPlugins: [
            remarkHeading,
            remarkAdmonition,
            remarkImage,
            remarkStructure,
        ],
        rehypePlugins: [rehypeCode],
    },
});

/** @type {import('next').NextConfig} */
const config = {
    reactStrictMode: true,
    output: "standalone",
    compress: true,
    swcMinify: true,
    cleanDistDir: true,
    images: {
        remotePatterns: [
            {
                hostname: "debrid.wiki",
            },
            {
                hostname: "raw.githubusercontent.com",
            },
            {
                hostname: "i.imgur.com",
            },
        ],
    },
    headers: async () => {
        return [
            {
                // mathching all API routes
                source: "/api/:path*",
                headers: [
                    { key: "Access-Control-Allow-Credentials", value: "true" },
                    { key: "Access-Control-Allow-Origin", value: "*" },
                    {
                        key: "Access-Control-Allow-Methods",
                        value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
                    },
                    {
                        key: "Access-Control-Allow-Headers",
                        value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
                    },
                ],
            },
        ];
    },
};

export default withMDX(config);

