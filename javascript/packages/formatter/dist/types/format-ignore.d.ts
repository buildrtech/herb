import type { Node } from "@herb-tools/core";
/**
 * Check if an ERB content node is a herb:formatter ignore comment
 */
export declare function isHerbFormatterIgnoreComment(node: Node): boolean;
/**
 * Check if the document contains a herb:formatter ignore directive anywhere.
 */
export declare function hasFormatterIgnoreDirective(node: Node): boolean;
