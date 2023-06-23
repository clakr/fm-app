import { writeFile } from "node:fs";
import { Template } from "../types";

export default async function createStyle(template: Template) {
  let fileExtension = "";
  let content = "";

  switch (template) {
    case "sass":
      fileExtension = "scss";
      content = `@use "sass.map:;
      
$breakpoints: (
  tablet: 768px,
  desktop: 1440px,
);

@mixin screen($breakpoint) {
  $screen: map-get($breakpoints, $breakpoint);

  @media screen and (min-width: $screen) {
    @content;
  }
}`;
      break;

    default:
      fileExtension = "css";
      break;
  }

  writeFile(`src/style.${fileExtension}`, content, (err) => {
    if (err) throw err;
  });
}
