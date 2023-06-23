import { writeFile } from "node:fs";

export default async function () {
  const content = `import { defineConfig, presetWebFonts, presetWind } from "unocss";
import presetClark from './presetClark';

export default defineConfig({
  presets: [
    presetWind(),
    presetWebFonts({
      provider: "google",
      fonts: {}
    }),
    presetClark()
  ],
})`;

  writeFile("uno.config.ts", content, (err) => {
    if (err) throw err;
  });
}
