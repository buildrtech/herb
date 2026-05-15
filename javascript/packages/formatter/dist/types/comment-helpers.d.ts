import { Node } from "@herb-tools/core";
/**
 * Result of formatting an ERB comment.
 * - `single-line`: the caller emits the text on a single line (using push or pushWithIndent)
 * - `multi-line`: the caller emits header, indented content lines, and footer separately
 */
export type ERBCommentResult = {
    type: 'single-line';
    text: string;
} | {
    type: 'multi-line';
    header: string;
    contentLines: string[];
    footer: string;
};
/**
 * Extract the raw inner text from HTML comment children.
 * Joins text/literal nodes by content and ERB nodes via IdentityPrinter.
 */
export declare function extractHTMLCommentContent(children: Node[]): string;
/**
 * Format the inner content of an HTML comment.
 *
 * Handles three cases:
 * 1. IE conditional comments (`[if ...` / `<![endif]`) — returned as-is
 * 2. Multiline comments — re-indented with relative indent preservation
 * 3. Single-line comments — wrapped with spaces: ` content `
 *
 * Returns null for IE conditional comments to signal the caller
 * should emit the raw content without reformatting.
 *
 * @param rawInner - The joined children content string (may be empty)
 * @param indentWidth - Number of spaces per indent level
 * @returns The formatted inner string, or null if rawInner is empty-ish
 */
export declare function formatHTMLCommentInner(rawInner: string, indentWidth: number): string;
/**
 * Format an ERB comment into either a single-line or multi-line result.
 *
 * @param open - The opening tag (e.g. "<%#")
 * @param content - The raw content string between open/close tags
 * @param close - The closing tag (e.g. "%>")
 * @returns A discriminated union describing how to render the comment
 */
export declare function formatERBCommentLines(open: string, content: string, close: string): ERBCommentResult;
