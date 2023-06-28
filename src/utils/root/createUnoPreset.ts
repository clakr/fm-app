import { writeFile } from "node:fs";

export default async function () {
  const content = `import { Preset } from 'unocss';

export default function presetClark(): Preset {
  return {
    name: 'presetClark',
    theme: {
      breakpoints: {
        tablet: "768px",
        desktop: "1440px",
      },
    },
    rules: [
      [
        /^mt-([\\d.-]+)$/,
        ([, value]) => ({
          "margin-top": \`\${value}rem\`,
        }),
      ],
      [
        /^mb-([\\d.-]+)$/,
        ([, value]) => ({
          "margin-bottom": \`\${value}rem\`,
        }),
      ],
      [
        /^ml-([\\d.-]+)$/,
        ([, value]) => ({
          "margin-left": \`\${value}rem\`,
        }),
      ],
      [
        /^my-([\\d.-]+)\\/([\\d.-]+)$/,
        ([, topValue, bottomValue]) => ({
          "margin-block": \`\${topValue}rem \${bottomValue}rem\`,
        }),
      ],
      [
        /^mx-([\\d.-]+)\\/([\\d.-]+)$/,
        ([, leftValue, rightValue]) => ({
          "margin-inline": \`\${leftValue}rem \${rightValue}rem\`,
        }),
      ],
      [
        /^w-([\\d.-]+)$/,
        ([, value]) => ({
          width: \`\${value}rem\`,
        }),
      ],
      [
        /^h-([\\d.-]+)$/,
        ([, value]) => ({
          height: \`\${value}rem\`,
        }),
      ],
      [
        /^fs-([\\d.-]+)$/,
        ([, value]) => ({
          "font-size": \`\${value}rem\`,
        }),
      ],
      [
        /^lh-([\\d.-]+)$/,
        ([, value]) => ({
          "line-height": \`\${value}rem\`,
        }),
      ],
      [
        /^px-([\\d.-]+)$/,
        ([, value]) => ({
          "padding-inline": \`\${value}rem\`,
        }),
      ],
      [
        /^ta-([\w]+)$/,
        ([, value]) => ({
          "text-align": value,
        }),
      ],
      [
        /^br-([\\d.-]+)$/,
        ([, value]) => ({
          "border-radius": \`\${value}rem\`,
        }),
      ],
      [
        /^py-([\\d.-]+)$/,
        ([, value]) => ({
          "padding-block": \`\${value}rem\`,
        }),
      ],
      [
        /^top-([\\d.-]+)$/,
        ([, value]) => ({
          top: \`\${value}rem\`,
        }),
      ],
      [
        /^right-([\\d.-]+)$/,
        ([, value]) => ({
          right: \`\${value}rem\`,
        }),
      ],
      [
        /^gap-([\\d.-]+)$/,
        ([, value]) => ({
          gap: \`\${value}rem\`,
        }),
      ],
      [
        /^ls-([\\d.-]+)$/,
        ([, value]) => ({
          "letter-spacing": \`\${value}rem\`,
        }),
      ],
      [
        /^pt-([\\d.-]+)$/,
        ([, value]) => ({
          "padding-top": \`\${value}rem\`,
        }),
      ],
      [
        /^pb-([\\d.-]+)$/,
        ([, value]) => ({
          "padding-bottom": \`\${value}rem\`,
        }),
      ],
      [
        /^max-w-([\\d.-]+)$/,
        ([, value]) => ({
          "max-width": \`\${value}rem\`,
        }),
      ],
      [
        /^gap-x-([\\d.-]+)$/,
        ([, value]) => ({
          "grid-column-gap": \`\${value}rem\`,
          "column-gap": \`\${value}rem\`,
        }),
      ],
    ]
  }
}`;

  writeFile("presetClark.ts", content, (err) => {
    if (err) throw err;
  });
}
