import { describe, test, expect, beforeAll } from "vitest"
import { Herb } from "@herb-tools/node-wasm"
import { Formatter } from "../../src"

import dedent from "dedent"

let formatter: Formatter

describe("Block Elements with Inline Content", () => {
  beforeAll(async () => {
    await Herb.load()

    formatter = new Formatter(Herb, {
      indentWidth: 2,
      maxLineLength: 80
    })
  })

  test("h1 with text and ERB stays inline when short", () => {
    const source = dedent`
      <h1>Welcome <%= user_data[:name] %></h1>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <h1>Welcome <%= user_data[:name] %></h1>
    `)
  })

  test("p with text and ERB stays inline when short", () => {
    const source = dedent`
      <p>Age: <%= user_data[:age] %></p>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <p>Age: <%= user_data[:age] %></p>
    `)
  })

  test("div with only text stays inline when short", () => {
    const source = dedent`
      <div class="footer">Done</div>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <div class="footer">Done</div>
    `)
  })

  test("element with attributes and source-inline text preserves source layout", () => {
    const buildrFormatter = new Formatter(Herb, {
      indentWidth: 2,
      maxLineLength: 80,
      noSplitClasses: true
    })
    const source = dedent`
      <p class="text-xs font-medium text-gray-500 dark:text-gray-400">Credit balance</p>
    `

    expect(buildrFormatter.format(source)).toEqual(source)
  })

  test("element with attributes and source-inline ERB preserves source layout", () => {
    const buildrFormatter = new Formatter(Herb, {
      indentWidth: 2,
      maxLineLength: 80,
      noSplitClasses: true
    })
    const source = dedent`
      <div>
        <div>
          <p class="text-gray-500"><%= number_with_delimiter(diff.from.quantity) %></p>
        </div>
      </div>
    `

    expect(buildrFormatter.format(source)).toEqual(source)
  })

  test("multiline inline text with ERB preserves source layout", () => {
    const source = dedent`
      <h3 class="text-gray-900">Division
        <%= division %></h3>
    `

    expect(formatter.format(source)).toEqual(source)
  })

  test("div with mixed text and inline elements stays inline when short", () => {
    const source = dedent`
      <div>complex <span>nested</span> content</div>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <div>complex <span>nested</span> content</div>
    `)
  })

  test("p with mixed text and inline elements stays inline when short", () => {
    const source = dedent`
      <p>complex <span>nested</span> content</p>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <p>complex <span>nested</span> content</p>
    `)
  })

  test("div with nested block elements splits", () => {
    const source = dedent`
      <div>hello <div>nested block</div> world</div>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <div>
        hello
        <div>nested block</div>
        world
      </div>
    `)
  })

  test("h1 with very long content splits", () => {
    const source = dedent`
      <h1>This is a very very very very very long title that exceeds the max line length</h1>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <h1>
        This is a very very very very very long title that exceeds the max line length
      </h1>
    `)
  })

  test("h1 with very long content splits text across multiple lines", () => {
    const source = dedent`
      <h1>This is a very very very very very long title that exceeds the max line length so long that it needs two lines</h1>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <h1>
        This is a very very very very very long title that exceeds the max line length
        so long that it needs two lines
      </h1>
    `)
  })

  test("span with ERB conditionals stays inline when short", () => {
    const source = dedent`
      <span <% if active? %> class="active" <% end %>>Text</span>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <span <% if active? %> class="active" <% end %>>Text</span>
    `)
  })

  test("span with ERB conditionals stays inline when short", () => {
    const source = dedent`
      <span class="<% if active? %>active<% else %>inactive<% end %>">Text</span>
    `
    const result = formatter.format(source)
    expect(result).toEqual(dedent`
      <span class="<% if active? %> active <% else %> inactive <% end %>">Text</span>
    `)
  })
})
