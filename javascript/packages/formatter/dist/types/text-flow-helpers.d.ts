import { Node, HTMLTextNode } from "@herb-tools/core";
import type { ContentUnitWithNode } from "./format-helpers.js";
/**
 * Check if a node participates in text flow
 */
export declare function isTextFlowNode(node: Node): boolean;
/**
 * Check if a node is whitespace that can appear within a text flow run
 */
export declare function isTextFlowWhitespace(node: Node): boolean;
/**
 * Collect a run of text flow nodes starting at the given index.
 * Returns the nodes in the run and the index after the last node.
 * Returns null if the run doesn't qualify (needs 2+ text flow nodes with both text and atomic content).
 */
export declare function collectTextFlowRun(body: Node[], startIndex: number): {
    nodes: Node[];
    endIndex: number;
} | null;
/**
 * Check if children represent a text flow context
 * (has text content mixed with inline elements or ERB)
 */
export declare function isInTextFlowContext(children: Node[]): boolean;
/**
 * Try to merge text that follows an atomic unit (ERB/inline) with no whitespace.
 * Merges the first word of the text into the preceding atomic unit.
 * Returns true if merge was performed.
 */
export declare function tryMergeTextAfterAtomic(result: ContentUnitWithNode[], textNode: HTMLTextNode): boolean;
/**
 * Try to merge an atomic unit (ERB/inline) with preceding text that has no whitespace.
 * Splits preceding text, merges last word with atomic content.
 * Returns true if merge was performed.
 */
export declare function tryMergeAtomicAfterText(result: ContentUnitWithNode[], children: Node[], lastProcessedIndex: number, atomicContent: string, atomicType: 'erb' | 'inline', atomicNode: Node): boolean;
/**
 * Check if there's whitespace between current node and last processed node
 */
export declare function hasWhitespaceBeforeNode(children: Node[], lastProcessedIndex: number, currentIndex: number, currentNode: Node): boolean;
/**
 * Check if last unit in result ends with whitespace
 */
export declare function lastUnitEndsWithWhitespace(result: ContentUnitWithNode[]): boolean;
/**
 * Wrap remaining words that don't fit on the current line.
 * Returns the wrapped lines with proper indentation.
 */
export declare function wrapRemainingWords(words: string[], wrapWidth: number, indent: string): string[];
/**
 * Try to merge text starting with punctuation to inline content.
 * Returns object with merged content and whether processing should stop.
 */
export declare function tryMergePunctuationText(inlineContent: string, trimmedText: string, wrapWidth: number, indent: string): {
    mergedContent: string;
    shouldStop: boolean;
    wrappedLines: string[];
};
