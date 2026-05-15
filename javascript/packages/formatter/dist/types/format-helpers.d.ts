import { Node, HTMLTextNode, HTMLElementNode, HTMLOpenTagNode, HTMLCloseTagNode, ERBContentNode } from "@herb-tools/core";
/**
 * Analysis result for HTMLElementNode formatting decisions
 */
export interface ElementFormattingAnalysis {
    openTagInline: boolean;
    elementContentInline: boolean;
    closeTagInline: boolean;
}
/**
 * Content unit represents a piece of content in text flow
 * Can be atomic (inline elements, ERB) or splittable (text)
 */
export interface ContentUnit {
    content: string;
    type: 'text' | 'inline' | 'erb' | 'block';
    isAtomic: boolean;
    breaksFlow: boolean;
}
/**
 * Content unit paired with its source AST node
 */
export interface ContentUnitWithNode {
    unit: ContentUnit;
    node: Node | null;
}
/**
 * ASCII whitespace pattern - use instead of \s to preserve Unicode whitespace
 * characters like NBSP (U+00A0) and full-width space (U+3000)
 */
export declare const ASCII_WHITESPACE: RegExp;
export declare const FORMATTABLE_ATTRIBUTES: Record<string, string[]>;
export declare const INLINE_ELEMENTS: Set<string>;
export declare const CONTENT_PRESERVING_ELEMENTS: Set<string>;
export declare const WHITESPACE_PRESERVING_CLASSES: string[];
export declare const WHITESPACE_PRESERVING_STYLE_VALUES: Set<string>;
export declare const SPACEABLE_CONTAINERS: Set<string>;
/**
 * Check if a node is non-whitespace (has meaningful content)
 */
export declare function isNonWhitespaceNode(node: Node): boolean;
/**
 * Find the previous meaningful (non-whitespace) sibling
 * Returns -1 if no meaningful sibling is found
 */
export declare function findPreviousMeaningfulSibling(siblings: Node[], currentIndex: number): number;
/**
 * Check if there's whitespace between two indices in children array
 */
export declare function hasWhitespaceBetween(children: Node[], startIndex: number, endIndex: number): boolean;
/**
 * Filter children to remove insignificant whitespace
 */
export declare function filterSignificantChildren(body: Node[]): Node[];
/**
 * Check if a word is standalone closing punctuation
 */
export declare function isClosingPunctuation(word: string): boolean;
/**
 * Check if a line ends with opening punctuation
 */
export declare function lineEndsWithOpeningPunctuation(line: string): boolean;
/**
 * Check if a string is an ERB tag
 */
export declare function isERBTag(text: string): boolean;
/**
 * Check if a string ends with an ERB tag
 */
export declare function endsWithERBTag(text: string): boolean;
/**
 * Check if a string starts with an ERB tag
 */
export declare function startsWithERBTag(text: string): boolean;
/**
 * Determine if space is needed between the current line and the next word
 */
export declare function needsSpaceBetween(currentLine: string, word: string): boolean;
/**
 * Build a line by adding a word with appropriate spacing
 */
export declare function buildLineWithWord(currentLine: string, word: string): string;
/**
 * Check if a node is an inline element or ERB node
 */
export declare function isInlineOrERBNode(node: Node): boolean;
/**
 * Check if an element should be treated as inline based on its tag name
 */
export declare function isInlineElement(tagName: string): boolean;
/**
 * Check if the current inline element is adjacent to a previous inline element (no whitespace between)
 */
export declare function isAdjacentToPreviousInline(siblings: Node[], index: number): boolean;
/**
 * Check if a node should be appended to the last line (for adjacent inline elements and punctuation)
 */
export declare function shouldAppendToLastLine(child: Node, siblings: Node[], index: number): boolean;
/**
 * Check if user-intentional spacing should be preserved (double newlines between elements)
 */
export declare function shouldPreserveUserSpacing(child: Node, siblings: Node[], index: number): boolean;
/**
 * Check if children contain any text content with newlines
 */
export declare function hasMultilineTextContent(children: Node[]): boolean;
/**
 * Check if all nested elements in the children are inline elements
 */
export declare function areAllNestedElementsInline(children: Node[]): boolean;
/**
 * Check if element has complex ERB control flow
 */
export declare function hasComplexERBControlFlow(inlineNodes: Node[]): boolean;
/**
 * Check if children contain mixed text and inline elements (like "text<em>inline</em>text")
 * or mixed ERB output and text (like "<%= value %> text")
 * This indicates content that should be formatted inline even with structural newlines
 */
export declare function hasMixedTextAndInlineContent(children: Node[]): boolean;
export declare function hasWhitespacePreservingStyle(element: HTMLElementNode): boolean;
export declare function isContentPreserving(element: HTMLElementNode | HTMLOpenTagNode | HTMLCloseTagNode): boolean;
/**
 * Count consecutive inline elements/ERB with no whitespace between them.
 * Starts from startIndex and skips indices in processedIndices.
 */
export declare function countAdjacentInlineElements(children: Node[], startIndex?: number, processedIndices?: Set<number>): number;
/**
 * Check if a node represents a block-level element
 */
export declare function isBlockLevelNode(node: Node): boolean;
/**
 * Check if an element is a line-breaking element (br or hr)
 */
export declare function isLineBreakingElement(node: Node): boolean;
/**
 * Normalize text by replacing multiple spaces with single space and trim
 * Then split into words
 */
export declare function normalizeAndSplitWords(text: string): string[];
/**
 * Check if text ends with whitespace
 */
export declare function endsWithWhitespace(text: string): boolean;
/**
 * Check if an ERB content node is a herb:disable comment
 */
export declare function isHerbDisableComment(node: Node): node is ERBContentNode & {
    tag_opening: {
        value: "<%#";
    };
};
/**
 * Check if a text node is YAML frontmatter (starts and ends with ---)
 */
export declare function isFrontmatter(node: Node): node is HTMLTextNode;
