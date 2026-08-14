# Content Guide

## Article data structure

All articles live in `src/data/articles.js` as elements of a plain JavaScript array exported as the default export.

Each article object has the following shape:

```js
{
  id: 1,                    // number — unique identifier; increment for each new article
  title: "...",             // string — displayed on the card and as the article heading
  summary: "...",           // string — one sentence; shown on the card only
  content: `...`,           // string — full article text; shown in the detail view
  author: "Editorial Team", // string — displayed on card and detail view
  date: "2025-11-15",       // string — ISO 8601 date (YYYY-MM-DD)
}
```

## How to add a new article

1. Open `src/data/articles.js`.
2. Copy the shape above and fill in all fields.
3. Give it the next available `id` (increment the highest existing id by 1).
4. Add the object to the `articles` array.
5. Save the file — the dev server will hot-reload and the new card will appear on the home page.

No imports, no API calls, no database changes needed.

## Content guidelines

- **summary**: One sentence, ≤ 160 characters. Should make a reader want to click.
- **content**: Plain prose paragraphs separated by a blank line (`\n\n`). The detail view splits on `\n\n` to render each paragraph as its own `<p>` tag. Aim for 200–300 words.
- **date**: Use a realistic date in `YYYY-MM-DD` format. The date is displayed as-is; no formatting is applied.
- **author**: Currently always `"Editorial Team"`. If per-author names are added later, update the card and detail templates accordingly.

## Removing an article

Delete the object from the array. The list re-renders automatically. Ids only need to be unique, not contiguous.
