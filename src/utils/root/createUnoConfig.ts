import { writeFile } from "node:fs";

export default async function () {
  const content = `import { defineConfig, presetWebFonts, presetWind } from "unocss";
import transformerVariantGroup from '@unocss/transformer-variant-group';
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
  transformers: [
    transformerVariantGroup(),
  ],
  layers: {
    presetClark: 3,
  },
  preflights: [
    {
      getCSS: () =>
        ":root { font-size: 62.5%; }",
    },
  ],
  theme: {},
  shortcuts: {},
  rules: [],
})`;

  writeFile("uno.config.ts", content, (err) => {
    if (err) throw err;
  });
}
