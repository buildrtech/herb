import { Node, HTMLElementNode } from "@herb-tools/core";
import type { TextFlowAnalyzerDelegate } from "./text-flow-analyzer.js";
/**
 * Interface that the FormatPrinter implements to provide
 * rendering capabilities to the TextFlowEngine.
 */
export interface TextFlowDelegate extends TextFlowAnalyzerDelegate {
    readonly indent: string;
    readonly maxLineLength: number;
    push(line: string): void;
    pushWithIndent(line: string): void;
    renderInlineElementAsString(element: HTMLElementNode): string;
    visit(node: Node): void;
}
/**
 * TextFlowEngine handles the formatting of mixed text + inline elements + ERB content.
 *
 * It orchestrates analysis (via TextFlowAnalyzer) and rendering phases:
 * groups adjacent inline elements, and wraps words to fit within line length constraints.
 */
export declare class TextFlowEngine {
    private delegate;
    private analyzer;
    constructor(delegate: TextFlowDelegate);
    visitTextFlowChildren(children: Node[]): void;
    isInTextFlowContext(children: Node[]): boolean;
    collectTextFlowRun(body: Node[], startIndex: number): {
        nodes: Node[];
        endIndex: number;
    } | null;
    isTextFlowNode(node: Node): boolean;
    private renderAdjacentInlineElements;
    private visitRemainingChildrenAsTextFlow;
    private buildAndWrapTextFlow;
    private flushWords;
    private wrapAndPushWords;
}
