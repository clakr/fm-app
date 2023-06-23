import { writeFile } from "node:fs";
import { Template } from "../types";

export default async function createIndexHtml(template: Template) {
  const content = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="author" content="Clark Tolosa, clarktolosa@gmail.com" />

    <title></title>

    ${
      template !== "uno"
        ? `<!-- CSS -->
    <link rel="stylesheet" href="src/_preflight.css" />
    
    <!-- Font -->`
        : ""
    }

    <!-- JS Modules -->
    <script type="module" src="src/main.ts" async></script>
    <script type="module" src="src/_authorModal.ts" async></script>
  </head>
  <body>
    <main>
     <h1 class="sr-only"></h1>
    </main>
  </body>
</html>`;

  writeFile("index.html", content, (err) => {
    if (err) throw err;
  });
}
