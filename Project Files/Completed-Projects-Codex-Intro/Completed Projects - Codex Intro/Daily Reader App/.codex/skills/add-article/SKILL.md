---
name: add-article
description: Research a requested topic, write a 200-250 word general-audience article, and add it to this React/Vite course project's src/data/articles.js file using the existing article data structure. Use when the user asks to add, create, research, or write a new article entry for the static article showcase data file.
---

# Add Article

## Workflow

1. Inspect `src/data/articles.js` before editing.
   - Preserve the existing exported data structure, property order, indentation, quote style, and template-literal content style.
   - Choose the next numeric `id` after the highest existing article id.
   - Use `author: "Editorial Team"` unless the user explicitly provides another author.
   - Use today's date from the runtime context in `YYYY-MM-DD` format unless the user provides a different date.

2. Research the requested topic before drafting.
   - Use reliable sources appropriate to the topic, preferring primary or authoritative sources.
   - For current, technical, scientific, medical, legal, or financial topics, verify facts with up-to-date sources.
   - Keep notes source-grounded, but do not add citations inside the article body unless the existing article style already does.

3. Draft the article.
   - Write for a general audience.
   - Keep `content` between 200 and 250 words.
   - Use accurate, cautious wording where experts still debate details.
   - Provide a concise `title` and `summary` matching the style of the existing entries.
   - Avoid unsupported claims, jargon-heavy explanations, and promotional tone.

4. Edit `src/data/articles.js`.
   - Append one new object to the existing array.
   - Do not add routing, API calls, localStorage, new dependencies, or unrelated features.
   - Do not rewrite existing article content unless the user explicitly asks.

5. Validate the change.
   - Count only the words in the new `content` field and confirm it is 200-250 words.
   - Run `npm run lint` when available.
   - In the final response, mention the added file, article word count, lint result, and sources used for research.

## Implementation Notes

- Use `apply_patch` for manual edits.
- If shell quoting makes word counting against template literals brittle, rerun with safer quoting or inspect the object another way.
- Keep the final response brief and focused on what changed and what was verified.
