import { getPage, getPages } from "@/app/source";
import type { Metadata } from "next";
import { DocsPage, DocsBody } from "fumadocs-ui/page";
import { notFound } from "next/navigation";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import { Edit } from "lucide-react";
import { cn } from "@/app/utils/cn";
import { buttonVariants } from "@/app/components/ui/button";
import { Callout } from "fumadocs-ui/components/callout";

export default async function Page({
    params,
}: {
    params: { slug?: string[] };
}) {
    const page = getPage(params.slug);

    if (page == null) {
        notFound();
    }

    const MDX = page.data.exports.default;
    const path = `/content/docs/${page.file.path}`;

    const footer = (
        <a
            href={`https://github.com/debrid/wiki/blob/main/${path}`}
            target="_blank"
            rel="noreferrer noopener"
            className={cn(
                buttonVariants({
                    variant: "secondary",
                    size: "sm",
                    className: "text-xs gap-1.5",
                })
            )}
        >
            <Edit className="size-3" />
            Edit on Github
        </a>
    );

    return (
        <DocsPage
            toc={page.data.exports.toc}
            full={page.data.full}
            tableOfContent={{
                footer,
            }}
        >
            <DocsBody>
                <h1>{page.data.title}</h1>
                <InlineTOC items={page.data.exports.toc} />
                <MDX
                    components={{
                        Callout,
                    }}
                />
            </DocsBody>
        </DocsPage>
    );
}

export async function generateStaticParams() {
    return getPages().map((page) => ({
        slug: page.slugs,
    }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
    const page = getPage(params.slug);

    if (page == null) notFound();

    return {
        title: page.data.title,
        description: page.data.description,
    } satisfies Metadata;
}

