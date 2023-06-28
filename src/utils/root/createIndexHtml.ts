import { writeFile } from "node:fs";
import { Options } from "../../types";

export default async function createIndexHtml(options: Options) {
  let modules = `<script type="module" src="src/main.ts" async></script>`,
    main = ``;

  switch (options.template) {
    case "vue":
      modules += `\n<script type="module" src="src/_authorModal.ts" async></script>`;
      main += `<main id="app"></main>`;
      break;

    default:
      main += `<main>
  <h1 class="sr-only"></h1>
</main>`;
      break;
  }

  const content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Clark Tolosa, clarktolosa@gmail.com" />

    <title></title>

    <!-- JS Modules -->
    ${modules}
  </head>
  <body>
    ${main}
  </body>
</html>`;

  writeFile("index.html", content, (err) => {
    if (err) throw err;
  });
}
