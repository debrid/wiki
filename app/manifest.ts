import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Debrid Wiki",
        short_name: "Debrid Wiki",
        description:
            "A community-driven wiki that aims to provide information on the various debrid services and projects related to it such as Zurg, Riven, Plex Debrid, and more.",
        start_url: "/",
        theme_color: "#707070",
        background_color: "#707070",
        display: "standalone",
        icons: [
            {
                src: "favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            },
            {
                src: "apple-touch-icon.png",
                sizes: "180x180",
                type: "image/png",
            },
        ],
    };
}
