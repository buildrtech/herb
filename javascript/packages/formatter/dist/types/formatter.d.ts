import type { Config } from "@herb-tools/config";
import type { HerbBackend, ParseOptions } from "@herb-tools/core";
import type { FormatOptions } from "./options.js";
/**
 * Formatter uses a Herb Backend to parse the source and then
 * formats the resulting AST into a well-indented, wrapped string.
 */
export declare class Formatter {
    private herb;
    private options;
    private parseOptions;
    /**
     * Creates a Formatter instance from a Config object (recommended).
     *
     * @param herb - The Herb backend instance for parsing
     * @param config - Optional Config instance for formatter options
     * @param options - Additional options to override config
     * @returns A configured Formatter instance
     */
    static from(herb: HerbBackend, config?: Config, options?: FormatOptions): Formatter;
    /**
     * Creates a new Formatter instance.
     *
     * @param herb - The Herb backend instance for parsing
     * @param options - Format options (including rewriters)
     */
    constructor(herb: HerbBackend, options?: FormatOptions, parseOptions?: ParseOptions);
    /**
     * Format a source string, optionally overriding format options per call.
     */
    format(source: string, options?: FormatOptions, filePath?: string): string;
    private parse;
}
