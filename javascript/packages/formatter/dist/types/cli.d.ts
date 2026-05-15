export declare class CLI {
    protected projectPath: string;
    protected determineProjectPath(patterns: string[]): void;
    private usage;
    private parseArguments;
    run(): Promise<void>;
    private readStdin;
    private resolvePatternToFiles;
}
