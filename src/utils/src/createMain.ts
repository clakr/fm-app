import { writeFile } from "node:fs";
import { Options } from "../../types";

export default async function createMain(options: Options) {
  let content = ``;
  let imports = ``;

  switch (options.css) {
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

  switch (options.template) {
    case "vue":
      content = `import { createApp } from "vue";
import App from "./App.vue";
import authorModal from "./_authorModal";
import projectConfig from "./_projectConfig";
import "./_preflight.css";
import "./style.css";

createApp(App)
  .use(projectConfig)
  .use(authorModal)
  .mount("#app");`;

      break;

    default:
      content = `${imports}";

function changeTextContent(element: HTMLTitleElement | Element | null) {
  if (!element) return;

  element.textContent = import.meta.env.VITE_PROJECT_NAME;
}

(function () {
  const title = document.querySelector("title");
  changeTextContent(title);

  const heading = document.querySelector(".sr-only");
  changeTextContent(heading);

  // document.documentElement.setAttribute('data-theme', 'dark');
})();`;
      break;
  }

  writeFile("src/main.ts", content, (err) => {
    if (err) throw err;
  });
}
