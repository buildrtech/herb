import { Printer } from "@herb-tools/printer";
import type { ERBNode } from "@herb-tools/core";
import type { FormatOptions } from "./options.js";
import type { TextFlowDelegate } from "./text-flow-engine.js";
import type { AttributeRendererDelegate } from "./attribute-renderer.js";
import { ParseResult, Node, DocumentNode, HTMLOpenTagNode, HTMLConditionalOpenTagNode, HTMLCloseTagNode, HTMLElementNode, HTMLConditionalElementNode, HTMLAttributeNode, HTMLAttributeValueNode, HTMLAttributeNameNode, HTMLTextNode, HTMLCommentNode, HTMLDoctypeNode, ERBContentNode, ERBBlockNode, ERBEndNode, ERBElseNode, ERBIfNode, ERBWhenNode, ERBCaseNode, ERBCaseMatchNode, ERBWhileNode, ERBUntilNode, ERBForNode, ERBRescueNode, ERBEnsureNode, ERBBeginNode, ERBUnlessNode, ERBYieldNode, ERBInNode, ERBRenderNode, RubyRenderKeywordsNode, RubyParameterNode, RubyRenderLocalNode, ERBOpenTagNode, HTMLVirtualCloseTagNode, XMLDeclarationNode, CDATANode, Token } from "@herb-tools/core";
/**
 * Printer traverses the Herb AST using the Visitor pattern
 * and emits a formatted string with proper indentation, line breaks, and attribute wrapping.
 */
