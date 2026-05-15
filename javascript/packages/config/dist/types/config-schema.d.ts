import { z } from "zod";
export declare const SeveritySchema: z.ZodEnum<{
    error: "error";
    warning: "warning";
    info: "info";
    hint: "hint";
}>;
export declare const SeverityConfigSchema: z.ZodUnion<readonly [z.ZodEnum<{
    error: "error";
    warning: "warning";
    info: "info";
    hint: "hint";
}>, z.ZodObject<{
    editor: z.ZodEnum<{
        error: "error";
        warning: "warning";
        info: "info";
        hint: "hint";
    }>;
    cli: z.ZodEnum<{
        error: "error";
        warning: "warning";
        info: "info";
        hint: "hint";
    }>;
}, z.core.$strict>]>;
export declare const FilesConfigSchema: z.ZodOptional<z.ZodObject<{
    include: z.ZodOptional<z.ZodArray<z.ZodString>>;
    exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strict>>;
export declare const RuleConfigSchema: z.ZodOptional<z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    severity: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
        error: "error";
        warning: "warning";
        info: "info";
        hint: "hint";
    }>, z.ZodObject<{
        editor: z.ZodEnum<{
            error: "error";
            warning: "warning";
            info: "info";
            hint: "hint";
        }>;
        cli: z.ZodEnum<{
            error: "error";
            warning: "warning";
            info: "info";
            hint: "hint";
        }>;
    }, z.core.$strict>]>>;
    include: z.ZodOptional<z.ZodArray<z.ZodString>>;
    only: z.ZodOptional<z.ZodArray<z.ZodString>>;
    exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
}, z.core.$strip>>;
export declare const LinterConfigSchema: z.ZodOptional<z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    failLevel: z.ZodOptional<z.ZodEnum<{
        error: "error";
        warning: "warning";
        info: "info";
        hint: "hint";
    }>>;
    include: z.ZodOptional<z.ZodArray<z.ZodString>>;
    exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
    rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        severity: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
            error: "error";
            warning: "warning";
            info: "info";
            hint: "hint";
        }>, z.ZodObject<{
            editor: z.ZodEnum<{
                error: "error";
                warning: "warning";
                info: "info";
                hint: "hint";
            }>;
            cli: z.ZodEnum<{
                error: "error";
                warning: "warning";
                info: "info";
                hint: "hint";
            }>;
        }, z.core.$strict>]>>;
        include: z.ZodOptional<z.ZodArray<z.ZodString>>;
        only: z.ZodOptional<z.ZodArray<z.ZodString>>;
        exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strip>>>;
}, z.core.$strict>>;
export declare const FormatterConfigSchema: z.ZodOptional<z.ZodObject<{
    enabled: z.ZodOptional<z.ZodBoolean>;
    include: z.ZodOptional<z.ZodArray<z.ZodString>>;
    exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
    indentWidth: z.ZodOptional<z.ZodNumber>;
    maxLineLength: z.ZodOptional<z.ZodNumber>;
    noSplitClasses: z.ZodOptional<z.ZodBoolean>;
    rewriter: z.ZodOptional<z.ZodObject<{
        pre: z.ZodOptional<z.ZodArray<z.ZodString>>;
        post: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
}, z.core.$strict>>;
export declare const ValidatorsConfigSchema: z.ZodOptional<z.ZodObject<{
    security: z.ZodOptional<z.ZodBoolean>;
    nesting: z.ZodOptional<z.ZodBoolean>;
    accessibility: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>>;
export declare const FrameworkSchema: z.ZodOptional<z.ZodEnum<{
    ruby: "ruby";
    actionview: "actionview";
    hanami: "hanami";
    sinatra: "sinatra";
}>>;
export declare const TemplateEngineSchema: z.ZodOptional<z.ZodEnum<{
    erubi: "erubi";
    erb: "erb";
    herb: "herb";
}>>;
export declare const ParserOptionsSchema: z.ZodOptional<z.ZodObject<{
    strict: z.ZodOptional<z.ZodBoolean>;
    render_nodes: z.ZodOptional<z.ZodBoolean>;
    strict_locals: z.ZodOptional<z.ZodBoolean>;
}, z.core.$strict>>;
export declare const EngineConfigSchema: z.ZodOptional<z.ZodObject<{
    optimize: z.ZodOptional<z.ZodBoolean>;
    debug: z.ZodOptional<z.ZodBoolean>;
    parser_options: z.ZodOptional<z.ZodObject<{
        strict: z.ZodOptional<z.ZodBoolean>;
        render_nodes: z.ZodOptional<z.ZodBoolean>;
        strict_locals: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
    validators: z.ZodOptional<z.ZodObject<{
        security: z.ZodOptional<z.ZodBoolean>;
        nesting: z.ZodOptional<z.ZodBoolean>;
        accessibility: z.ZodOptional<z.ZodBoolean>;
    }, z.core.$strict>>;
}, z.core.$strict>>;
export declare const HerbConfigSchema: z.ZodObject<{
    version: z.ZodString;
    framework: z.ZodOptional<z.ZodEnum<{
        ruby: "ruby";
        actionview: "actionview";
        hanami: "hanami";
        sinatra: "sinatra";
    }>>;
    template_engine: z.ZodOptional<z.ZodEnum<{
        erubi: "erubi";
        erb: "erb";
        herb: "herb";
    }>>;
    files: z.ZodOptional<z.ZodObject<{
        include: z.ZodOptional<z.ZodArray<z.ZodString>>;
        exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
    }, z.core.$strict>>;
    engine: z.ZodOptional<z.ZodObject<{
        optimize: z.ZodOptional<z.ZodBoolean>;
        debug: z.ZodOptional<z.ZodBoolean>;
        parser_options: z.ZodOptional<z.ZodObject<{
            strict: z.ZodOptional<z.ZodBoolean>;
            render_nodes: z.ZodOptional<z.ZodBoolean>;
            strict_locals: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
        validators: z.ZodOptional<z.ZodObject<{
            security: z.ZodOptional<z.ZodBoolean>;
            nesting: z.ZodOptional<z.ZodBoolean>;
            accessibility: z.ZodOptional<z.ZodBoolean>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
    linter: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        failLevel: z.ZodOptional<z.ZodEnum<{
            error: "error";
            warning: "warning";
            info: "info";
            hint: "hint";
        }>>;
        include: z.ZodOptional<z.ZodArray<z.ZodString>>;
        exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
        rules: z.ZodOptional<z.ZodRecord<z.ZodString, z.ZodObject<{
            enabled: z.ZodOptional<z.ZodBoolean>;
            severity: z.ZodOptional<z.ZodUnion<readonly [z.ZodEnum<{
                error: "error";
                warning: "warning";
                info: "info";
                hint: "hint";
            }>, z.ZodObject<{
                editor: z.ZodEnum<{
                    error: "error";
                    warning: "warning";
                    info: "info";
                    hint: "hint";
                }>;
                cli: z.ZodEnum<{
                    error: "error";
                    warning: "warning";
                    info: "info";
                    hint: "hint";
                }>;
            }, z.core.$strict>]>>;
            include: z.ZodOptional<z.ZodArray<z.ZodString>>;
            only: z.ZodOptional<z.ZodArray<z.ZodString>>;
            exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strip>>>;
    }, z.core.$strict>>;
    formatter: z.ZodOptional<z.ZodObject<{
        enabled: z.ZodOptional<z.ZodBoolean>;
        include: z.ZodOptional<z.ZodArray<z.ZodString>>;
        exclude: z.ZodOptional<z.ZodArray<z.ZodString>>;
        indentWidth: z.ZodOptional<z.ZodNumber>;
        maxLineLength: z.ZodOptional<z.ZodNumber>;
        noSplitClasses: z.ZodOptional<z.ZodBoolean>;
        rewriter: z.ZodOptional<z.ZodObject<{
            pre: z.ZodOptional<z.ZodArray<z.ZodString>>;
            post: z.ZodOptional<z.ZodArray<z.ZodString>>;
        }, z.core.$strict>>;
    }, z.core.$strict>>;
}, z.core.$strict>;
export type HerbConfigSchemaType = z.infer<typeof HerbConfigSchema>;
export type RuleConfigSchemaType = z.infer<typeof RuleConfigSchema>;
export type FilesConfigSchemaType = z.infer<typeof FilesConfigSchema>;
export type SeveritySchemaType = z.infer<typeof SeveritySchema>;
