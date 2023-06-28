import { writeFile } from "node:fs";

export default async function createEnv() {
  const TSConfigContent = `{
    "compilerOptions": {
      "target": "ES2020",
      "useDefineForClassFields": true,
      "module": "ESNext",
      "lib": ["ES2020", "DOM", "DOM.Iterable"],
      "skipLibCheck": true,
  
      /* Bundler mode */
      "moduleResolution": "bundler",
      "allowImportingTsExtensions": true,
      "resolveJsonModule": true,
      "isolatedModules": true,
      "noEmit": true,
      "jsx": "preserve",
  
      /* Linting */
      "strict": true,
      "noUnusedLocals": true,
      "noUnusedParameters": true,
      "noFallthroughCasesInSwitch": true,
  
      "baseUrl": ".",
      "paths": {
        "@/*": ["src/*"]
      }
    },
    "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
    "references": [{ "path": "./tsconfig.node.json" }]
  }`;

  writeFile("tsconfig.json", TSConfigContent, (err) => {
    if (err) throw err;
  });

  const TSConfigNodeContent = `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`;

  writeFile("tsconfig.node.json", TSConfigNodeContent, (err) => {
    if (err) throw err;
  });
}
