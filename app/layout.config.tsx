import { type DocsLayoutProps } from "fumadocs-ui/layout";
import { type HomeLayoutProps } from "fumadocs-ui/home-layout";
import { pageTree } from "@/app/source";
import Discord from "@/app/components/logos/discord";

// shared configuration
export const baseOptions: HomeLayoutProps = {
    nav: {
        title: "Debrid Wiki",
        transparentMode: "top",
    },
    links: [
        {
            text: "Documentation",
            url: "/docs",
            active: "nested-url",
        },
        {
            icon: <Discord />,
            text: "Discord",
            url: "https://discord.debrid.wiki",
        },
    ],
    githubUrl: "https://github.com/debrid/wiki",
};

// docs layout configuration
export const docsOptions: DocsLayoutProps = {
    ...baseOptions,
    tree: pageTree,
};

