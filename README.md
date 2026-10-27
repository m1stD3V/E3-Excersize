# E3: A face with options

A TypeScript/Vite prototype with a script-built SVG face and a Spin button.

Install [Deno](https://docs.deno.com/runtime/getting_started/installation/) (CI uses 2.9.7) and Git. In your cloned repository, run `deno task setup` once, then `deno task dev`. Open the printed local URL. `deno task ci` checks formatting, lint, types, and the production build. The face is in `src/main.ts`.

## Deploy

In your repository, set **Settings → Pages → Source** to **GitHub Actions**. Push to `main`, then open the successful deployment under **Actions** for your site URL.

## Credits

Tooling adapted from the course D1 starter, derived from the [S01 starter](https://github.com/ucsc-cmpm-121-f26/s01-starter/tree/8974888efb6537be82e8eb069db139ea885039da). That material has no explicit repository license; no new license is assigned. E3 graphics were staff-authored with authorized OpenAI GPT-6.1 Sol assistance. Dependencies retain their licenses.
