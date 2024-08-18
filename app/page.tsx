import { buttonVariants } from "@/app/components/ui/button";
import { Book, Github } from "lucide-react";
import Discord from "@/app/components/logos/discord";
import { cn } from "@/app/utils/cn";

export default function HomePage() {
    return (
        <main className="flex h-screen flex-col justify-center text-center p-8 md:px-24 lg:px-32">
            <h1 className="text-2xl md:text-3xl font-semibold">Debrid Wiki</h1>
            <p className="text-center mt-1 max-w-2xl w-full mx-auto text-sm md:text-base text-fd-muted-foreground">
                A community-driven wiki that aims to provide information on the
                various debrid services and projects related to it such as Zurg,
                Riven, Plex Debrid, and more.
            </p>
            <div className="flex flex-wrap gap-2 items-center justify-center mt-8">
                <a
                    href="/docs"
                    className={cn(
                        buttonVariants({
                            variant: "secondary",
                            size: "lg",
                            className:
                                "text-xs md:text-base gap-1.5 max-w-max text-fd-foreground",
                        })
                    )}
                >
                    <Book className="size-3" />
                    Documentation
                </a>
                <a
                    href={`https://github.com/debrid/wiki`}
                    target="_blank"
                    rel="noreferrer noopener"
                    className={cn(
                        buttonVariants({
                            variant: "secondary",
                            size: "lg",
                            className:
                                "text-xs md:text-base gap-1.5 max-w-max text-fd-foreground",
                        })
                    )}
                >
                    <Github className="size-3" />
                    Github
                </a>
            </div>
        </main>
    );
}

