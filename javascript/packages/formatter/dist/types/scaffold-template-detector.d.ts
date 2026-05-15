import { Visitor } from "@herb-tools/core";
import type { ERBContentNode, ParseResult } from "@herb-tools/core";
export declare const isScaffoldTemplate: (result: ParseResult) => boolean;
/**
 * Visitor that detects if the AST represents a Rails scaffold template.
 * Scaffold templates contain escaped ERB tags (<%%= or <%%)
 * and should not be formatted to preserve their exact structure.
 */
export declare class ScaffoldTemplateDetector extends Visitor {
    hasEscapedERB: boolean;
    visitERBContentNode(node: ERBContentNode): void;
}
