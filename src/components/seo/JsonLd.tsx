import { jsonLd } from "@/lib/seo";

/**
 * Renders one or more schema.org objects into a single JSON-LD <script> tag.
 * Server component — safe to drop anywhere in a page tree.
 */
export function JsonLd({ schemas }: { schemas: object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={jsonLd(...schemas)}
    />
  );
}