export declare class FormatPrinter extends Printer implements TextFlowDelegate, AttributeRendererDelegate {
    /**
     * @deprecated integrate indentWidth into this.options and update FormatOptions to extend from @herb-tools/printer options
     */
    private indentWidth;
    /**
     * @deprecated integrate maxLineLength into this.options and update FormatOptions to extend from @herb-tools/printer options
     */
    maxLineLength: number;
    /**
     * @deprecated refactor to use @herb-tools/printer infrastructre (or rework printer use push and this.lines)
     */
    private lines;
    private indentLevel;
    private inlineMode;
    private inContentPreservingContext;
    private inConditionalOpenTagContext;
    private elementStack;
    private elementFormattingAnalysis;
    private nodeIsMultiline;
    private stringLineCount;
    private textFlow;
    private attributeRenderer;
    private spacingAnalyzer;
    private collectedHerbDisable;
    source: string;
    constructor(source: string, options: Required<FormatOptions>);
    print(input: Node | ParseResult | Token): string;
    private spliceHerbDisableComments;
    private findOutputLineForHerbDisable;
    private getSearchableContentForNode;
    /**
     * Get the current element (top of stack)
     */
    private get currentElement();
    /**
     * Get the current tag name from the current element context
     */
    private get currentTagName();
    /**
     * Append text to the last line instead of creating a new line
     */
    private pushToLastLine;
    /**
     * Capture output from a callback into a separate lines array
     * Useful for testing what output would be generated without affecting the main output
     */
    private capture;
    /**
     * Track a boundary node's multiline status by comparing line count before/after rendering.
     */
    private trackBoundary;
    /**
     * Capture all nodes that would be visited during a callback
     * Returns a flat list of all nodes without generating any output
     */
    private captureNodes;
    /**
     * @deprecated refactor to use @herb-tools/printer infrastructre (or rework printer use push and this.lines)
     */
    push(line: string): void;
    /**
     * @deprecated refactor to use @herb-tools/printer infrastructre (or rework printer use push and this.lines)
     */
    pushWithIndent(line: string): void;
    private withIndent;
    private withInlineMode;
    private withContentPreserving;
    get indent(): string;
    /**
     * Format ERB content with proper spacing around the inner content.
     * Returns empty string if content is empty, otherwise adds a leading space
     * and a trailing space (or newline for heredoc content starting with "<<").
     */
    private formatERBContent;
    /**
     * Count total attributes including those inside ERB conditionals
     */
    private getTotalAttributeCount;
    /**
     * Extract inline nodes (non-attribute, non-whitespace) from a list of nodes
     */
    private extractInlineNodes;
    /**
     * Render multiline attributes for a tag
     */
    private renderMultilineAttributes;
    /**
     * Reconstruct the text representation of an ERB node
     * @param withFormatting - if true, format the content; if false, preserve original
     */
    reconstructERBNode(node: ERBNode, withFormatting?: boolean): string;
    /**
     * Print an ERB tag (<% %> or <%= %>) with single spaces around inner content.
     */
    printERBNode(node: ERBNode): void;
    visitDocumentNode(node: DocumentNode): void;
    visitHTMLElementNode(node: HTMLElementNode): void;
    visitHTMLConditionalElementNode(node: HTMLConditionalElementNode): void;
    visitHTMLConditionalOpenTagNode(node: HTMLConditionalOpenTagNode): void;
    visitHTMLElementBody(body: Node[], element: HTMLElementNode): void;
    private visitContentPreservingBody;
    private visitInlineElementBody;
    /**
     * Visit element children with intelligent spacing logic
     *
     * Tracks line positions and immediately splices blank lines after rendering each child.
     */
    private visitElementChildren;
    private visitTextFlowRunInChildren;
    visitHTMLOpenTagNode(node: HTMLOpenTagNode): void;
    visitHTMLCloseTagNode(node: HTMLCloseTagNode): void;
    visitHTMLTextNode(node: HTMLTextNode): void;
    visitHTMLAttributeNode(node: HTMLAttributeNode): void;
    visitHTMLAttributeNameNode(node: HTMLAttributeNameNode): void;
    visitHTMLAttributeValueNode(node: HTMLAttributeValueNode): void;
    visitHTMLCommentNode(node: HTMLCommentNode): void;
    visitERBCommentNode(node: ERBContentNode): void;
    visitHTMLDoctypeNode(node: HTMLDoctypeNode): void;
    visitXMLDeclarationNode(node: XMLDeclarationNode): void;
    visitCDATANode(node: CDATANode): void;
    visitERBContentNode(node: ERBContentNode): void;
    visitERBOpenTagNode(node: ERBOpenTagNode): void;
    visitHTMLVirtualCloseTagNode(_node: HTMLVirtualCloseTagNode): void;
    visitERBEndNode(node: ERBEndNode): void;
    visitERBRenderNode(node: ERBRenderNode): void;
    visitRubyRenderKeywordsNode(_node: RubyRenderKeywordsNode): void;
    visitRubyParameterNode(_node: RubyParameterNode): void;
    visitRubyRenderLocalNode(_node: RubyRenderLocalNode): void;
    visitERBYieldNode(node: ERBYieldNode): void;
    visitERBInNode(node: ERBInNode): void;
    visitERBCaseMatchNode(node: ERBCaseMatchNode): void;
    visitERBBlockNode(node: ERBBlockNode): void;
    visitERBIfNode(node: ERBIfNode): void;
    visitERBElseNode(node: ERBElseNode): void;
    visitERBWhenNode(node: ERBWhenNode): void;
    visitERBCaseNode(node: ERBCaseNode): void;
    visitERBBeginNode(node: ERBBeginNode): void;
    visitERBWhileNode(node: ERBWhileNode): void;
    visitERBUntilNode(node: ERBUntilNode): void;
    visitERBForNode(node: ERBForNode): void;
    visitERBRescueNode(node: ERBRescueNode): void;
    visitERBEnsureNode(node: ERBEnsureNode): void;
    visitERBUnlessNode(node: ERBUnlessNode): void;
    /**
     * Analyzes an HTMLElementNode and returns formatting decisions for all parts
     */
    private analyzeElementFormatting;
    /**
     * Determines if the open tag should be rendered inline
     */
    private shouldRenderOpenTagInline;
    /**
     * Determines if the element content should be rendered inline
     */
    private shouldRenderElementContentInline;
    /**
     * Determines if the close tag should be rendered inline (usually follows content decision)
     */
    private shouldRenderCloseTagInline;
    private fitsOnCurrentLine;
    private formatFrontmatter;
    /**
     * Append a child node to the last output line
     */
    private appendChildToLastLine;
    /**
     * Render an inline element as a string
     */
    renderInlineElementAsString(element: HTMLElementNode): string;
    /**
     * Render an ERB node as a string
     */
    renderERBAsString(node: ERBContentNode): string;
    /**
     * Try to render an inline element, returning the full inline string or null if it can't be inlined.
     */
    tryRenderInlineElement(element: HTMLElementNode): string | null;
    private renderInlineOpen;
    /**
     * Try to render a complete element inline including opening tag, children, and closing tag
     */
    private tryRenderInlineFull;
    /**
     * Try to render just the children inline (without tags)
     */
    private tryRenderChildrenInline;
    /**
     * Try to render children inline if they are simple enough.
     * Returns the inline string if possible, null otherwise.
     */
    private tryRenderInline;
    private renderChildrenInline;
}
