import { Node, HTMLElementNode } from "@herb-tools/core";
/**
 * SpacingAnalyzer determines when blank lines should be inserted between
 * sibling elements. It implements the "rule of three" intelligent spacing
 * system: adds spacing between 3+ meaningful siblings, respects semantic
 * groupings, groups comments with following elements, and preserves
 * user-added spacing.
 */
export declare class SpacingAnalyzer {
    private nodeIsMultiline;
    private tagGroupsCache;
    private allSingleLineCache;
    constructor(nodeIsMultiline: Map<Node, boolean>);
    clear(): void;
    /**
     * Determine if spacing should be added between sibling elements
     *
     * This implements the "rule of three" intelligent spacing system:
     * - Adds spacing between 3 or more meaningful siblings
     * - Respects semantic groupings (e.g., ul/li, nav/a stay tight)
     * - Groups comments with following elements
     * - Preserves user-added spacing
     *
     * @param parentElement - The parent element containing the siblings
     * @param siblings - Array of all sibling nodes
     * @param currentIndex - Index of the current node being evaluated
     * @returns true if spacing should be added before the current element
     */
    shouldAddSpacingBetweenSiblings(parentElement: HTMLElementNode | null, siblings: Node[], currentIndex: number): boolean;
    /**
     * Check if there's a blank line (double newline) in the nodes at the given index
     */
    hasBlankLineBetween(body: Node[], index: number): boolean;
    /**
     * Check if a node will render as multiple lines when formatted.
     */
    private isMultilineElement;
    /**
     * Get a grouping key for a node (tag name for HTML, ERB type for ERB)
     */
    private getGroupingKey;
    /**
     * Detect groups of consecutive same-tag/same-type single-line elements
     * Returns a map of index -> group info for efficient lookup
     */
    private detectTagGroups;
}
