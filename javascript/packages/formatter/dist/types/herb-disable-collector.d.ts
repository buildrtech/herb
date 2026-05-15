import { Visitor, Node, ERBContentNode } from "@herb-tools/core";
export interface CollectedHerbDisable {
    node: ERBContentNode;
    anchor: Node | null;
    parentNode: Node;
    commentText: string;
}
/**
 * HerbDisableCollector walks the AST before formatting, collects all
 * herb:disable comment nodes, finds their anchor nodes (the preceding
 * sibling on the same source line), and removes them from the AST.
 *
 * After formatting, the collected comments are spliced back onto the
 * correct output lines based on where their anchors ended up.
 */
export declare class HerbDisableCollector extends Visitor {
    readonly collected: CollectedHerbDisable[];
    visitChildNodes(node: Node): void;
    private processArraysOnNode;
    private processArray;
    private findAnchor;
}
