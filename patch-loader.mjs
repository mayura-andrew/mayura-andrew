// patch-loader.mjs

import fs from 'fs';
import path from 'path';

const loaderPath = path.join('node_modules', 'nextra', 'dist', 'loader.mjs');
const content = fs.readFileSync(loaderPath, 'utf8');

if (!content.includes("import { existsSync } from 'fs';")) {
    const patchedContent = "import { existsSync } from 'fs';\n" + content;
    fs.writeFileSync(loaderPath, patchedContent, 'utf8');
    console.log('Patched loader.mjs successfully.');
} else {
    console.log('loader.mjs is already patched.');
}