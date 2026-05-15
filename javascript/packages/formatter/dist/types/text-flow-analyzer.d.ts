import { Node, HTMLElementNode, ERBContentNode } from "@herb-tools/core";
import type { ContentUnitWithNode } from "./format-helpers.js";
/**
 * Interface that the delegate must implement to provide
 * rendering capabilities to the TextFlowAnalyzer.
 */
export interface TextFlowAnalyzerDelegate {
    tryRenderInlineElement(element: HTMLElementNode): string | null;
    renderERBAsString(node: ERBContentNode): string;
}
/**
 * TextFlowAnalyzer converts AST nodes into the ContentUnitWithNode[]
 * intermediate representation used by the TextFlowEngine for rendering.
 */
export declare class TextFlowAnalyzer {
    private delegate;
    constructor(delegate: TextFlowAnalyzerDelegate);
    buildContentUnits(children: Node[]): ContentUnitWithNode[];
    private processTextNode;
    private processInlineElement;
    private processERBContentNode;
}
