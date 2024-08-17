import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import type { Metadata, Viewport } from "next";

const baseUrl =
    process.env.NODE_ENV === "development"
        ? new URL("http://localhost:3000")
        : new URL(`https://debrid.wiki`);

const inter = Inter({
    subsets: ["latin"],
    display: "swap",
});

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" className={inter.className} suppressHydrationWarning>
            <body>
                <RootProvider>{children}</RootProvider>
            </body>
        </html>
    );
}

export const metadata: Metadata = {
    title: {
        template: "%s | Debrid Wiki",
        default: "Debrd Wiki",
    },
    description:
        "A community-driven wiki that aims to provide information on the various debrid services and projects related to it such as Zurg, Riven, Plex Debrid, and more.",
    openGraph: {
        images: "/cover.png",
        title: {
            template: "%s | Debrid Wiki",
            default: "Debrid Wiki",
        },
        url: "https://debrid.wiki",
        siteName: "Debrid Wiki",
        description:
            "A community-driven wiki that aims to provide information on the various debrid services and projects related to it such as Zurg, Riven, Plex Debrid, and more.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Debrid Wiki",
        description:
            "A community-driven wiki that aims to provide information on the various debrid services and projects related to it such as Zurg, Riven, Plex Debrid, and more.",
        images: "/cover.png",
    },
    metadataBase: baseUrl,
    applicationName: "Debrid Wiki",
    robots: {
        index: true,
        follow: true,
    },
    icons: { icon: "/logo.png", apple: "/apple-touch-icon.png" },
};

export const viewport: Viewport = {
    themeColor: [
        { media: "(prefers-color-scheme: dark)", color: "#707070" },
        { media: "(prefers-color-scheme: light)", color: "#f5f5f3" },
    ],
    colorScheme: "dark light",
    width: "device-width",
    initialScale: 1,
};

