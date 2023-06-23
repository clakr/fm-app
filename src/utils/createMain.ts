import { writeFile } from "node:fs";
import { Template } from "../types";

export default async function createMain(template: Template) {
  let imports = "";

  switch (template) {
    case "sass":
      imports = 'import "./style.scss';
      break;

    case "uno":
      imports = `import "@unocss/reset/tailwind.css";
import "virtual:uno.css";`;
      break;

    default:
      imports = 'import "./style.css';
      break;
  }

  const content = `${imports};

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

(function () {
  const title = document.querySelector("title");
  changeTextContent(title);

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);
})();`;

  writeFile("src/main.ts", content, (err) => {
    if (err) throw err;
  });
}
