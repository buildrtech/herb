import { HTMLAttributeNode } from "@herb-tools/core";
import type { ERBNode } from "@herb-tools/core";
/**
 * Interface that the delegate must implement to provide
 * ERB reconstruction capabilities to the AttributeRenderer.
 */
export interface AttributeRendererDelegate {
    reconstructERBNode(node: ERBNode, withFormatting: boolean): string;
}
/**
 * AttributeRenderer converts HTMLAttributeNode AST nodes into formatted strings.
 * It handles class attribute wrapping, multiline attribute formatting,
 * quote normalization, and token list attribute spacing.
 */
export declare class AttributeRenderer {
    private delegate;
    private maxLineLength;
    private indentWidth;
    private noSplitClasses;
    currentAttributeName: string | null;
    indentLevel: number;
    constructor(delegate: AttributeRendererDelegate, maxLineLength: number, indentWidth: number, noSplitClasses?: boolean);
    /**
     * Check if we're currently processing a token list attribute that needs spacing
     */
    get isInTokenListAttribute(): boolean;
    /**
     * Render attributes as a space-separated string
     */
    renderAttributesString(attributes: HTMLAttributeNode[], tagName: string): string;
    /**
     * Determine if a tag should be rendered inline based on attribute count and other factors
     */
    shouldRenderInline(totalAttributeCount: number, inlineLength: number, indentLength: number, maxLineLength?: number, hasComplexERB?: boolean, hasMultilineAttributes?: boolean, attributes?: HTMLAttributeNode[]): boolean;
    wouldClassAttributeBeMultiline(content: string, indentLength: number): boolean;
    getAttributeName(attribute: HTMLAttributeNode): string;
    getAttributeValue(attribute: HTMLAttributeNode): string;
    hasMultilineAttributes(attributes: HTMLAttributeNode[]): boolean;
    formatClassAttribute(content: string, name: string, equals: string, open_quote: string, close_quote: string): string;
    isFormattableAttribute(attributeName: string, tagName: string): boolean;
    formatMultilineAttribute(content: string, name: string, open_quote: string, close_quote: string): string;
    formatMultilineAttributeValue(lines: string[]): string;
    breakTokensIntoLines(tokens: string[], currentIndent: number, separator?: string): string[];
    renderAttribute(attribute: HTMLAttributeNode, tagName: string): string;
}
