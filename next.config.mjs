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
};

export default withMDX(config);

