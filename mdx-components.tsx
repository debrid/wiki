import type { MDXComponents } from 'mdx/types';
import defaultComponents from 'fumadocs-ui/mdx';
import ImageSection from "@/app/components/ImageSection"

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ImageSection,
    ...defaultComponents,
    ...components,
  };
}
